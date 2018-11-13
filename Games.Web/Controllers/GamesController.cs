using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//import your Services to access your repository which therefore will access your context, then will access your database.
using Games.Services.Services.Games;
using Games.Services.ViewModels;

namespace Games.Web.Controllers
{
    [Route("api/games")]
    public class GamesController : ControllerBase
    {
        //Now assign a private variable to a signature of your GamesService.
        private IGamesService _gamesService;
        //NOw assign the value passed in via the Startup cs file to your games service.
        public GamesController(IGamesService gamesService)
        {
            _gamesService = gamesService;
        }
        // GET api/games
        //Return a 200 status code, with your data.
        //Have all your methods return the Signature of ActionResult called IActionResult
        //Have a data annotation or decorate your method indicating it is a get http request.
        [HttpGet]
        public IActionResult Get()
        {
            //Assign the data you are getting from the service to variable.
            IEnumerable<GameViewModel> games = _gamesService.GetGames();
            //Now return a 200 status code via the Ok method and the data you would want to return.
            return Ok(games);
        }

        // GET api/games/Guid
        //Return a 200 status code with your data.
        //Have a data annotation or decorate your method indicating it is a get http request.
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            //Assign the single game you are getting from the service to variable.
            GameViewModel game = _gamesService.GetGame(id);
            //Now return a 200 status code via the Ok method and the data you would want to return.  
            return Ok(game);
        }

        // POST api/games
        //Have a data annotation or decorate your method indicating your method is http post request.
        [HttpPost]
        //Have your argument be your view model, since it will be a object.
        //Have your method return a IActionResult.
        public IActionResult Post([FromBody] GameViewModel gameForm)
        {
            //Assign the result of creating your game.
            GameViewModel gameToReturn = _gamesService.CreateGame(gameForm);
            //REturn a 201 status in the form of Created which is type of IACtionResult.
            //With a return url as first argument, and your data as a second argument.
            return Created("creategame", gameToReturn);
        }

        // PUT api/games/update-game
        //Have a data annotation or decorate your method indicating your method is a http patch request.
        [HttpPatch("update-game")]
        //Have your argument be your view model since it will be a object.
        //Have it return a IActionREsult
        public IActionResult Update([FromBody] GameViewModel gameForm)
        {
            //Update your game.
            _gamesService.UpdateGame(gameForm);
            //Then return a 204 status code which will return noCOntent.
            return NoContent();
        }

        // DELETE api//games/delete-game/Guid
        //Have a data annotation or decorate your method indicating your method is a http delete request.
        [HttpDelete("delete-game/{id}")]
        //Have your argument be a id
        //Have it return a IActionResult
        public IActionResult Delete(Guid id)
        {
            //Delete your game.
            _gamesService.DeleteGame(id);
            //Now return a 204 status code which will be NoCOntent.
            return NoContent();
        }
    }
}
