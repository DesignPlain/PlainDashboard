import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueDateValue } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueDateValue";
import { PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueTimeValue } from "./PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueTimeValue";

export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValue {
  // A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  TimestampValue?: string;

  // A boolean value.
  BooleanValue?: boolean;

  /*
Represents a whole or partial calendar date.
Structure is documented below.
*/
  DateValue?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueDateValue;

  /*
Represents a day of the week.
Possible values are: `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`.
*/
  DayOfWeekValue?: string;

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
  TimeValue?: PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionConditionExpressionsConditionsConditionValueTimeValue;
}
