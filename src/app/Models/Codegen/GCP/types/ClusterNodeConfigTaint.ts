export interface ClusterNodeConfigTaint {
  // Key for taint.
  Key?: string;

  // Value for taint.
  Value?: string;

  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  Effect?: string;
}
