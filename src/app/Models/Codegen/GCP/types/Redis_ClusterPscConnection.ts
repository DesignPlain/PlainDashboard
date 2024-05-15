import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_ClusterPscConnection {
  // Output only. The IP allocated on the consumer network for the PSC forwarding rule.
  Address?: string;

  // Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.
  ForwardingRule?: string;

  /*
Required. The consumer network where the network address of
the discovery endpoint will be reserved, in the form of
projects/{network_project_id_or_number}/global/networks/{network_id}.

- - -
*/
  Network?: string;

  // Output only. The consumer projectId where the forwarding rule is created from.
  ProjectId?: string;

  // Output only. The PSC connection id of the forwarding rule connected to the service attachment.
  PscConnectionId?: string;
}

export function Redis_ClusterPscConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "Output only. The consumer projectId where the forwarding rule is created from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PscConnectionId",
      "Output only. The PSC connection id of the forwarding rule connected to the service attachment.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Address",
      "Output only. The IP allocated on the consumer network for the PSC forwarding rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ForwardingRule",
      "Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "Required. The consumer network where the network address of\nthe discovery endpoint will be reserved, in the form of\nprojects/{network_project_id_or_number}/global/networks/{network_id}.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
