import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_DomainNodeToNodeEncryption {
  // Whether to enable node-to-node encryption. If the `node_to_node_encryption` block is not provided then this defaults to `false`. Enabling node-to-node encryption of a new domain requires an `engine_version` of `OpenSearch_X.Y` or `Elasticsearch_6.0` or greater.
  enabled?: boolean;
}

export function opensearch_DomainNodeToNodeEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether to enable node-to-node encryption. If the `node_to_node_encryption` block is not provided then this defaults to `false`. Enabling node-to-node encryption of a new domain requires an `engine_version` of `OpenSearch_X.Y` or `Elasticsearch_6.0` or greater.",
      [],
      true,
      false,
    ),
  ];
}
