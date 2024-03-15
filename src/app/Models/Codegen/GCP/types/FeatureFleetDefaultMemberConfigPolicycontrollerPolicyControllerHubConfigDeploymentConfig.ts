import { FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration } from "./FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration";
import { FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources } from "./FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources";

export interface FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig {
  // The identifier for this object. Format specified above.
  Component?: string;

  /*
Container resource requirements.
Structure is documented below.
*/
  ContainerResources?: FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources;

  /*
Pod affinity configuration.
Possible values are: `AFFINITY_UNSPECIFIED`, `NO_AFFINITY`, `ANTI_AFFINITY`.
*/
  PodAffinity?: string;

  /*
Pod tolerations of node taints.
Structure is documented below.
*/
  PodTolerations?: Array<FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration>;

  // Pod replica count.
  ReplicaCount?: number;
}
