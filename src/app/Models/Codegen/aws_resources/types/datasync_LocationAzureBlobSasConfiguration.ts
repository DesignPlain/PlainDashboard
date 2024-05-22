import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datasync_LocationAzureBlobSasConfiguration {
  // A SAS token that provides permissions to access your Azure Blob Storage.
  token?: string;
}

export function datasync_LocationAzureBlobSasConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "token",
      "A SAS token that provides permissions to access your Azure Blob Storage.",
      [],
      true,
      false,
    ),
  ];
}
