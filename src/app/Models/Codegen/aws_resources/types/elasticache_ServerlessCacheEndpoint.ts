import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticache_ServerlessCacheEndpoint {
  // The port number that the cache engine is listening on. Set as integer.
  port?: number;

  // The DNS hostname of the cache node.
  address?: string;
}

export function elasticache_ServerlessCacheEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The DNS hostname of the cache node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number that the cache engine is listening on. Set as integer.",
      [],
      true,
      false,
    ),
  ];
}
