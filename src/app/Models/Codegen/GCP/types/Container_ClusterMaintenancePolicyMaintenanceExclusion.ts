import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions,
  Container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes,
} from "./Container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions";

export interface Container_ClusterMaintenancePolicyMaintenanceExclusion {
  //
  ExclusionName?: string;

  // MaintenanceExclusionOptions provides maintenance exclusion related options.
  ExclusionOptions?: Container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;

  //
  StartTime?: string;

  //
  EndTime?: string;
}

export function Container_ClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "EndTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "ExclusionName", "", [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "ExclusionOptions",
      "MaintenanceExclusionOptions provides maintenance exclusion related options.",
      Container_ClusterMaintenancePolicyMaintenanceExclusionExclusionOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "StartTime", "", [], true, false),
  ];
}
