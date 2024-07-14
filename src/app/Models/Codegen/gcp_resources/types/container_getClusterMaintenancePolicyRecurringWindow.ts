import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterMaintenancePolicyRecurringWindow {
  //
  endTime?: string;

  //
  recurrence?: string;

  //
  startTime?: string;
}

export function container_getClusterMaintenancePolicyRecurringWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "endTime", "", [], true, false),
    new DynamicUIProps(InputType.String, "recurrence", "", [], true, false),
    new DynamicUIProps(InputType.String, "startTime", "", [], true, false),
  ];
}
