export interface AttachedClusterProxyConfigKubernetesSecret {
  // Namespace of the kubernetes secret containing the proxy config.
  Namespace?: string;

  // Name of the kubernetes secret containing the proxy config.
  Name?: string;
}
