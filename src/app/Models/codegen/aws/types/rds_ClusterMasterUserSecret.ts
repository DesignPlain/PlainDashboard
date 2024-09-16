import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_ClusterMasterUserSecret {
  // ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
  kmsKeyId?: string;

  // Amazon Resource Name (ARN) of the secret.
  secretArn?: string;

  // Status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.
  secretStatus?: string;
}

export function rds_ClusterMasterUserSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretArn',
      'Amazon Resource Name (ARN) of the secret.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretStatus',
      'Status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.',
      () => [],
      false,
      false,
    ),
  ];
}
