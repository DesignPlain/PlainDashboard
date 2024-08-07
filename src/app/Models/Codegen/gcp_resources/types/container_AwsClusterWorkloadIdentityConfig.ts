import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsClusterWorkloadIdentityConfig {
  // The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool.
  identityProvider?: string;

  // The OIDC issuer URL for this cluster.
  issuerUri?: string;

  // The Workload Identity Pool associated to the cluster.
  workloadPool?: string;
}

export function container_AwsClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "issuerUri",
      "The OIDC issuer URL for this cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workloadPool",
      "The Workload Identity Pool associated to the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityProvider",
      "The ID of the OIDC Identity Provider (IdP) associated to the Workload Identity Pool.",
      [],
      false,
      false,
    ),
  ];
}
