import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
  // Starting hour of the 10-hour window for updates
  hours?: number;

  // Starting minute of the 10-hour window for updates
  minutes?: number;
}

export function opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "hours",
      "Starting hour of the 10-hour window for updates",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Starting minute of the 10-hour window for updates",
      () => [],
      false,
      false,
    ),
  ];
}
