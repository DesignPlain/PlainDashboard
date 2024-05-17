import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_SloWindowsBasedSliMetricSumInRangeRange {
  /*
Min value for the range (inclusive). If not given,
will be set to "-infinity", defining an open range
"< range.max"
*/
  Min?: number;

  /*
max value for the range (inclusive). If not given,
will be set to "infinity", defining an open range
">= range.min"
*/
  Max?: number;
}

export function Monitoring_SloWindowsBasedSliMetricSumInRangeRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Min",
      'Min value for the range (inclusive). If not given,\nwill be set to "-infinity", defining an open range\n"< range.max"',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Max",
      'max value for the range (inclusive). If not given,\nwill be set to "infinity", defining an open range\n">= range.min"',
      [],
      false,
      false,
    ),
  ];
}
