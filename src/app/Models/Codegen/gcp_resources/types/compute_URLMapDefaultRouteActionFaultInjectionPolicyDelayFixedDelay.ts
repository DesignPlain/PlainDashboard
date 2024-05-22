import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_URLMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /*
Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
*/
  nanos?: number;

  /*
Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
Note: these bounds are computed from: 60 sec/min - 60 min/hr - 24 hr/day - 365.25 days/year - 10000 years
*/
  seconds?: string;
}

export function compute_URLMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "nanos",
      "Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are\nrepresented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "seconds",
      "Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.\nNote: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years",
      [],
      false,
      false,
    ),
  ];
}
