import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride,
  networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride_GetTypes,
} from './networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride';

export interface networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia {
  // A list of strings. The network function group to use for the service insertion action.
  networkFunctionGroups?: Array<string>;

  // Any edge overrides and the preferred edge to use.
  withEdgeOverrides?: Array<networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride>;
}

export function networkmanager_getCoreNetworkPolicyDocumentSegmentActionVia_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'networkFunctionGroups',
      'A list of strings. The network function group to use for the service insertion action.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'withEdgeOverrides',
      'Any edge overrides and the preferred edge to use.',
      () =>
        networkmanager_getCoreNetworkPolicyDocumentSegmentActionViaWithEdgeOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
