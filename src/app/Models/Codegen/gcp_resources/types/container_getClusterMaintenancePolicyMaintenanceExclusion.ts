import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption,
  container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes,
} from "./container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption";

export interface container_getClusterMaintenancePolicyMaintenanceExclusion {
  //
  endTime?: string;

  //
  exclusionName?: string;

  // Maintenance exclusion related options.
  exclusionOptions?: Array<container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption>;

  //
  startTime?: string;
}

export function container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "endTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "exclusionName", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "exclusionOptions",
      "Maintenance exclusion related options.",
      container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "startTime", "", [], true, false),
  ];
}
