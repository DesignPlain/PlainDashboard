import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValue {
  // An integer value (int64 format)
  integerValue?: string;

  // A string value.
  stringValue?: string;

  /*
Represents a time of day.
Structure is documented below.
*/
  timeValue?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue;

  /*
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  timestampValue?: string;

  // A boolean value.
  booleanValue?: boolean;

  /*
Represents a whole or partial calendar date.
Structure is documented below.
*/
  dateValue?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue;

  /*
Represents a day of the week.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  dayOfWeekValue?: string;

  // A float value.
  floatValue?: number;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timeValue",
      "Represents a time of day.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampValue",
      'A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.\nExamples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "booleanValue",
      "A boolean value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dateValue",
      "Represents a whole or partial calendar date.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueDateValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dayOfWeekValue",
      "Represents a day of the week.\nPossible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "floatValue",
      "A float value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "integerValue",
      "An integer value (int64 format)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "A string value.",
      [],
      false,
      false,
    ),
  ];
}
