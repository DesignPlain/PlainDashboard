import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_URLMapPathMatcherRouteRuleRouteActionUrlRewrite {
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
  pathTemplateRewrite?: string;

  /*
Prior to forwarding the request to the selected service, the request's host header is replaced
with contents of hostRewrite.
The value must be between 1 and 255 characters.
*/
  hostRewrite?: string;

  /*
Prior to forwarding the request to the selected backend service, the matching portion of the
request's path is replaced by pathPrefixRewrite.
The value must be between 1 and 1024 characters.
*/
  pathPrefixRewrite?: string;
}

export function compute_URLMapPathMatcherRouteRuleRouteActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'pathPrefixRewrite',
      "Prior to forwarding the request to the selected backend service, the matching portion of the\nrequest's path is replaced by pathPrefixRewrite.\nThe value must be between 1 and 1024 characters.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pathTemplateRewrite',
      "Prior to forwarding the request to the selected origin, if the\nrequest matched a pathTemplateMatch, the matching portion of the\nrequest's path is replaced re-written using the pattern specified\nby pathTemplateRewrite.\npathTemplateRewrite must be between 1 and 255 characters\n(inclusive), must start with a '/', and must only use variables\ncaptured by the route's pathTemplate matchers.\npathTemplateRewrite may only be used when all of a route's\nMatchRules specify pathTemplate.\nOnly one of pathPrefixRewrite and pathTemplateRewrite may be\nspecified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'hostRewrite',
      "Prior to forwarding the request to the selected service, the request's host header is replaced\nwith contents of hostRewrite.\nThe value must be between 1 and 255 characters.",
      () => [],
      false,
      false,
    ),
  ];
}
