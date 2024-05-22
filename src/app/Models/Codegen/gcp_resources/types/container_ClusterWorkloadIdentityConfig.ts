import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterWorkloadIdentityConfig {
  // The workload pool to attach all Kubernetes service accounts to.
  workloadPool?: string;
}

export function container_ClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "workloadPool",
      "The workload pool to attach all Kubernetes service accounts to.",
      [],
      false,
      false,
    ),
  ];
}
