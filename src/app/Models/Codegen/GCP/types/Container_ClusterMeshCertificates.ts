import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterMeshCertificates {
  // Controls the issuance of workload mTLS certificates. It is enabled by default. Workload Identity is required, see workload_config.
  EnableCertificates?: boolean;
}

export function Container_ClusterMeshCertificates_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableCertificates",
      "Controls the issuance of workload mTLS certificates. It is enabled by default. Workload Identity is required, see workload_config.",
      [],
      true,
      false,
    ),
  ];
}
