import { ClusterSystemAddonsConfigIngress } from "./ClusterSystemAddonsConfigIngress";

export interface ClusterSystemAddonsConfig {
  /*
Config for the Ingress add-on which allows customers to create an Ingress
object to manage external access to the servers in a cluster. The add-on
consists of istiod and istio-ingress.
Structure is documented below.
*/
  Ingress?: ClusterSystemAddonsConfigIngress;
}
