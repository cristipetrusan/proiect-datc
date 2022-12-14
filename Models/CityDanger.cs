using Microsoft.Azure.Cosmos.Table;

namespace my_new_app;

public class CityDanger : TableEntity
{
    public CityDanger() { }
    public CityDanger(string type, string coordinates)
    {
        PartitionKey = type;
        RowKey = coordinates;
    }
    
    // type (Pothole, Garbage, etc) - PARTITION KEY
    // location (coordinates) - ROW KEY
    // status = nou
    // summary
    // owner of the report
    public string? Summary { get; set; }
    public string? Status { get; set; }
    public string? Owner { get; set; }
}