import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterMaintenancePolicyRecurringWindow {
  //
  EndTime?: string;

  //
  Recurrence?: string;

  //
  StartTime?: string;
}

export function Container_ClusterMaintenancePolicyRecurringWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "EndTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "Recurrence", "", [], true, false),
    new DynamicUIProps(InputType.String, "StartTime", "", [], true, false),
  ];
}
