import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_DatabaseInstanceSettingsDenyMaintenancePeriod {
  // "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  endDate?: string;

  // "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
  startDate?: string;

  // Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate. The time is in format: HH:mm:SS, i.e., 00:00:00
  time?: string;
}

export function sql_DatabaseInstanceSettingsDenyMaintenancePeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "time",
      'Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate. The time is in format: HH:mm:SS, i.e., 00:00:00',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endDate",
      '"deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the no maintenance interval recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startDate",
      '"deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01',
      [],
      true,
      false,
    ),
  ];
}
