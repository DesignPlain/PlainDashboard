export interface TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  /*
Azure shared access signature. See [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).

<a name="nested_schedule_start_end_date"></a>The `schedule_start_date` and `schedule_end_date` blocks support:
*/
  SasToken?: string;
}
