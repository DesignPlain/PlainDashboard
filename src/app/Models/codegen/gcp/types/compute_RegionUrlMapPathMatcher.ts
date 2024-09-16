import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionUrlMapPathMatcherRouteRule,
  compute_RegionUrlMapPathMatcherRouteRule_GetTypes,
} from './compute_RegionUrlMapPathMatcherRouteRule';
import {
  compute_RegionUrlMapPathMatcherDefaultUrlRedirect,
  compute_RegionUrlMapPathMatcherDefaultUrlRedirect_GetTypes,
} from './compute_RegionUrlMapPathMatcherDefaultUrlRedirect';
import {
  compute_RegionUrlMapPathMatcherPathRule,
  compute_RegionUrlMapPathMatcherPathRule_GetTypes,
} from './compute_RegionUrlMapPathMatcherPathRule';

export interface compute_RegionUrlMapPathMatcher {
  /*
The list of ordered HTTP route rules. Use this list instead of pathRules when
advanced route matching and routing actions are desired. The order of specifying
routeRules matters: the first rule that matches will cause its specified routing
action to take effect. Within a given pathMatcher, only one of pathRules or
routeRules must be set. routeRules are not supported in UrlMaps intended for
External load balancers.
Structure is documented below.
*/
  routeRules?: Array<compute_RegionUrlMapPathMatcherRouteRule>;

  /*
A reference to a RegionBackendService resource. This will be used if
none of the pathRules defined by this PathMatcher is matched by
the URL's path portion.
*/
  defaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  defaultUrlRedirect?: compute_RegionUrlMapPathMatcherDefaultUrlRedirect;

  // An optional description of this resource.
  description?: string;

  // The name to which this PathMatcher is referred by the HostRule.
  name?: string;

  /*
The list of path rules. Use this list instead of routeRules when routing based
on simple path matching is all that's required. The order by which path rules
are specified does not matter. Matches are always done on the longest-path-first
basis. For example: a pathRule with a path /a/b/c/- will match before /a/b/-
irrespective of the order in which those paths appear in this list. Within a
given pathMatcher, only one of pathRules or routeRules must be set.
Structure is documented below.
*/
  pathRules?: Array<compute_RegionUrlMapPathMatcherPathRule>;
}

export function compute_RegionUrlMapPathMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'routeRules',
      'The list of ordered HTTP route rules. Use this list instead of pathRules when\nadvanced route matching and routing actions are desired. The order of specifying\nrouteRules matters: the first rule that matches will cause its specified routing\naction to take effect. Within a given pathMatcher, only one of pathRules or\nrouteRules must be set. routeRules are not supported in UrlMaps intended for\nExternal load balancers.\nStructure is documented below.',
      () => compute_RegionUrlMapPathMatcherRouteRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'defaultService',
      "A reference to a RegionBackendService resource. This will be used if\nnone of the pathRules defined by this PathMatcher is matched by\nthe URL's path portion.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'defaultUrlRedirect',
      'When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.',
      () => compute_RegionUrlMapPathMatcherDefaultUrlRedirect_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'An optional description of this resource.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name to which this PathMatcher is referred by the HostRule.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pathRules',
      "The list of path rules. Use this list instead of routeRules when routing based\non simple path matching is all that's required. The order by which path rules\nare specified does not matter. Matches are always done on the longest-path-first\nbasis. For example: a pathRule with a path /a/b/c/* will match before /a/b/*\nirrespective of the order in which those paths appear in this list. Within a\ngiven pathMatcher, only one of pathRules or routeRules must be set.\nStructure is documented below.",
      () => compute_RegionUrlMapPathMatcherPathRule_GetTypes(),
      false,
      false,
    ),
  ];
}
