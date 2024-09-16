import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy {
  /*
In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
This translates to the Access-Control-Allow-Credentials response header.
*/
  allowCredentials?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers response header.
  allowHeaders?: Array<string>;

  // Specifies the content for the Access-Control-Allow-Methods response header.
  allowMethods?: Array<string>;

  /*
Specifies the list of origins that will be allowed to do CORS requests.
This translates to the Access-Control-Allow-Origin response header.
*/
  allowOrigins?: Array<string>;

  // If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  disabled?: boolean;

  // Specifies the content for the Access-Control-Allow-Headers response header.
  exposeHeaders?: Array<string>;

  /*
Specifies how long results of a preflight request can be cached by a client in seconds. Note that many browser clients enforce a maximum TTL of 600s (10 minutes).
- Setting the value to -1 forces a pre-flight check for all requests (not recommended)
- A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
- This translates to the Access-Control-Max-Age header.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
*/
  maxAge?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allowHeaders',
      'Specifies the content for the Access-Control-Allow-Headers response header.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowMethods',
      'Specifies the content for the Access-Control-Allow-Methods response header.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowOrigins',
      'Specifies the list of origins that will be allowed to do CORS requests.\nThis translates to the Access-Control-Allow-Origin response header.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'disabled',
      'If true, specifies the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exposeHeaders',
      'Specifies the content for the Access-Control-Allow-Headers response header.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxAge',
      'Specifies how long results of a preflight request can be cached by a client in seconds. Note that many browser clients enforce a maximum TTL of 600s (10 minutes).\n- Setting the value to -1 forces a pre-flight check for all requests (not recommended)\n- A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.\n- This translates to the Access-Control-Max-Age header.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowCredentials',
      'In response to a preflight request, setting this to true indicates that the actual request can include user credentials.\nThis translates to the Access-Control-Allow-Credentials response header.',
      () => [],
      false,
      false,
    ),
  ];
}
