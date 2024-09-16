import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_NodePoolPlacementPolicy {
  /*
If set, refers to the name of a custom resource policy supplied by the user.
The resource policy must be in the same project and region as the node pool.
If not found, InvalidArgument error is returned.
*/
  policyName?: string;

  // The [TPU placement topology](https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies) for pod slice node pool.
  tpuTopology?: string;

  /*
The type of the policy. Supports a single value: COMPACT.
Specifying COMPACT placement policy type places node pool's nodes in a closer
physical proximity in order to reduce network latency between nodes.
*/
  type?: string;
}

export function container_NodePoolPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'policyName',
      'If set, refers to the name of a custom resource policy supplied by the user.\nThe resource policy must be in the same project and region as the node pool.\nIf not found, InvalidArgument error is returned.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'tpuTopology',
      'The [TPU placement topology](https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies) for pod slice node pool.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      "The type of the policy. Supports a single value: COMPACT.\nSpecifying COMPACT placement policy type places node pool's nodes in a closer\nphysical proximity in order to reduce network latency between nodes.",
      () => [],
      true,
      false,
    ),
  ];
}
