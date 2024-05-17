import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_NodePoolUpgradeSettingsBlueGreenSettings,
  Container_NodePoolUpgradeSettingsBlueGreenSettings_GetTypes,
} from "./Container_NodePoolUpgradeSettingsBlueGreenSettings";

export interface Container_NodePoolUpgradeSettings {
  /*
The settings to adjust [blue green upgrades](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies#blue-green-upgrade-strategy).
Structure is documented below
*/
  BlueGreenSettings?: Container_NodePoolUpgradeSettingsBlueGreenSettings;

  /*
The number of additional nodes that can be added to the node pool during
an upgrade. Increasing `max_surge` raises the number of nodes that can be upgraded simultaneously.
Can be set to 0 or greater.
*/
  MaxSurge?: number;

  /*
The number of nodes that can be simultaneously unavailable during
an upgrade. Increasing `max_unavailable` raises the number of nodes that can be upgraded in
parallel. Can be set to 0 or greater.

`max_surge` and `max_unavailable` must not be negative and at least one of them must be greater than zero.
*/
  MaxUnavailable?: number;

  // The upgrade stragey to be used for upgrading the nodes.
  Strategy?: string;
}

export function Container_NodePoolUpgradeSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BlueGreenSettings",
      "The settings to adjust [blue green upgrades](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies#blue-green-upgrade-strategy).\nStructure is documented below",
      Container_NodePoolUpgradeSettingsBlueGreenSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSurge",
      "The number of additional nodes that can be added to the node pool during\nan upgrade. Increasing `max_surge` raises the number of nodes that can be upgraded simultaneously.\nCan be set to 0 or greater.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailable",
      "The number of nodes that can be simultaneously unavailable during\nan upgrade. Increasing `max_unavailable` raises the number of nodes that can be upgraded in\nparallel. Can be set to 0 or greater.\n\n`max_surge` and `max_unavailable` must not be negative and at least one of them must be greater than zero.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Strategy",
      "The upgrade stragey to be used for upgrading the nodes.",
      [],
      false,
      false,
    ),
  ];
}
