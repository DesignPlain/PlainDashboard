import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
  Storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials_GetTypes,
} from "./Storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials";

export interface Storage_TransferJobTransferSpecAzureBlobStorageDataSource {
  // Credentials used to authenticate API requests to Azure block.
  AzureCredentials?: Storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;

  // The container to transfer from the Azure Storage account.`
  Container?: string;

  // Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  Path?: string;

  // The name of the Azure Storage account.
  StorageAccount?: string;
}

export function Storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StorageAccount",
      "The name of the Azure Storage account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AzureCredentials",
      "Credentials used to authenticate API requests to Azure block.",
      Storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Container",
      "The container to transfer from the Azure Storage account.`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.",
      [],
      false,
      false,
    ),
  ];
}
