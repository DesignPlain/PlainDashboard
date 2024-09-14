import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface memorydb_ClusterClusterEndpoint {
  // DNS hostname of the node.
  address?: string;

  // The port number on which each of the nodes accepts connections. Defaults to `6379`.
  port?: number;
}

export function memorydb_ClusterClusterEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "DNS hostname of the node.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number on which each of the nodes accepts connections. Defaults to `6379`.",
      () => [],
      false,
      false,
    ),
  ];
}
