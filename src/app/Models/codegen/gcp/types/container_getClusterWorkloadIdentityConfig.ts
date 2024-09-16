import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterWorkloadIdentityConfig {
  // The workload pool to attach all Kubernetes service accounts to.
  workloadPool?: string;
}

export function container_getClusterWorkloadIdentityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workloadPool',
      'The workload pool to attach all Kubernetes service accounts to.',
      () => [],
      true,
      false,
    ),
  ];
}
