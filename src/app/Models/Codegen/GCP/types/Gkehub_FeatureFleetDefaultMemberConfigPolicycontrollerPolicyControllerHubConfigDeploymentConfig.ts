import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources";
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration_GetTypes,
} from "./gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration";

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig {
  // The identifier for this object. Format specified above.
  component?: string;

  /*
Container resource requirements.
Structure is documented below.
*/
  containerResources?: gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources;

  /*
Pod affinity configuration.
Possible values are: `AFFINITY_UNSPECIFIED`, `NO_AFFINITY`, `ANTI_AFFINITY`.
*/
  podAffinity?: string;

  /*
Pod tolerations of node taints.
Structure is documented below.
*/
  podTolerations?: Array<gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration>;

  // Pod replica count.
  replicaCount?: number;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerResources",
      "Container resource requirements.\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResources_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "podAffinity",
      "Pod affinity configuration.\nPossible values are: `AFFINITY_UNSPECIFIED`, `NO_AFFINITY`, `ANTI_AFFINITY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "podTolerations",
      "Pod tolerations of node taints.\nStructure is documented below.",
      gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "replicaCount",
      "Pod replica count.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "component",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
