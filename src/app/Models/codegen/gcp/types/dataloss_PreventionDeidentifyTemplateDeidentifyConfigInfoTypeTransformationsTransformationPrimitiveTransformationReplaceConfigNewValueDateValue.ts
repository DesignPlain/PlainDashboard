import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue {
  /*
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

- - -
*/
  day?: number;

  // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  month?: number;

  // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  year?: number;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "day",
      "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.\n\n- - -",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "month",
      "Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "year",
      "Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.",
      () => [],
      false,
      false,
    ),
  ];
}
