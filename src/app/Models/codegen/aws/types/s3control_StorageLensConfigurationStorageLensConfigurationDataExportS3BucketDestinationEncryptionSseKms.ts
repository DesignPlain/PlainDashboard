import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms {
  // KMS key ARN.
  keyId?: string;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'keyId',
      'KMS key ARN.',
      () => [],
      true,
      false,
    ),
  ];
}
