import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMinDateValue {
  /*
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

- - -
*/
  Day?: number;

  // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  Month?: number;

  // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  Year?: number;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMinDateValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Month",
      "Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Year",
      "Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Day",
      "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
