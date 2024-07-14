import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions,
  container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes,
} from "./container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions";

export interface container_ClusterMaintenancePolicyMaintenanceExclusion {
  //
  endTime?: string;

  //
  exclusionName?: string;

  // MaintenanceExclusionOptions provides maintenance exclusion related options.
  exclusionOptions?: container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;

  //
  startTime?: string;
}

export function container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "exclusionName", "", [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "exclusionOptions",
      "MaintenanceExclusionOptions provides maintenance exclusion related options.",
      container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "startTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "endTime", "", [], true, false),
  ];
}
