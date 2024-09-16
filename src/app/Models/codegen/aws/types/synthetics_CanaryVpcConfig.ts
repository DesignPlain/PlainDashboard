import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface synthetics_CanaryVpcConfig {
  // ID of the VPC where this canary is to run.
  vpcId?: string;

  // IDs of the security groups for this canary.
  securityGroupIds?: Array<string>;

  // IDs of the subnets where this canary is to run.
  subnetIds?: Array<string>;
}

export function synthetics_CanaryVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'IDs of the security groups for this canary.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'IDs of the subnets where this canary is to run.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'ID of the VPC where this canary is to run.',
      () => [],
      false,
      false,
    ),
  ];
}
