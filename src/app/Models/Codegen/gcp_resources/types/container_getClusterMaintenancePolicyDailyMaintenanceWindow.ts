import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterMaintenancePolicyDailyMaintenanceWindow {
  //
  duration?: string;

  //
  startTime?: string;
}

export function container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "duration", "", [], true, false),
    new DynamicUIProps(InputType.String, "startTime", "", [], true, false),
  ];
}
