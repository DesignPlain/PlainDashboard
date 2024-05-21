import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride,
  gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes,
} from "./gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride";
import {
  gkehub_FeatureSpecClusterupgradePostConditions,
  gkehub_FeatureSpecClusterupgradePostConditions_GetTypes,
} from "./gkehub_FeatureSpecClusterupgradePostConditions";

export interface gkehub_FeatureSpecClusterupgrade {
  /*
Configuration overrides for individual upgrades.
Structure is documented below.
*/
  gkeUpgradeOverrides?: Array<gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride>;

  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  postConditions?: gkehub_FeatureSpecClusterupgradePostConditions;

  // Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.
  upstreamFleets?: Array<string>;
}

export function gkehub_FeatureSpecClusterupgrade_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "gkeUpgradeOverrides",
      "Configuration overrides for individual upgrades.\nStructure is documented below.",
      gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postConditions",
      "Post conditions to override for the specified upgrade.\nStructure is documented below.",
      gkehub_FeatureSpecClusterupgradePostConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "upstreamFleets",
      "Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
