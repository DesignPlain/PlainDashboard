import { EdgeCacheServiceRoutingHostRule } from "./EdgeCacheServiceRoutingHostRule";
import { EdgeCacheServiceRoutingPathMatcher } from "./EdgeCacheServiceRoutingPathMatcher";

export interface EdgeCacheServiceRouting {
  /*
The list of hostRules to match against. These rules define which hostnames the EdgeCacheService will match against, and which route configurations apply.
Structure is documented below.
*/
  HostRules?: Array<EdgeCacheServiceRoutingHostRule>;

  /*
The list of pathMatchers referenced via name by hostRules. PathMatcher is used to match the path portion of the URL when a HostRule matches the URL's host portion.
Structure is documented below.
*/
  PathMatchers?: Array<EdgeCacheServiceRoutingPathMatcher>;
}
