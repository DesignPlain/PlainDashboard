import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption,
  container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes,
} from "./container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption";

export interface container_getClusterMaintenancePolicyMaintenanceExclusion {
  // Maintenance exclusion related options.
  exclusionOptions?: Array<container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption>;

  //
  startTime?: string;

  //
  endTime?: string;

  //
  exclusionName?: string;
}

export function container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "endTime", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "exclusionName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusionOptions",
      "Maintenance exclusion related options.",
      () =>
        container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
