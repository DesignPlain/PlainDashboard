import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EdgeCacheServiceRoutingHostRule,
  Networkservices_EdgeCacheServiceRoutingHostRule_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingHostRule";
import {
  Networkservices_EdgeCacheServiceRoutingPathMatcher,
  Networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes,
} from "./Networkservices_EdgeCacheServiceRoutingPathMatcher";

export interface Networkservices_EdgeCacheServiceRouting {
  /*
The list of hostRules to match against. These rules define which hostnames the EdgeCacheService will match against, and which route configurations apply.
Structure is documented below.
*/
  HostRules?: Array<Networkservices_EdgeCacheServiceRoutingHostRule>;

  /*
The list of pathMatchers referenced via name by hostRules. PathMatcher is used to match the path portion of the URL when a HostRule matches the URL's host portion.
Structure is documented below.
*/
  PathMatchers?: Array<Networkservices_EdgeCacheServiceRoutingPathMatcher>;
}

export function Networkservices_EdgeCacheServiceRouting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "HostRules",
      "The list of hostRules to match against. These rules define which hostnames the EdgeCacheService will match against, and which route configurations apply.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingHostRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PathMatchers",
      "The list of pathMatchers referenced via name by hostRules. PathMatcher is used to match the path portion of the URL when a HostRule matches the URL's host portion.\nStructure is documented below.",
      Networkservices_EdgeCacheServiceRoutingPathMatcher_GetTypes(),
      true,
      false,
    ),
  ];
}
