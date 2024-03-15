import { TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials } from "./TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials";

export interface TransferJobTransferSpecAzureBlobStorageDataSource {
  // The name of the Azure Storage account.
  StorageAccount?: string;

  // Credentials used to authenticate API requests to Azure block.
  AzureCredentials?: TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;

  // The container to transfer from the Azure Storage account.`
  Container?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  Path?: string;
}
