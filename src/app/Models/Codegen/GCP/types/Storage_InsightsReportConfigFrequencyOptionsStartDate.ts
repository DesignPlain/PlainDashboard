import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_InsightsReportConfigFrequencyOptionsStartDate {
  // The day of the month to start generating inventory reports.
  Day?: number;

  // The month to start generating inventory reports.
  Month?: number;

  // The year to start generating inventory reports
  Year?: number;
}

export function Storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "The day of the month to start generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Month",
      "The month to start generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Year",
      "The year to start generating inventory reports",
      [],
      true,
      false,
    ),
  ];
}
