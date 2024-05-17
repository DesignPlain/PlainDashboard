import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption {
  // The scope of automatic upgrades to restrict in the exclusion window.
  Scope?: string;
}

export function Container_getClusterMaintenancePolicyMaintenanceExclusionExclusionOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Scope",
      "The scope of automatic upgrades to restrict in the exclusion window.",
      [],
      true,
      false,
    ),
  ];
}
