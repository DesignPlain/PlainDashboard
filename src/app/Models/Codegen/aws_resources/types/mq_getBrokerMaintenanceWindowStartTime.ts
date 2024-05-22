import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_getBrokerMaintenanceWindowStartTime {
  //
  dayOfWeek?: string;

  //
  timeOfDay?: string;

  //
  timeZone?: string;
}

export function mq_getBrokerMaintenanceWindowStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "dayOfWeek", "", [], true, false),
    new DynamicUIProps(InputType.String, "timeOfDay", "", [], true, false),
    new DynamicUIProps(InputType.String, "timeZone", "", [], true, false),
  ];
}
