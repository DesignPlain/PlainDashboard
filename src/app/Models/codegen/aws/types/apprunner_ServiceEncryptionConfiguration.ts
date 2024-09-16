import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apprunner_ServiceEncryptionConfiguration {
  // ARN of the KMS key used for encryption.
  kmsKey?: string;
}

export function apprunner_ServiceEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKey',
      'ARN of the KMS key used for encryption.',
      () => [],
      true,
      true,
    ),
  ];
}
