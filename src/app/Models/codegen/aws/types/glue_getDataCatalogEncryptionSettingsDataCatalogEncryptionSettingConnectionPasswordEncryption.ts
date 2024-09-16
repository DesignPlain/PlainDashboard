import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption {
  // KMS key ARN that is used to encrypt the connection password.
  awsKmsKeyId?: string;

  // When set to `true`, passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently of the catalog encryption.
  returnConnectionPasswordEncrypted?: boolean;
}

export function glue_getDataCatalogEncryptionSettingsDataCatalogEncryptionSettingConnectionPasswordEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'awsKmsKeyId',
      'KMS key ARN that is used to encrypt the connection password.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'returnConnectionPasswordEncrypted',
      'When set to `true`, passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently of the catalog encryption.',
      () => [],
      true,
      false,
    ),
  ];
}
