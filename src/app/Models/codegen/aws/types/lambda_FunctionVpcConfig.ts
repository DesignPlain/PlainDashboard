import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_FunctionVpcConfig {
  // Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. Default is `false`.
  ipv6AllowedForDualStack?: boolean;

  // List of security group IDs associated with the Lambda function.
  securityGroupIds?: Array<string>;

  // List of subnet IDs associated with the Lambda function.
  subnetIds?: Array<string>;

  // ID of the VPC.
  vpcId?: string;
}

export function lambda_FunctionVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'ipv6AllowedForDualStack',
      'Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. Default is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'List of security group IDs associated with the Lambda function.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'List of subnet IDs associated with the Lambda function.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'ID of the VPC.',
      () => [],
      false,
      false,
    ),
  ];
}
