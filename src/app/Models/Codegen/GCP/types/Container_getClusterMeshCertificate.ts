import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterMeshCertificate {
  // When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  EnableCertificates?: boolean;
}

export function Container_getClusterMeshCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableCertificates",
      "When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.",
      [],
      true,
      false,
    ),
  ];
}
