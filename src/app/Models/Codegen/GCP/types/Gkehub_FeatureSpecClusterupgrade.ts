import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpecClusterupgradePostConditions,
  Gkehub_FeatureSpecClusterupgradePostConditions_GetTypes,
} from "./Gkehub_FeatureSpecClusterupgradePostConditions";
import {
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride,
  Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes,
} from "./Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride";

export interface Gkehub_FeatureSpecClusterupgrade {
  /*
Configuration overrides for individual upgrades.
Structure is documented below.
*/
  GkeUpgradeOverrides?: Array<Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride>;

  /*
Post conditions to override for the specified upgrade.
Structure is documented below.
*/
  PostConditions?: Gkehub_FeatureSpecClusterupgradePostConditions;

  // Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.
  UpstreamFleets?: Array<string>;
}

export function Gkehub_FeatureSpecClusterupgrade_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "GkeUpgradeOverrides",
      "Configuration overrides for individual upgrades.\nStructure is documented below.",
      Gkehub_FeatureSpecClusterupgradeGkeUpgradeOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PostConditions",
      "Post conditions to override for the specified upgrade.\nStructure is documented below.",
      Gkehub_FeatureSpecClusterupgradePostConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpstreamFleets",
      "Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
