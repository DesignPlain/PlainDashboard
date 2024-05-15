import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_InsightsReportConfigFrequencyOptionsEndDate {
  // The month to stop generating inventory reports.
  Month?: number;

  // The year to stop generating inventory reports
  Year?: number;

  // The day of the month to stop generating inventory reports.
  Day?: number;
}

export function Storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Month",
      "The month to stop generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Year",
      "The year to stop generating inventory reports",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "The day of the month to stop generating inventory reports.",
      [],
      true,
      false,
    ),
  ];
}
