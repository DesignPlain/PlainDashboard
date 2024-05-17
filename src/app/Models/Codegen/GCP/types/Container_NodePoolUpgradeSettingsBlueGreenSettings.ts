import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes,
} from "./Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy";

export interface Container_NodePoolUpgradeSettingsBlueGreenSettings {
  /*
Time needed after draining the entire blue pool.
After this period, the blue pool will be cleaned up.
*/
  NodePoolSoakDuration?: string;

  // Specifies the standard policy settings for blue-green upgrades.
  StandardRolloutPolicy?: Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function Container_NodePoolUpgradeSettingsBlueGreenSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NodePoolSoakDuration",
      "Time needed after draining the entire blue pool.\nAfter this period, the blue pool will be cleaned up.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StandardRolloutPolicy",
      "Specifies the standard policy settings for blue-green upgrades.",
      Container_NodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
