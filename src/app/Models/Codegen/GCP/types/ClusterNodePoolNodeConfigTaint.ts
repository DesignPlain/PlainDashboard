export interface ClusterNodePoolNodeConfigTaint {
  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  Effect?: string;

  // Key for taint.
  Key?: string;

  // Value for taint.
  Value?: string;
}
