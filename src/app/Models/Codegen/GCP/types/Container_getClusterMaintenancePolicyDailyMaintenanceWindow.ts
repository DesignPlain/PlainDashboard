import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterMaintenancePolicyDailyMaintenanceWindow {
  //
  Duration?: string;

  //
  StartTime?: string;
}

export function Container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Duration", "", [], true, false),
    new DynamicUIProps(InputType.String, "StartTime", "", [], true, false),
  ];
}
