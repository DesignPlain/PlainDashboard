import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redis_ClusterPscConnection {
  // Output only. The IP allocated on the consumer network for the PSC forwarding rule.
  address?: string;

  // Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.
  forwardingRule?: string;

  /*
Required. The consumer network where the network address of
the discovery endpoint will be reserved, in the form of
projects/{network_project_id_or_number}/global/networks/{network_id}.

- - -
*/
  network?: string;

  // Output only. The consumer projectId where the forwarding rule is created from.
  projectId?: string;

  // Output only. The PSC connection id of the forwarding rule connected to the service attachment.
  pscConnectionId?: string;
}

export function redis_ClusterPscConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'address',
      'Output only. The IP allocated on the consumer network for the PSC forwarding rule.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'forwardingRule',
      'Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'network',
      'Required. The consumer network where the network address of\nthe discovery endpoint will be reserved, in the form of\nprojects/{network_project_id_or_number}/global/networks/{network_id}.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'projectId',
      'Output only. The consumer projectId where the forwarding rule is created from.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pscConnectionId',
      'Output only. The PSC connection id of the forwarding rule connected to the service attachment.',
      () => [],
      false,
      false,
    ),
  ];
}
