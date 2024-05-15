import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
  /*
Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
*/
  Seconds?: number;

  /*
Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
*/
  Nanos?: number;
}

export function Compute_getRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Seconds",
      "Span of time at a resolution of a second.\nMust be from 0 to 315,576,000,000 inclusive.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Nanos",
      "Span of time that's a fraction of a second at nanosecond\nresolution. Durations less than one second are represented\nwith a 0 seconds field and a positive nanos field. Must\nbe from 0 to 999,999,999 inclusive.",
      [],
      true,
      false,
    ),
  ];
}
