import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterWorkloadIdentityConfig {
  // The workload pool to attach all Kubernetes service accounts to.
  WorkloadPool?: string;
}

export function Container_ClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WorkloadPool",
      "The workload pool to attach all Kubernetes service accounts to.",
      [],
      false,
      false,
    ),
  ];
}
