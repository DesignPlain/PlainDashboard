import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface memorydb_getClusterShardNodeEndpoint {
  // DNS hostname of the node.
  address?: string;

  // Port number that this node is listening on.
  port?: number;
}

export function memorydb_getClusterShardNodeEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "DNS hostname of the node.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number that this node is listening on.",
      () => [],
      true,
      false,
    ),
  ];
}
