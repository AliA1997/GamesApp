using System;
using System.Collections.Generic;
using System.Text;
//import Linq for performing database methods to retrieve/create/update and delete data from your context class.
using System.Linq;
//import your Domain class library for using your Entity classes.
using Games.Domain.Games;

namespace Games.Data.Repositories.Games.Impl
{
    //Have your Games Repository class follow your IGamesRepository interface signature.
    public class GamesRepository : IGamesRepository
    {
        //Define a private variable of type GamesCOntext used to retrieve data from database.
        //Have it private since you are not using it outside this class.
        private GamesContext _context;
        //Define a constructor that will pass a context variable as a argument.
        public GamesRepository(GamesContext context)
        {
            //Have your private variable which will be responsible retrieving data from database.
            _context = context;
        }
        //Now define your methods that will be responsible for retrieving data..
        public IEnumerable<Game> GetGames()
        {
            //Assign a variable of your return type. 
            //The toList method will convert your Games returned to a IEnumerable instead of List.
            IEnumerable<Game> games = _context.Games.ToList();
            //Now return the games 
            return games;
        }
        //Now define a method that will responsible for retrieving one game by using a id as a argument.
        public Game GetGame(Guid gameId)
        {
            //Assign a variable of your return type.
            //Have it find a specific games based on a id via argument.
            Game gameToReturn = _context.Games.FirstOrDefault(game => game.Id == gameId);
            //Return the game retrieved.
            return gameToReturn;
        }
        //Now define a method that will be responsible for creating a new game via argument.
        public Game CreateGame(Game createdGame)
        {
            //We will add our created game to our Games property in our context which will insert it into our database.
            _context.Games.Add(createdGame);
            //Then we will save our changes in our context classes.
            _context.SaveChanges();
            //Now just return the created game.
            return createdGame;
        }
        //Now define a method that will be responsible for updating a game via argument, our service will return void .
        public void UpdateGame(Game updatedGame)
        {
            //Now update the game using your argument.
            _context.Games.Update(updatedGame);
            //Now save your changes to your context classes.
            _context.SaveChanges();
            return;
        }
        //Now define a method that will be responsible for deleting a game via a Guid argument, and will return void since our service is returning void.
        public void DeleteGame(Guid gameId)
        {
            //Find the game your are gonna delete using linq first or default method that will return the first element if it exists.
            //Compare each game's id to your gameId argument.
            Game gameToDelete = _context.Games.FirstOrDefault(game => game.Id == gameId);
            //Then if your game is not null delete that game.
            if (gameToDelete != null) _context.Games.Remove(gameToDelete);
            //Then save changes.
            _context.SaveChanges();
            //Return out of the function.
            return;
        }
    }
}
