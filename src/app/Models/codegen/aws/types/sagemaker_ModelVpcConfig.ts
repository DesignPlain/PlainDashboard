import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_ModelVpcConfig {
  //
  securityGroupIds?: Array<string>;

  //
  subnets?: Array<string>;
}

export function sagemaker_ModelVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
