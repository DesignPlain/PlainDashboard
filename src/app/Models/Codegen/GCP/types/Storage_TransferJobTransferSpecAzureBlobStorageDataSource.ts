import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
  storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials_GetTypes,
} from "./storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials";

export interface storage_TransferJobTransferSpecAzureBlobStorageDataSource {
  // The name of the Azure Storage account.
  storageAccount?: string;

  // Credentials used to authenticate API requests to Azure block.
  azureCredentials?: storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;

  // The container to transfer from the Azure Storage account.`
  container?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  path?: string;
}

export function storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "storageAccount",
      "The name of the Azure Storage account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "azureCredentials",
      "Credentials used to authenticate API requests to Azure block.",
      storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "container",
      "The container to transfer from the Azure Storage account.`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      [],
      false,
      false,
    ),
  ];
}
