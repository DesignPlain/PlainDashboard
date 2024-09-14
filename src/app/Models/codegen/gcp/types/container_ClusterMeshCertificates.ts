import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterMeshCertificates {
  // Controls the issuance of workload mTLS certificates. It is enabled by default. Workload Identity is required, see workload_config.
  enableCertificates?: boolean;
}

export function container_ClusterMeshCertificates_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableCertificates",
      "Controls the issuance of workload mTLS certificates. It is enabled by default. Workload Identity is required, see workload_config.",
      () => [],
      true,
      false,
    ),
  ];
}
