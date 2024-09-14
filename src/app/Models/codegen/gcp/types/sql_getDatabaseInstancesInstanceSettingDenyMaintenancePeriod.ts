import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod {
  // End date before which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  endDate?: string;

  // Start date after which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  startDate?: string;

  // Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00
  time?: string;
}

export function sql_getDatabaseInstancesInstanceSettingDenyMaintenancePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "time",
      'Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endDate",
      "End date before which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startDate",
      "Start date after which maintenance will not take place. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01",
      () => [],
      true,
      false,
    ),
  ];
}
