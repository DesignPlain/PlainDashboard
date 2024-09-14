import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AttachedClusterWorkloadIdentityConfig {
  /*
The ID of the OIDC Identity Provider (IdP) associated to
the Workload Identity Pool.
*/
  identityProvider?: string;

  // The OIDC issuer URL for this cluster.
  issuerUri?: string;

  // The Workload Identity Pool associated to the cluster.
  workloadPool?: string;
}

export function container_AttachedClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identityProvider",
      "The ID of the OIDC Identity Provider (IdP) associated to\nthe Workload Identity Pool.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuerUri",
      "The OIDC issuer URL for this cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workloadPool",
      "The Workload Identity Pool associated to the cluster.",
      () => [],
      false,
      false,
    ),
  ];
}
