import { SloWindowsBasedSliGoodTotalRatioThresholdPerformance } from "./SloWindowsBasedSliGoodTotalRatioThresholdPerformance";
import { SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance } from "./SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance";

export interface SloWindowsBasedSliGoodTotalRatioThreshold {
  /*
Basic SLI to evaluate to judge window quality.
Structure is documented below.
*/
  BasicSliPerformance?: SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformance;

  /*
Request-based SLI to evaluate to judge window quality.
Structure is documented below.
*/
  Performance?: SloWindowsBasedSliGoodTotalRatioThresholdPerformance;

  /*
If window performance >= threshold, the window is counted
as good.
*/
  Threshold?: number;
}
