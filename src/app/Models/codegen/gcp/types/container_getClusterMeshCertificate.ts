import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_getClusterMeshCertificate {
  // When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  enableCertificates?: boolean;
}

export function container_getClusterMeshCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableCertificates",
      "When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.",
      () => [],
      true,
      false,
    ),
  ];
}
