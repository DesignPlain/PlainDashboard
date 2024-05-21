import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EdgeCacheServiceRoutingHostRule,
  networkservices_EdgeCacheServiceRoutingHostRule_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingHostRule";
import {
  networkservices_EdgeCacheServiceRoutingPathMatcher,
  networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes,
} from "./networkservices_EdgeCacheServiceRoutingPathMatcher";

export interface networkservices_EdgeCacheServiceRouting {
  /*
The list of hostRules to match against. These rules define which hostnames the EdgeCacheService will match against, and which route configurations apply.
Structure is documented below.
*/
  hostRules?: Array<networkservices_EdgeCacheServiceRoutingHostRule>;

  /*
The list of pathMatchers referenced via name by hostRules. PathMatcher is used to match the path portion of the URL when a HostRule matches the URL's host portion.
Structure is documented below.
*/
  pathMatchers?: Array<networkservices_EdgeCacheServiceRoutingPathMatcher>;
}

export function networkservices_EdgeCacheServiceRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "hostRules",
      "The list of hostRules to match against. These rules define which hostnames the EdgeCacheService will match against, and which route configurations apply.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingHostRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pathMatchers",
      "The list of pathMatchers referenced via name by hostRules. PathMatcher is used to match the path portion of the URL when a HostRule matches the URL's host portion.\nStructure is documented below.",
      networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes(),
      true,
      false,
    ),
  ];
}
