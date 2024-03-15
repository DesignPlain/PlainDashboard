import { MembershipEndpointGkeCluster } from "./MembershipEndpointGkeCluster";

export interface MembershipEndpoint {
  /*
If this Membership is a Kubernetes API server hosted on GKE, this is a self link to its GCP resource.
Structure is documented below.
*/
  GkeCluster?: MembershipEndpointGkeCluster;
}
