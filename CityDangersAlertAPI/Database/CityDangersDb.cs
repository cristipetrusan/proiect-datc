using CityDangersAlertAPI;
using Microsoft.EntityFrameworkCore;
class CityDangersDb : DbContext
{
    public CityDangersDb(DbContextOptions<CityDangersDb> options)
        : base(options) { }

    public DbSet<CityDanger> CityDangers => Set<CityDanger>();
}
