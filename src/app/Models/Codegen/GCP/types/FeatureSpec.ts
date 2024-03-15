import { FeatureSpecMulticlusteringress } from "./FeatureSpecMulticlusteringress";
import { FeatureSpecClusterupgrade } from "./FeatureSpecClusterupgrade";
import { FeatureSpecFleetobservability } from "./FeatureSpecFleetobservability";

export interface FeatureSpec {
  /*
Multicluster Ingress-specific spec.
Structure is documented below.
*/
  Multiclusteringress?: FeatureSpecMulticlusteringress;

  /*
Clusterupgrade feature spec.
Structure is documented below.
*/
  Clusterupgrade?: FeatureSpecClusterupgrade;

  /*
Fleet Observability feature spec.
Structure is documented below.
*/
  Fleetobservability?: FeatureSpecFleetobservability;
}
