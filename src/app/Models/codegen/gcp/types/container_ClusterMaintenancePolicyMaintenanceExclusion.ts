import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions,
  container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes,
} from "./container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions";

export interface container_ClusterMaintenancePolicyMaintenanceExclusion {
  // MaintenanceExclusionOptions provides maintenance exclusion related options.
  exclusionOptions?: container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;

  //
  startTime?: string;

  //
  endTime?: string;

  //
  exclusionName?: string;
}

export function container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
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
      InputType.Object,
      "exclusionOptions",
      "MaintenanceExclusionOptions provides maintenance exclusion related options.",
      () =>
        container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes(),
      false,
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
