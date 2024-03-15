import { AssetDiscoveryStatusStat } from "./AssetDiscoveryStatusStat";

export interface AssetDiscoveryStatus {
  // Additional information about the current state.
  Message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Data Stats of the asset reported by discovery.
  Stats?: Array<AssetDiscoveryStatusStat>;

  // Output only. The time when the asset was last updated.
  UpdateTime?: string;

  // The duration of the last discovery run.
  LastRunDuration?: string;

  // The start time of the last discovery run.
  LastRunTime?: string;
}
