import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emrserverless_ApplicationNetworkConfiguration {
  // The array of security group Ids for customer VPC connectivity.
  securityGroupIds?: Array<string>;

  // The array of subnet Ids for customer VPC connectivity.
  subnetIds?: Array<string>;
}

export function emrserverless_ApplicationNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'The array of security group Ids for customer VPC connectivity.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'The array of subnet Ids for customer VPC connectivity.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
