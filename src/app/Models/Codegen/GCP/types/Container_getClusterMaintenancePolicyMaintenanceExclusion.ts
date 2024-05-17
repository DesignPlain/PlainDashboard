import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption,
  Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes,
} from "./Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption";

export interface Container_getClusterMaintenancePolicyMaintenanceExclusion {
  //
  ExclusionName?: string;

  // Maintenance exclusion related options.
  ExclusionOptions?: Array<Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption>;

  //
  StartTime?: string;

  //
  EndTime?: string;
}

export function Container_getClusterMaintenancePolicyMaintenanceExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "ExclusionName", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "ExclusionOptions",
      "Maintenance exclusion related options.",
      Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "StartTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "EndTime", "", [], true, false),
  ];
}
