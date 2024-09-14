import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance_GetTypes,
} from "./monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance";
import {
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance,
  monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes,
} from "./monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance";

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThreshold {
  /*
Basic SLI to evaluate to judge window quality.
Structure is documented below.
*/
  basicSliPerformance?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;

  /*
Request-based SLI to evaluate to judge window quality.
Structure is documented below.
*/
  performance?: monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance;

  /*
If window performance >= threshold, the window is counted
as good.
*/
  threshold?: number;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThreshold_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "basicSliPerformance",
      "Basic SLI to evaluate to judge window quality.\nStructure is documented below.",
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "performance",
      "Request-based SLI to evaluate to judge window quality.\nStructure is documented below.",
      () =>
        monitoring_SloWindowsBasedSliGoodTotalRatioThresholdPerformance_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threshold",
      "If window performance >= threshold, the window is counted\nas good.",
      () => [],
      false,
      false,
    ),
  ];
}
