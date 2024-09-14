import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_CustomModelVpcConfig {
  // VPC configuration security group IDs.
  securityGroupIds?: Array<string>;

  // VPC configuration subnets.
  subnetIds?: Array<string>;
}

export function bedrock_CustomModelVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "VPC configuration security group IDs.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "VPC configuration subnets.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
