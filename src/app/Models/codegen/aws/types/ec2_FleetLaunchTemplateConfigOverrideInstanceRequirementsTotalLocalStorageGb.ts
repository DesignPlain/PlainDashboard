import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb {
  // The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
  max?: number;

  // The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
  min?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "max",
      "The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "min",
      "The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.",
      () => [],
      false,
      false,
    ),
  ];
}
