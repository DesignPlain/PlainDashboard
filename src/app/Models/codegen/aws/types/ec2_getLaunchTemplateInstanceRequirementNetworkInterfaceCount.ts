import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount {
  //
  max?: number;

  //
  min?: number;
}

export function ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "max", "", () => [], true, false),
    new DynamicUIProps(InputType.Number, "min", "", () => [], true, false),
  ];
}
