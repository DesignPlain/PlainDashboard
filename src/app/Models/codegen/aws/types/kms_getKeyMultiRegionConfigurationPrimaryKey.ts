import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kms_getKeyMultiRegionConfigurationPrimaryKey {
  // The AWS Region of a primary or replica key in a multi-Region key.
  region?: string;

  // The key ARN of a primary or replica key of a multi-Region key.
  arn?: string;
}

export function kms_getKeyMultiRegionConfigurationPrimaryKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'region',
      'The AWS Region of a primary or replica key in a multi-Region key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The key ARN of a primary or replica key of a multi-Region key.',
      () => [],
      true,
      false,
    ),
  ];
}
