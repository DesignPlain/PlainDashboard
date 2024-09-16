import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_WorkforceWorkforceVpcConfig {
  // The VPC security group IDs. The security groups must be for the same VPC as specified in the subnet.
  securityGroupIds?: Array<string>;

  // The ID of the subnets in the VPC that you want to connect.
  subnets?: Array<string>;

  // The IDs for the VPC service endpoints of your VPC workforce.
  vpcEndpointId?: string;

  // The ID of the VPC that the workforce uses for communication.
  vpcId?: string;
}

export function sagemaker_WorkforceWorkforceVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnets',
      'The ID of the subnets in the VPC that you want to connect.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcEndpointId',
      'The IDs for the VPC service endpoints of your VPC workforce.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The ID of the VPC that the workforce uses for communication.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'The VPC security group IDs. The security groups must be for the same VPC as specified in the subnet.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
