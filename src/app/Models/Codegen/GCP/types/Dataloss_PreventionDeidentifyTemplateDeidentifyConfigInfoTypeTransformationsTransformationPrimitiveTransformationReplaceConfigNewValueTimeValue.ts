import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue {
  // Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  Hours?: number;

  // Minutes of hour of day. Must be from 0 to 59.
  Minutes?: number;

  // Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  Nanos?: number;

  // Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  Seconds?: number;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationReplaceConfigNewValueTimeValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Hours",
      'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minutes",
      "Minutes of hour of day. Must be from 0 to 59.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Nanos",
      "Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Seconds",
      "Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.",
      [],
      false,
      false,
    ),
  ];
}
