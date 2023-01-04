namespace CityDangersAlertAPI;

public class CityDangersRepo
{
    private List<CityDanger> repo = new List<CityDanger>();

    public CityDangersRepo()
    {
        repo.Add(new CityDanger{
            Location = "Timisoara",
            Type = "Groapa",
            Summary = "In fata la mall"
        });
        repo.Add(new CityDanger{
            Location = "Deva",
            Type = "Groapa",
            Summary = "Acasa la mine"
        });
    }

    public List<CityDanger> GetRepo()
    {
        return repo;
    }

    public void Add(CityDanger cityDanger)
    {
        repo.Add(cityDanger);
    }
}
