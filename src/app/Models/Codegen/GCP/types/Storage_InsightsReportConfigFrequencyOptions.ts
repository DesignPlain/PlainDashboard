import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_InsightsReportConfigFrequencyOptionsEndDate,
  Storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes,
} from "./Storage_InsightsReportConfigFrequencyOptionsEndDate";
import {
  Storage_InsightsReportConfigFrequencyOptionsStartDate,
  Storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes,
} from "./Storage_InsightsReportConfigFrequencyOptionsStartDate";

export interface Storage_InsightsReportConfigFrequencyOptions {
  /*
The date to stop generating inventory reports. For example, {"day": 15, "month": 9, "year": 2022}.
Structure is documented below.
*/
  EndDate?: Storage_InsightsReportConfigFrequencyOptionsEndDate;

  /*
The frequency in which inventory reports are generated. Values are DAILY or WEEKLY.
Possible values are: `DAILY`, `WEEKLY`.
*/
  Frequency?: string;

  /*
The date to start generating inventory reports. For example, {"day": 15, "month": 8, "year": 2022}.
Structure is documented below.
*/
  StartDate?: Storage_InsightsReportConfigFrequencyOptionsStartDate;
}

export function Storage_InsightsReportConfigFrequencyOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Frequency",
      "The frequency in which inventory reports are generated. Values are DAILY or WEEKLY.\nPossible values are: `DAILY`, `WEEKLY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StartDate",
      'The date to start generating inventory reports. For example, {"day": 15, "month": 8, "year": 2022}.\nStructure is documented below.',
      Storage_InsightsReportConfigFrequencyOptionsStartDate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EndDate",
      'The date to stop generating inventory reports. For example, {"day": 15, "month": 9, "year": 2022}.\nStructure is documented below.',
      Storage_InsightsReportConfigFrequencyOptionsEndDate_GetTypes(),
      true,
      false,
    ),
  ];
}
