import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedaccess_GroupSseConfiguration {
  // ARN of the KMS key to use.
  kmsKeyArn?: string;

  //
  customerManagedKeyEnabled?: boolean;
}

export function verifiedaccess_GroupSseConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'customerManagedKeyEnabled',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      'ARN of the KMS key to use.',
      () => [],
      false,
      false,
    ),
  ];
}
