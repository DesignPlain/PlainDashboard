import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storage_InsightsReportConfigFrequencyOptionsEndDate {
  // The day of the month to stop generating inventory reports.
  day?: number;

  // The month to stop generating inventory reports.
  month?: number;

  // The year to stop generating inventory reports
  year?: number;
}

export function storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "day",
      "The day of the month to stop generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "month",
      "The month to stop generating inventory reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "year",
      "The year to stop generating inventory reports",
      [],
      true,
      false,
    ),
  ];
}
