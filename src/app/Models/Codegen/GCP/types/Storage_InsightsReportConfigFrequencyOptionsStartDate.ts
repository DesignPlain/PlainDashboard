import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_InsightsReportConfigFrequencyOptionsStartDate {
  // The day of the month to start generating inventory reports.
  day?: number;

  // The month to start generating inventory reports.
  month?: number;

  // The year to start generating inventory reports
  year?: number;
}

export function storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "year",
      "The year to start generating inventory reports",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "day",
      "The day of the month to start generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "month",
      "The month to start generating inventory reports.",
      [],
      true,
      false,
    ),
  ];
}
