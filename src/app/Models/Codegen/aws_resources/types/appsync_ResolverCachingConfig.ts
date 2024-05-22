import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appsync_ResolverCachingConfig {
  // The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments, $context.source, and $context.identity maps.
  cachingKeys?: Array<string>;

  // The TTL in seconds for a resolver that has caching activated. Valid values are between `1` and `3600` seconds.
  ttl?: number;
}

export function appsync_ResolverCachingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cachingKeys",
      "The caching keys for a resolver that has caching activated. Valid values are entries from the $context.arguments, $context.source, and $context.identity maps.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ttl",
      "The TTL in seconds for a resolver that has caching activated. Valid values are between `1` and `3600` seconds.",
      [],
      false,
      false,
    ),
  ];
}
