export interface FeatureSpecClusterupgradeGkeUpgradeOverrideUpgrade {
  // Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.
  Version?: string;

  // Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.
  Name?: string;
}
