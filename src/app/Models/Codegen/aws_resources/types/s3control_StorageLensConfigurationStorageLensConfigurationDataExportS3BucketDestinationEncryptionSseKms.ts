import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms {
  // KMS key ARN.
  keyId?: string;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyId",
      "KMS key ARN.",
      [],
      true,
      false,
    ),
  ];
}
