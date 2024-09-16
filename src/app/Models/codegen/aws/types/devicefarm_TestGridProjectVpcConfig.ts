import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface devicefarm_TestGridProjectVpcConfig {
  // A list of VPC security group IDs in your Amazon VPC.
  securityGroupIds?: Array<string>;

  // A list of VPC subnet IDs in your Amazon VPC.
  subnetIds?: Array<string>;

  // The ID of the Amazon VPC.
  vpcId?: string;
}

export function devicefarm_TestGridProjectVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'A list of VPC security group IDs in your Amazon VPC.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'A list of VPC subnet IDs in your Amazon VPC.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The ID of the Amazon VPC.',
      () => [],
      true,
      false,
    ),
  ];
}
