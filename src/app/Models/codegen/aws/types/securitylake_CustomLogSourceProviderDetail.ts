import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securitylake_CustomLogSourceProviderDetail {
  // The location of the partition in the Amazon S3 bucket for Security Lake.
  location?: string;

  // The ARN of the IAM role to be used by the entity putting logs into your custom source partition.
  roleArn?: string;
}

export function securitylake_CustomLogSourceProviderDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM role to be used by the entity putting logs into your custom source partition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The location of the partition in the Amazon S3 bucket for Security Lake.',
      () => [],
      true,
      false,
    ),
  ];
}
