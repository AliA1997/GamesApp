using System;
using System.Collections.Generic;
using System.Text;
//Import your view models which will be your domain model convert to view model
//which will be what we want to display to the user, in this case we do not them seeing the id of our data.
using Games.Services.ViewModels;

namespace Games.Services.Services.Games
{
    //Define your signature which will be passed into your controller file 
    //that will be responsible for retrieving data for your api from your repositories 
    public interface IGamesService
    {
        //Define a method requirement that will be responsible for retrieving data.
        IEnumerable<GameViewModel> GetGames();
        //Define a method requirement that will be responsible for retrieving one game using the games id.
        GameViewModel GetGame(Guid gameId);
        //Define a method that will create a game using the GameViewModel that is passed via argument.
        GameViewModel CreateGame(GameViewModel gameToCreate);
        //Define a method that will update a game using the GaemViewModel that is passed via argument, but will return a 204 status code which will be void.
        void UpdateGame(GameViewModel gameToUpdate);
        //Define a method that will delete a game using a gameId via argument since it will return a 204 status code.
        void DeleteGame(Guid gameId);
    }
}
