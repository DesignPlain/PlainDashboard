import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  connect_getHoursOfOperationConfigEndTime,
  connect_getHoursOfOperationConfigEndTime_GetTypes,
} from "./connect_getHoursOfOperationConfigEndTime";
import {
  connect_getHoursOfOperationConfigStartTime,
  connect_getHoursOfOperationConfigStartTime_GetTypes,
} from "./connect_getHoursOfOperationConfigStartTime";

export interface connect_getHoursOfOperationConfig {
  // Day that the hours of operation applies to.
  day?: string;

  // End time block specifies the time that your contact center closes. The `end_time` is documented below.
  endTimes?: Array<connect_getHoursOfOperationConfigEndTime>;

  // Start time block specifies the time that your contact center opens. The `start_time` is documented below.
  startTimes?: Array<connect_getHoursOfOperationConfigStartTime>;
}

export function connect_getHoursOfOperationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "day",
      "Day that the hours of operation applies to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "endTimes",
      "End time block specifies the time that your contact center closes. The `end_time` is documented below.",
      () => connect_getHoursOfOperationConfigEndTime_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "startTimes",
      "Start time block specifies the time that your contact center opens. The `start_time` is documented below.",
      () => connect_getHoursOfOperationConfigStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
