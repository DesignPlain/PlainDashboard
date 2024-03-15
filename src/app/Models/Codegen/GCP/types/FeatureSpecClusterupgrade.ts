import { FeatureSpecClusterupgradeGkeUpgradeOverride } from "./FeatureSpecClusterupgradeGkeUpgradeOverride";
import { FeatureSpecClusterupgradePostConditions } from "./FeatureSpecClusterupgradePostConditions";

export interface FeatureSpecClusterupgrade {
  /*
Configuration overrides for individual upgrades.
Structure is documented below.
*/
  GkeUpgradeOverrides?: Array<FeatureSpecClusterupgradeGkeUpgradeOverride>;

  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  PostConditions?: FeatureSpecClusterupgradePostConditions;

  // Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.
  UpstreamFleets?: Array<string>;
}
