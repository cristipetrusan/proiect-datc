using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos.Table;

namespace my_new_app.Controllers;


[ApiController]
[Route("[controller]")]
public class CityDangersController : ControllerBase
{
    // private static CityDangersRepo repo = new CityDangersRepo();

    private readonly ILogger<CityDangersController> _logger;

    public CityDangersController(ILogger<CityDangersController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetCityDangers")]
    public IEnumerable<CityDanger> Get()
    {

        CloudStorageAccount storageAccount;
        storageAccount = CloudStorageAccount.Parse(Const.STORAGE_CONNECTION_STRING);

        CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
        CloudTable table = tableClient.GetTableReference(Const.TABLE_NAME);

        List<CityDanger> customerEntities = new List<CityDanger>();

        TableQuery<CityDanger> query = new TableQuery<CityDanger>();

        foreach (CityDanger entity in table.ExecuteQuery(query))
        {
            customerEntities.Add(entity);
        }

        return customerEntities;
    }

    [HttpPost(Name = "PostCityDangers")]
    public async Task PostAsync([FromBody]CityDanger customerEntity)
    {
        CloudStorageAccount storageAccount;
        storageAccount = CloudStorageAccount.Parse(Const.STORAGE_CONNECTION_STRING);

        CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
        CloudTable table = tableClient.GetTableReference(Const.TABLE_NAME);

        List<CityDanger> customerEntities = new List<CityDanger>();

        TableQuery<CityDanger> query = new TableQuery<CityDanger>();

        TableOperation insertOrMergeOperation = TableOperation.InsertOrMerge(customerEntity);

        // Execute the operation.
        TableResult result = await table.ExecuteAsync(insertOrMergeOperation);

        Console.WriteLine(customerEntity);
    }

    [HttpDelete("{partitionKey}/{rowKey}")]
    public async Task DeleteAsync(string partitionKey, string rowKey)
    {
        CloudStorageAccount storageAccount;
        storageAccount = CloudStorageAccount.Parse(Const.STORAGE_CONNECTION_STRING);

        CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());
        CloudTable table = tableClient.GetTableReference(Const.TABLE_NAME);

        // Retrieve the entity to delete.
        TableOperation retrieveOperation = TableOperation.Retrieve<CityDanger>(partitionKey, rowKey);
        TableResult result = await table.ExecuteAsync(retrieveOperation);
        CityDanger entityToDelete = result.Result as CityDanger;

        // Delete the entity.
        if (entityToDelete != null)
        {
            TableOperation deleteOperation = TableOperation.Delete(entityToDelete);
            await table.ExecuteAsync(deleteOperation);
        }
    }
}