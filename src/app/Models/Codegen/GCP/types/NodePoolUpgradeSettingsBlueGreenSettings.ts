import { NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy } from "./NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy";

export interface NodePoolUpgradeSettingsBlueGreenSettings {
  /*
Time needed after draining the entire blue pool.
After this period, the blue pool will be cleaned up.
*/
  NodePoolSoakDuration?: string;

  // Specifies the standard policy settings for blue-green upgrades.
  StandardRolloutPolicy?: NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}
