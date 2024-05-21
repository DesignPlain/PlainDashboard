import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobScheduleScheduleEndDate {
  /*
Day of month. Must be from 1 to 31 and valid for the year and month.

<a name="nested_start_time_of_day"></a>The `start_time_of_day` blocks support:
*/
  day?: number;

  // Month of year. Must be from 1 to 12.
  month?: number;

  // Year of date. Must be from 1 to 9999.
  year?: number;
}

export function storage_TransferJobScheduleScheduleEndDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "month",
      "Month of year. Must be from 1 to 12.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "year",
      "Year of date. Must be from 1 to 9999.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "day",
      'Day of month. Must be from 1 to 31 and valid for the year and month.\n\n<a name="nested_start_time_of_day"></a>The `start_time_of_day` blocks support:',
      [],
      true,
      false,
    ),
  ];
}
