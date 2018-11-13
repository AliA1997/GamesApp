using System;
using System.Collections.Generic;
using System.Text;
//import your Entity/Domain classes for creating data.
using Games.Domain.Games;
//import Linq since you will be performing context operations.
using System.Linq;

namespace Games.Data.Seeds
{
    //Have the class that will implement sample data be a static class. 
    //Since it will contain only one method and that method would be static
    public static class EnsureGamesData
    {
        //Now have your Seed method be static, and it will be responsible for creating sample data for your database.
        //upon the start of your server.
        //THe seed method will take our context class as a argument, therefore enabling use to create data and save data to our context.
        public static void Seed(GamesContext context)
        {
            //We will only seed data if our table doesn't have data.
            //If the first value of the database that contains a id is null
            if(context.Games.FirstOrDefault() == null)
            {
                //We will assign a new game 
                Game newGame1 = new Game(
                    title: "Call of Duty Modern Warfare",
                    genre: "First Person Shooter",
                    releaseYear: 2007,
                    company: "Activision"
                );
                //Now add all your game and save it to your database.
                context.Games.Add(newGame1);
                context.SaveChanges();
                //We will assign a new game 
                Game newGame2 = new Game(
                    title: "Gears of War 1",
                    genre: "Third Person Shooter",
                    releaseYear: 2006,
                    company: "Epic Games"
                );
                //Now add all your game and save it to your database.
                context.Games.Add(newGame2);
                context.SaveChanges();
                //We will assign a new game 
                Game newGame3 = new Game(
                    title: "Fortnite",
                    genre: "Survival",
                    releaseYear: 2017,
                    company: "Epic Games"
                );
                //Now add all your game and save it to your database.
                context.Games.Add(newGame3);
                context.SaveChanges();

            }
            //Then have a empty return.
            return;
        }
    }
}
