import { AttachedClusterProxyConfigKubernetesSecret } from "./AttachedClusterProxyConfigKubernetesSecret";

export interface AttachedClusterProxyConfig {
  /*
The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.
Structure is documented below.
*/
  KubernetesSecret?: AttachedClusterProxyConfigKubernetesSecret;
}
