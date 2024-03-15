export interface AwsNodePoolUpdateSettingsSurgeSettings {
  // Optional. The maximum number of nodes that can be created beyond the current size of the node pool during the update process.
  MaxSurge?: number;

  // Optional. The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.
  MaxUnavailable?: number;
}
