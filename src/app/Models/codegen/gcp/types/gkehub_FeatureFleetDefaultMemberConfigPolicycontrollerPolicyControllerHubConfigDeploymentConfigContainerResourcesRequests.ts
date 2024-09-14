import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesRequests {
  // CPU requirement expressed in Kubernetes resource units.
  cpu?: string;

  // Memory requirement expressed in Kubernetes resource units.
  memory?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesRequests_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "CPU requirement expressed in Kubernetes resource units.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memory",
      "Memory requirement expressed in Kubernetes resource units.",
      () => [],
      false,
      false,
    ),
  ];
}
