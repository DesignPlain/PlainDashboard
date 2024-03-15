import { FeatureStateState } from "./FeatureStateState";

export interface FeatureState {
  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  States?: Array<FeatureStateState>;
}
