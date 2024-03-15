export interface LakeMetastoreStatus {
  // The URI of the endpoint used to access the Metastore service.
  Endpoint?: string;

  // Additional information about the current status.
  Message?: string;

  // Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Output only. The time when the lake was last updated.
  UpdateTime?: string;
}
