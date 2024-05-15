import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Looker_InstanceDenyMaintenancePeriodEndDate,
  Looker_InstanceDenyMaintenancePeriodEndDate_GetTypes,
} from "./Looker_InstanceDenyMaintenancePeriodEndDate";
import {
  Looker_InstanceDenyMaintenancePeriodStartDate,
  Looker_InstanceDenyMaintenancePeriodStartDate_GetTypes,
} from "./Looker_InstanceDenyMaintenancePeriodStartDate";
import {
  Looker_InstanceDenyMaintenancePeriodTime,
  Looker_InstanceDenyMaintenancePeriodTime_GetTypes,
} from "./Looker_InstanceDenyMaintenancePeriodTime";

export interface Looker_InstanceDenyMaintenancePeriod {
  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  EndDate?: Looker_InstanceDenyMaintenancePeriodEndDate;

  /*
Required. Start date of the deny maintenance period
Structure is documented below.
*/
  StartDate?: Looker_InstanceDenyMaintenancePeriodStartDate;

  /*
Required. Start time of the window in UTC time.
Structure is documented below.
*/
  Time?: Looker_InstanceDenyMaintenancePeriodTime;
}

export function Looker_InstanceDenyMaintenancePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EndDate",
      "Required. Start date of the deny maintenance period\nStructure is documented below.",
      Looker_InstanceDenyMaintenancePeriodEndDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartDate",
      "Required. Start date of the deny maintenance period\nStructure is documented below.",
      Looker_InstanceDenyMaintenancePeriodStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Time",
      "Required. Start time of the window in UTC time.\nStructure is documented below.",
      Looker_InstanceDenyMaintenancePeriodTime_GetTypes(),
      true,
      false,
    ),
  ];
}
