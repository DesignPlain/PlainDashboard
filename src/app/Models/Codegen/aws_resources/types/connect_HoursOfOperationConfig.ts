import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  connect_HoursOfOperationConfigEndTime,
  connect_HoursOfOperationConfigEndTime_GetTypes,
} from "./connect_HoursOfOperationConfigEndTime";
import {
  connect_HoursOfOperationConfigStartTime,
  connect_HoursOfOperationConfigStartTime_GetTypes,
} from "./connect_HoursOfOperationConfigStartTime";

export interface connect_HoursOfOperationConfig {
  // Specifies the day that the hours of operation applies to.
  day?: string;

  // A end time block specifies the time that your contact center closes. The `end_time` is documented below.
  endTime?: connect_HoursOfOperationConfigEndTime;

  // A start time block specifies the time that your contact center opens. The `start_time` is documented below.
  startTime?: connect_HoursOfOperationConfigStartTime;
}

export function connect_HoursOfOperationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "day",
      "Specifies the day that the hours of operation applies to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "endTime",
      "A end time block specifies the time that your contact center closes. The `end_time` is documented below.",
      connect_HoursOfOperationConfigEndTime_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "startTime",
      "A start time block specifies the time that your contact center opens. The `start_time` is documented below.",
      connect_HoursOfOperationConfigStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
