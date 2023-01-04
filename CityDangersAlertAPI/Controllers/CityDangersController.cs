using Microsoft.AspNetCore.Mvc;

namespace CityDangersAlertAPI.Controllers;


[ApiController]
[Route("[controller]")]
public class CityDangersController : ControllerBase
{
    CityDangersRepo repo = new CityDangersRepo();
    private static readonly string[] Summaries = new[]
    {
        "Pothole", "Trash", "Other"
    };
    private static readonly string[] Locations = new[]
    {
        "Townhall", "IuliusTown", "ShoppingCity"
    };

    private readonly ILogger<CityDangersController> _logger;

    public CityDangersController(ILogger<CityDangersController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetCityDangers")]
    public IEnumerable<CityDanger> Get()
    {
        // return Enumerable.Range(1, 5).Select(index => new CityDanger
        // {
        //     Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        //     Location = Locations[Random.Shared.Next(Locations.Length)],
        //     Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        // })
        // .ToArray();
        return repo.GetRepo();
    }

    [HttpPost(Name = "PostCityDangers")]
    public void Post([FromBody]CityDanger cityDanger)
    {
        repo.Add(cityDanger);
        Console.WriteLine(cityDanger);
    }

}
