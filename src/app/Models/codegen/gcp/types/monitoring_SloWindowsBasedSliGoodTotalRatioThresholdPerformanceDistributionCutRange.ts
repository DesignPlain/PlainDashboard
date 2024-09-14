import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange {
  /*
max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
*/
  max?: number;

  /*
Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
*/
  min?: number;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformanceDistributionCutRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "max",
      'max value for the range (inclusive). If not given,\nwill be set to "infinity", defining an open range\n">= range.min"',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "min",
      'Min value for the range (inclusive). If not given,\nwill be set to "-infinity", defining an open range\n"< range.max"',
      () => [],
      false,
      false,
    ),
  ];
}
