import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu {
  // The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
  min?: number;

  // The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
  max?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "min",
      "The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "max",
      "The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
  ];
}
