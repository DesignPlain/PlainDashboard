import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface comprehend_EntityRecognizerVpcConfig {
  // List of security group IDs.
  securityGroupIds?: Array<string>;

  // List of VPC subnets.
  subnets?: Array<string>;
}

export function comprehend_EntityRecognizerVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "List of security group IDs.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "List of VPC subnets.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
