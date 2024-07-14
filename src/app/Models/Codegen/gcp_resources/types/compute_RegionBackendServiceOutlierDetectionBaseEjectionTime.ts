import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RegionBackendServiceOutlierDetectionBaseEjectionTime {
  /*
Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 `seconds` field and a positive
`nanos` field. Must be from 0 to 999,999,999 inclusive.
*/
  nanos?: number;

  /*
Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
*/
  seconds?: number;
}

export function compute_RegionBackendServiceOutlierDetectionBaseEjectionTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "nanos",
      "Span of time that's a fraction of a second at nanosecond resolution. Durations\nless than one second are represented with a 0 `seconds` field and a positive\n`nanos` field. Must be from 0 to 999,999,999 inclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "seconds",
      "Span of time at a resolution of a second. Must be from 0 to 315,576,000,000\ninclusive.",
      [],
      true,
      false,
    ),
  ];
}
