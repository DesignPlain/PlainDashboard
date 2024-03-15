import { NodePoolUpgradeSettingsBlueGreenSettings } from "./NodePoolUpgradeSettingsBlueGreenSettings";

export interface NodePoolUpgradeSettings {
  /*
The settings to adjust [blue green upgrades](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies#blue-green-upgrade-strategy).
Structure is documented below
*/
  BlueGreenSettings?: NodePoolUpgradeSettingsBlueGreenSettings;

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
