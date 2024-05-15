import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  Container_ClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes,
} from "./Container_ClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy";

export interface Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings {
  // Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  NodePoolSoakDuration?: string;

  // Standard policy for the blue-green upgrade. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.
  StandardRolloutPolicy?: Container_ClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function Container_ClusterNodePoolUpgradeSettingsBlueGreenSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodePoolSoakDuration",
      "Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. A duration in seconds with up to nine fractional digits, ending with 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StandardRolloutPolicy",
      "Standard policy for the blue-green upgrade. To be specified when strategy is set to BLUE_GREEN. Structure is documented below.",
      Container_ClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
