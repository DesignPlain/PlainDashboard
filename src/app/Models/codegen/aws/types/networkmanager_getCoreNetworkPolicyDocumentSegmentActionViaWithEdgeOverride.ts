import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride {
  // A list of strings. The list of edges associated with the network function group.
  edgeSets?: Array<string>;

  // The preferred edge to use.
  useEdge?: string;
}

export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'edgeSets',
      'A list of strings. The list of edges associated with the network function group.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'useEdge',
      'The preferred edge to use.',
      () => [],
      false,
      false,
    ),
  ];
}
