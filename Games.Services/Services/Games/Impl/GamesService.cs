using System;
using System.Collections.Generic;
using System.Text;
//import LInq for performing database methods.
using System.Linq;
//import your Repository class for retrieving data from your context class.
using Games.Data.Repositories.Games;
//import your Factory for converting domain models to view models.
using Games.Services.Factory;
//import your view models to display data for the user.
using Games.Services.ViewModels;
using Games.Domain.Games;

namespace Games.Services.Services.Games.Impl
{
    //Have your GamesService class follow the IGamesService signature.
    public class GamesService : IGamesService
    {
        //Define a private variable that will hold your repository that will be responsible for retrieving data from context class.
        private IGamesRepository _repository;
        //Define a constructor that will take your Repository interface as an argument, and assign it to a private variable.
        public GamesService(IGamesRepository repository)
        {
            _repository = repository;
        }
        //Define methods that you will use to get data from your repository
        public IEnumerable<GameViewModel> GetGames()
        {
            //Now assign the data your get from the repository to variable of your return type, and loop over the data returned.
            //Have a lambda that convert each value to a view model.
            IEnumerable<GameViewModel> gamesReturned = _repository.GetGames().Select(game => ModelFactory.CreateViewModel(game));
            //NOw return the games 
            return gamesReturned;
        }
        //Define a method that will reponsible for retrieving just one games based on the title 
        //and we will convert the returned value as a view model
        public GameViewModel GetGame(Guid id)
        {
            //Now assign the data your are getting from the repository, and convert it to a data presentable to user.
            GameViewModel gameToReturn = ModelFactory.CreateViewModel(_repository.GetGame(id));
            //now return the data.
            return gameToReturn;
        }
        //Now define a method responsible for creating a new game.
        public GameViewModel CreateGame(GameViewModel gameToCreate)
        {
            //Convert the argument suitable to be created using the ModelFactory.CreateDomainModel.
            Game newGame = ModelFactory.CreateDomainModel(gameToCreate);
            //Create the game
            _repository.CreateGame(newGame);
            //Once successful return the argument.
            return gameToCreate;
        }
        //NOw define a method responsible for update a game
        public void UpdateGame(GameViewModel gameToUpdate)
        {
            //Convert the argument suitable to be updated using the ModelFactory.CreateDomainModel
            Game updatedGame = ModelFactory.CreateDomainModel(gameToUpdate);
            //Update the game using the repository UpdateGame method.
            _repository.UpdateGame(updatedGame);
            //If the method is successful return out of the function.
            return;
        }
        //Now define a method responsible for deleting a game.
        public void DeleteGame(Guid gameId)
        {
            //Pass the id to the repository.
            _repository.DeleteGame(gameId);
            //If successful return out of the method.
            return;
        }
    }
}
