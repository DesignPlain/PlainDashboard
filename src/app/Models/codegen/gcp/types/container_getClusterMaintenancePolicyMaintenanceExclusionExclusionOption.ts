import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption {
  // The scope of automatic upgrades to restrict in the exclusion window.
  scope?: string;
}

export function container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scope",
      "The scope of automatic upgrades to restrict in the exclusion window.",
      () => [],
      true,
      false,
    ),
  ];
}
