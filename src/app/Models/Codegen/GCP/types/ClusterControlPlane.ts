import { ClusterControlPlaneLocal } from "./ClusterControlPlaneLocal";
import { ClusterControlPlaneRemote } from "./ClusterControlPlaneRemote";

export interface ClusterControlPlane {
  /*
Local control plane configuration.
Structure is documented below.
*/
  Local?: ClusterControlPlaneLocal;

  /*
Remote control plane configuration.
Structure is documented below.
*/
  Remote?: ClusterControlPlaneRemote;
}
