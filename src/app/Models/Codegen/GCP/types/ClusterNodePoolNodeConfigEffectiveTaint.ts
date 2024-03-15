export interface ClusterNodePoolNodeConfigEffectiveTaint {
  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  Effect?: string;

  // The default or custom node affinity label key name.
  Key?: string;

  // Value for taint.
  Value?: string;
}
