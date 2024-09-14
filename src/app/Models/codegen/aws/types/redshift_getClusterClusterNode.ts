import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redshift_getClusterClusterNode {
  // Whether the node is a leader node or a compute node
  nodeRole?: string;

  // Private IP address of a node within a cluster
  privateIpAddress?: string;

  // Public IP address of a node within a cluster
  publicIpAddress?: string;
}

export function redshift_getClusterClusterNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "privateIpAddress",
      "Private IP address of a node within a cluster",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicIpAddress",
      "Public IP address of a node within a cluster",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeRole",
      "Whether the node is a leader node or a compute node",
      () => [],
      true,
      false,
    ),
  ];
}
