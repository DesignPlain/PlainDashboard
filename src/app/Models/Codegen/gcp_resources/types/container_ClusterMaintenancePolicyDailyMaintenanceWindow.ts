import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterMaintenancePolicyDailyMaintenanceWindow {
  //
  duration?: string;

  //
  startTime?: string;
}

export function container_ClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "duration", "", [], false, false),
    new DynamicUIProps(InputType.String, "startTime", "", [], true, false),
  ];
}
