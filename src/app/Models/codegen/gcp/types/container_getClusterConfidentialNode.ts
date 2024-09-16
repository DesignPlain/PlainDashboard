import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterConfidentialNode {
  // Whether Confidential Nodes feature is enabled for all nodes in this cluster.
  enabled?: boolean;
}

export function container_getClusterConfidentialNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether Confidential Nodes feature is enabled for all nodes in this cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
