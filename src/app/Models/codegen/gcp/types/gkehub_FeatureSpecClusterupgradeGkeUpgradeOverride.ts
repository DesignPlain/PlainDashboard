import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions,
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions_GetTypes,
} from "./gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions";
import {
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade,
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade_GetTypes,
} from "./gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade";

export interface gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride {
  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  postConditions?: gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions;

  /*
Which upgrade to override.
Structure is documented below.
*/
  upgrade?: gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade;
}

export function gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "postConditions",
      "Post conditions to override for the specified upgrade.\nStructure is documented below.",
      () =>
        gkehub_FeatureSpecClusterupgradeGkeUpgradeOverridePostConditions_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "upgrade",
      "Which upgrade to override.\nStructure is documented below.",
      () =>
        gkehub_FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade_GetTypes(),
      true,
      false,
    ),
  ];
}
