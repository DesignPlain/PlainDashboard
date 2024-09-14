import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_WorkforceSourceIpConfig {
  // A list of up to 10 CIDR values.
  cidrs?: Array<string>;
}

export function sagemaker_WorkforceSourceIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cidrs",
      "A list of up to 10 CIDR values.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
