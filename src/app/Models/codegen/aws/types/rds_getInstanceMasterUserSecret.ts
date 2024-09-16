import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_getInstanceMasterUserSecret {
  // The Amazon Resource Name (ARN) of the secret.
  secretArn?: string;

  // The status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.
  secretStatus?: string;

  // The Amazon Web Services KMS key identifier that is used to encrypt the secret.
  kmsKeyId?: string;
}

export function rds_getInstanceMasterUserSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretArn',
      'The Amazon Resource Name (ARN) of the secret.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretStatus',
      'The status of the secret. Valid Values: `creating` | `active` | `rotating` | `impaired`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'The Amazon Web Services KMS key identifier that is used to encrypt the secret.',
      () => [],
      true,
      false,
    ),
  ];
}
