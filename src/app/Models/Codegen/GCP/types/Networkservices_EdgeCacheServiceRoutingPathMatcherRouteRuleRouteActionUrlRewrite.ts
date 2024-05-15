import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite {
  // Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.
  PathPrefixRewrite?: string;

  /*
Prior to forwarding the request to the selected origin, if the
request matched a pathTemplateMatch, the matching portion of the
request's path is replaced re-written using the pattern specified
by pathTemplateRewrite.
pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.
pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.
Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.
*/
  PathTemplateRewrite?: string;

  // Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.
  HostRewrite?: string;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PathPrefixRewrite",
      "Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathTemplateRewrite",
      "Prior to forwarding the request to the selected origin, if the\nrequest matched a pathTemplateMatch, the matching portion of the\nrequest's path is replaced re-written using the pattern specified\nby pathTemplateRewrite.\npathTemplateRewrite must be between 1 and 255 characters\n(inclusive), must start with a '/', and must only use variables\ncaptured by the route's pathTemplate matchers.\npathTemplateRewrite may only be used when all of a route's\nMatchRules specify pathTemplate.\nOnly one of pathPrefixRewrite and pathTemplateRewrite may be\nspecified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HostRewrite",
      "Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.",
      [],
      false,
      false,
    ),
  ];
}
