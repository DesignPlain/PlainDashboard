import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_FunctionVpcConfig {
  // List of security group IDs associated with the Lambda function.
  securityGroupIds?: Array<string>;

  // List of subnet IDs associated with the Lambda function.
  subnetIds?: Array<string>;

  //
  vpcId?: string;

  // Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. Default is `false`.
  ipv6AllowedForDualStack?: boolean;
}

export function lambda_FunctionVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "List of security group IDs associated with the Lambda function.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "List of subnet IDs associated with the Lambda function.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "vpcId", "", [], false, false),
    new DynamicUIProps(
      InputType.Bool,
      "ipv6AllowedForDualStack",
      "Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. Default is `false`.",
      [],
      false,
      false,
    ),
  ];
}
