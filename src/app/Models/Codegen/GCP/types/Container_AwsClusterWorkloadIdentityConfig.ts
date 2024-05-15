import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterWorkloadIdentityConfig {
  // The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool.
  IdentityProvider?: string;

  // The OIDC issuer URL for this cluster.
  IssuerUri?: string;

  // The Workload Identity Pool associated to the cluster.
  WorkloadPool?: string;
}

export function Container_AwsClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IssuerUri",
      "The OIDC issuer URL for this cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkloadPool",
      "The Workload Identity Pool associated to the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdentityProvider",
      "The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool.",
      [],
      false,
      false,
    ),
  ];
}
