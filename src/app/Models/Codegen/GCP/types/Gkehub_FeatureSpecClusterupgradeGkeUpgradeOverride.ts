import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions,
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions_GetTypes,
} from "./Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions";
import {
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade,
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade_GetTypes,
} from "./Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade";

export interface Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride {
  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  PostConditions?: Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions;

  /*
Which upgrade to override.
Structure is documented below.
*/
  Upgrade?: Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade;
}

export function Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PostConditions",
      "Post conditions to override for the specified upgrade.\nStructure is documented below.",
      Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Upgrade",
      "Which upgrade to override.\nStructure is documented below.",
      Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade_GetTypes(),
      true,
      false,
    ),
  ];
}
