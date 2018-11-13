using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
//import your context to connect your services to your database connection string.
using Games.Data;
//import EntityFrameworkCore to connect your context options to your MySQL Database.
using Microsoft.EntityFrameworkCore;
//import your Games Repository and Games Service for dependency injection.
using Games.Data.Repositories.Games;
using Games.Data.Repositories.Games.Impl;
using Games.Services.Services.Games;
using Games.Services.Services.Games.Impl;

namespace Games.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Get your connection string from your Configuration object via the ConnectionStrings and DefaultConnection Key and value.
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            //Connect your services and repositories to your database.
            //1 By first add the DbContext as a generic type.
            //2 NOw have your options returned from the lambda to be useMySQl methond, and pass in your connection string to connect your database.
            services.AddDbContext<GamesContext>(options => options.UseMySql(connectionString));
            //We will perform depenency injection in our ConfigureServices method, and also connect to our database and context.
            //They are 4 levels of dependency injection.
            //Instance-You will have one static instance that can't be extended if needed be through out entire application.
            //Singleton-Will have one single instance that can be used throughout application.
            //Scoped-Will have a instance for an entire http request. It will go through controller -> service -> repository -> context
            //Transient-A new instance will be used for each method. It will be disposed after each method, and would be created again if needed
            //In this case we will just have a single scoped instance of our repository and service.
            //Use the AddScoped to add a signature and it's correpsonding class.
            services.AddScoped<IGamesRepository, GamesRepository>();
            services.AddScoped<IGamesService, GamesService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
