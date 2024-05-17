import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxTimeValue,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxTimeValue_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxTimeValue";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxDateValue,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxDateValue_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxDateValue";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax {
  // A float value.
  FloatValue?: number;

  // An integer value (int64 format)
  IntegerValue?: string;

  // A string value.
  StringValue?: string;

  /*
Represents a time of day.
Structure is documented below.
*/
  TimeValue?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxTimeValue;

  // A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  TimestampValue?: string;

  /*
Represents a whole or partial calendar date.
Structure is documented below.
*/
  DateValue?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxDateValue;

  /*
Represents a day of the week.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DayOfWeekValue?: string;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StringValue",
      "A string value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimeValue",
      "Represents a time of day.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxTimeValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimestampValue",
      'A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DateValue",
      "Represents a whole or partial calendar date.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMaxDateValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DayOfWeekValue",
      "Represents a day of the week.\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FloatValue",
      "A float value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IntegerValue",
      "An integer value (int64 format)",
      [],
      false,
      false,
    ),
  ];
}
