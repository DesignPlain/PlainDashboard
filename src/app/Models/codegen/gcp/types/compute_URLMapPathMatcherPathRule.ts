import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_URLMapPathMatcherPathRuleRouteAction,
  compute_URLMapPathMatcherPathRuleRouteAction_GetTypes,
} from './compute_URLMapPathMatcherPathRuleRouteAction';
import {
  compute_URLMapPathMatcherPathRuleUrlRedirect,
  compute_URLMapPathMatcherPathRuleUrlRedirect_GetTypes,
} from './compute_URLMapPathMatcherPathRuleUrlRedirect';

export interface compute_URLMapPathMatcherPathRule {
  /*
The list of path patterns to match. Each must start with / and the only place a
\- is allowed is at the end following a /. The string fed to the path matcher
does not include any text after the first ? or #, and those chars are not
allowed here.
*/
  paths?: Array<string>;

  /*
In response to a matching path, the load balancer performs advanced routing
actions like URL rewrites, header transformations, etc. prior to forwarding the
request to the selected backend. If routeAction specifies any
weightedBackendServices, service must not be set. Conversely if service is set,
routeAction cannot contain any  weightedBackendServices. Only one of routeAction
or urlRedirect must be set.
Structure is documented below.
*/
  routeAction?: compute_URLMapPathMatcherPathRuleRouteAction;

  // The backend service or backend bucket to use if any of the given paths match.
  service?: string;

  /*
When a path pattern is matched, the request is redirected to a URL specified
by urlRedirect. If urlRedirect is specified, service or routeAction must not
be set.
Structure is documented below.
*/
  urlRedirect?: compute_URLMapPathMatcherPathRuleUrlRedirect;
}

export function compute_URLMapPathMatcherPathRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'paths',
      'The list of path patterns to match. Each must start with / and the only place a\n\\* is allowed is at the end following a /. The string fed to the path matcher\ndoes not include any text after the first ? or #, and those chars are not\nallowed here.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'routeAction',
      'In response to a matching path, the load balancer performs advanced routing\nactions like URL rewrites, header transformations, etc. prior to forwarding the\nrequest to the selected backend. If routeAction specifies any\nweightedBackendServices, service must not be set. Conversely if service is set,\nrouteAction cannot contain any  weightedBackendServices. Only one of routeAction\nor urlRedirect must be set.\nStructure is documented below.',
      () => compute_URLMapPathMatcherPathRuleRouteAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'The backend service or backend bucket to use if any of the given paths match.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'urlRedirect',
      'When a path pattern is matched, the request is redirected to a URL specified\nby urlRedirect. If urlRedirect is specified, service or routeAction must not\nbe set.\nStructure is documented below.',
      () => compute_URLMapPathMatcherPathRuleUrlRedirect_GetTypes(),
      false,
      false,
    ),
  ];
}
