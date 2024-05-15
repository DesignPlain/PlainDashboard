import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency {
  /*
A duration string, e.g. 10s.
Good service is defined to be the count of requests made to
this service that return in no more than threshold.
*/
  Threshold?: string;
}

export function Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceLatency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Threshold",
      "A duration string, e.g. 10s.\nGood service is defined to be the count of requests made to\nthis service that return in no more than threshold.",
      [],
      true,
      false,
    ),
  ];
}
