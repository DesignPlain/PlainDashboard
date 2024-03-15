export interface AssetResourceStatus {
  // Additional information about the current state.
  Message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Output only. The time when the asset was last updated.
  UpdateTime?: string;
}
