import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workstations_WorkstationConfigEncryptionKey {
  // The name of the Google Cloud KMS encryption key.
  kmsKey?: string;

  // The service account to use with the specified KMS key.
  kmsKeyServiceAccount?: string;
}

export function workstations_WorkstationConfigEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyServiceAccount',
      'The service account to use with the specified KMS key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKey',
      'The name of the Google Cloud KMS encryption key.',
      () => [],
      true,
      false,
    ),
  ];
}
