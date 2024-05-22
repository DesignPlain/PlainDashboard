import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesLimits {
  // CPU requirement expressed in Kubernetes resource units.
  cpu?: string;

  // Memory requirement expressed in Kubernetes resource units.
  memory?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "CPU requirement expressed in Kubernetes resource units.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "memory",
      "Memory requirement expressed in Kubernetes resource units.",
      [],
      false,
      false,
    ),
  ];
}
