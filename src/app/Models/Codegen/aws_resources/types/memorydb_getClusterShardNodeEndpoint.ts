import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface memorydb_getClusterShardNodeEndpoint {
  // Port number that this node is listening on.
  port?: number;

  // DNS hostname of the node.
  address?: string;
}

export function memorydb_getClusterShardNodeEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number that this node is listening on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "DNS hostname of the node.",
      [],
      true,
      false,
    ),
  ];
}
