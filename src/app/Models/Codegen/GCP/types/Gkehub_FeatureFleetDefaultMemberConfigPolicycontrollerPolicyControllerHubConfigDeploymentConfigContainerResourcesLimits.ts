import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesLimits {
  // CPU requirement expressed in Kubernetes resource units.
  Cpu?: string;

  // Memory requirement expressed in Kubernetes resource units.
  Memory?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigContainerResourcesLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Memory",
      "Memory requirement expressed in Kubernetes resource units.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Cpu",
      "CPU requirement expressed in Kubernetes resource units.",
      [],
      false,
      false,
    ),
  ];
}
