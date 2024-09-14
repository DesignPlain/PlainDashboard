import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount {
  // The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
  max?: number;

  // The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
  min?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "min",
      "The minimum number of network interfaces. To specify no minimum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "max",
      "The maximum number of network interfaces. To specify no maximum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
  ];
}
