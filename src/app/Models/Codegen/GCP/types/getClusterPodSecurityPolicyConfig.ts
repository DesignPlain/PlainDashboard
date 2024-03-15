export interface getClusterPodSecurityPolicyConfig {
  // Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
  Enabled?: boolean;
}
