import { AutoscalingPolicyBasicAlgorithmYarnConfig } from "./AutoscalingPolicyBasicAlgorithmYarnConfig";

export interface AutoscalingPolicyBasicAlgorithm {
  /*
Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.
Bounds: [2m, 1d]. Default: 2m.
*/
  CooldownPeriod?: string;

  /*
YARN autoscaling configuration.
Structure is documented below.
*/
  YarnConfig?: AutoscalingPolicyBasicAlgorithmYarnConfig;
}
