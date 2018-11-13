using System;
using System.Collections.Generic;
using System.Text;
//import your Games.Domain to use your Game entity classes.
using Games.Domain.Games;

namespace Games.Data.Repositories.Games
{
    //Define your interface that will be used as a contract or requirements for your Repositorys.
    //We will use our interface instead of our class itself, since we can't initialize class upon creation of a service.
    //Will pass a interface instance into a constructor of a service which will define the signature of the repository.
    public interface IGamesRepository
    {
        //Define your method that will get the games from the context, 
        //Have your return type of your method be iterable of type IEnumerable, and let it have a generic type of Game
        IEnumerable<Game> GetGames();
        //Define another method that will get one Game which will not IEnumerable will return type of Game Domain model.
        Game GetGame(Guid gameId);
        //Define a method creating a game by passing a game domain model as a argument which would convert in our services. 
        Game CreateGame(Game createdGame);
        //Define a method for updating a game by passing a game domain model as a argument which would be converted in our services.
        void UpdateGame(Game updatedGame);
        //Define a method for deleting a game by passing a Guid as a argument, which would retrieve a model from our context then remove it.
        void DeleteGame(Guid gameId);
    }
}
