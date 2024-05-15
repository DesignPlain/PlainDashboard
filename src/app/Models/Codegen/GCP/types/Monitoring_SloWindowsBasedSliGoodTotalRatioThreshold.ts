import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance,
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes,
} from "./Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance";
import {
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance,
  Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance_GetTypes,
} from "./Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance";

export interface Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold {
  /*
Request-based SLI to evaluate to judge window quality.
Structure is documented below.
*/
  Performance?: Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance;

  /*
If window performance >= threshold, the window is counted
as good.
*/
  Threshold?: number;

  /*
Basic SLI to evaluate to judge window quality.
Structure is documented below.
*/
  BasicSliPerformance?: Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;
}

export function Monitoring_SloWindowsBasedSliGoodTotalRatioThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Performance",
      "Request-based SLI to evaluate to judge window quality.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Threshold",
      "If window performance >= threshold, the window is counted\nas good.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BasicSliPerformance",
      "Basic SLI to evaluate to judge window quality.\nStructure is documented below.",
      Monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance_GetTypes(),
      false,
      false,
    ),
  ];
}
