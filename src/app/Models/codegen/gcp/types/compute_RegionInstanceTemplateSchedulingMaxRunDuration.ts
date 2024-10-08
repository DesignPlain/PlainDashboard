import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionInstanceTemplateSchedulingMaxRunDuration {
  /*
Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented with a 0
`seconds` field and a positive `nanos` field. Must be from 0 to
999,999,999 inclusive.
*/
  nanos?: number;

  /*
Span of time at a resolution of a second. Must be from 0 to
315,576,000,000 inclusive. Note: these bounds are computed from: 60
sec/min - 60 min/hr - 24 hr/day - 365.25 days/year - 10000 years.
*/
  seconds?: number;
}

export function compute_RegionInstanceTemplateSchedulingMaxRunDuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'seconds',
      'Span of time at a resolution of a second. Must be from 0 to\n315,576,000,000 inclusive. Note: these bounds are computed from: 60\nsec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'nanos',
      "Span of time that's a fraction of a second at nanosecond\nresolution. Durations less than one second are represented with a 0\n`seconds` field and a positive `nanos` field. Must be from 0 to\n999,999,999 inclusive.",
      () => [],
      false,
      true,
    ),
  ];
}
