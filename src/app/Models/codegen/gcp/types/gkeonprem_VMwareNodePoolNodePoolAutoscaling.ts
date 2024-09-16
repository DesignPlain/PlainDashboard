import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_VMwareNodePoolNodePoolAutoscaling {
  // Maximum number of replicas in the NodePool.
  maxReplicas?: number;

  // Minimum number of replicas in the NodePool.
  minReplicas?: number;
}

export function gkeonprem_VMwareNodePoolNodePoolAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxReplicas',
      'Maximum number of replicas in the NodePool.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minReplicas',
      'Minimum number of replicas in the NodePool.',
      () => [],
      true,
      false,
    ),
  ];
}
