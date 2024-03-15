import { FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions } from "./FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions";
import { FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade } from "./FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade";

export interface FeatureSpecClusterupgradeGkeUpgradeOverride {
  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  PostConditions?: FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions;

  /*
Which upgrade to override.
Structure is documented below.
*/
  Upgrade?: FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade;
}
