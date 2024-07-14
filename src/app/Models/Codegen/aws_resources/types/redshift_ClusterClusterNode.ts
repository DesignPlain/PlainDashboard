import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface redshift_ClusterClusterNode {
  // Whether the node is a leader node or a compute node
  nodeRole?: string;

  // The private IP address of a node within a cluster
  privateIpAddress?: string;

  // The public IP address of a node within a cluster
  publicIpAddress?: string;
}

export function redshift_ClusterClusterNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "publicIpAddress",
      "The public IP address of a node within a cluster",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeRole",
      "Whether the node is a leader node or a compute node",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "The private IP address of a node within a cluster",
      [],
      false,
      false,
    ),
  ];
}
