import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  /*
Azure shared access signature. See [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).

<a name="nested_schedule_start_end_date"></a>The `schedule_start_date` and `schedule_end_date` blocks support:
*/
  sasToken?: string;
}

export function storage_TransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sasToken",
      'Azure shared access signature. See [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).\n\n<a name="nested_schedule_start_end_date"></a>The `schedule_start_date` and `schedule_end_date` blocks support:',
      [],
      true,
      false,
    ),
  ];
}
