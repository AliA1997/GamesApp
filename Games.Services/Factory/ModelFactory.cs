using System;
using System.Collections.Generic;
using System.Text;
//import your domain models and your view models
using Games.Domain.Games;
using Games.Services.ViewModels;

namespace Games.Services.Factory
{
    //Make your class static since all the method would be static, and will be only responsible for creating domain models for insertion in the future,
    //view models for making the data recieved viewable to the user.
    public static class ModelFactory
    {
        //Now create a method that will responsible for creating view models therefore making your domain model viewable to the user.
        public static GameViewModel CreateViewModel(Game gameToView)
        {
            //Have it return a new GameViewModel instance with it's property assign to the gameTOView properties.
            return new GameViewModel()
            {
                Id = gameToView.Id,
                Title = gameToView.Title,
                Genre = gameToView.Genre,
                ReleaseYear = gameToView.ReleaseYear,
                Company = gameToView.Company
            };
        }
        
        //Now create a method that will be responsible for creating domain therefore making your viewmodel suitable to create data.
        public static Game CreateDomainModel(GameViewModel gameToCreate)
        {
            //Now return a new Game domain model
            return new Game(
                title: gameToCreate.Title,
                genre: gameToCreate.Genre,
                releaseYear: gameToCreate.ReleaseYear,
                company: gameToCreate.Company
            );
        }
    }
}
