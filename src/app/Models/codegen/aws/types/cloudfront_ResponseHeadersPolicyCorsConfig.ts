import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders,
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders_GetTypes,
} from './cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders';
import {
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods,
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods_GetTypes,
} from './cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods';
import {
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins,
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins_GetTypes,
} from './cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins';
import {
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders,
  cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders_GetTypes,
} from './cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders';

export interface cloudfront_ResponseHeadersPolicyCorsConfig {
  // A Boolean value that CloudFront uses as the value for the `Access-Control-Allow-Credentials` HTTP response header.
  accessControlAllowCredentials?: boolean;

  // Object that contains an attribute `items` that contains a list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.
  accessControlAllowHeaders?: cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;

  // Object that contains an attribute `items` that contains a list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header. Valid values: `GET` | `POST` | `OPTIONS` | `PUT` | `DELETE` | `HEAD` | `ALL`
  accessControlAllowMethods?: cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods;

  // Object that contains an attribute `items` that contains a list of origins that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.
  accessControlAllowOrigins?: cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;

  // Object that contains an attribute `items` that contains a list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.
  accessControlExposeHeaders?: cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;

  // A number that CloudFront uses as the value for the `Access-Control-Max-Age` HTTP response header.
  accessControlMaxAgeSec?: number;

  // A Boolean value that determines how CloudFront behaves for the HTTP response header.
  originOverride?: boolean;
}

export function cloudfront_ResponseHeadersPolicyCorsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'accessControlAllowOrigins',
      'Object that contains an attribute `items` that contains a list of origins that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.',
      () =>
        cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowOrigins_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'accessControlExposeHeaders',
      'Object that contains an attribute `items` that contains a list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.',
      () =>
        cloudfront_ResponseHeadersPolicyCorsConfigAccessControlExposeHeaders_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'accessControlMaxAgeSec',
      'A number that CloudFront uses as the value for the `Access-Control-Max-Age` HTTP response header.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'originOverride',
      'A Boolean value that determines how CloudFront behaves for the HTTP response header.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'accessControlAllowCredentials',
      'A Boolean value that CloudFront uses as the value for the `Access-Control-Allow-Credentials` HTTP response header.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'accessControlAllowHeaders',
      'Object that contains an attribute `items` that contains a list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.',
      () =>
        cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowHeaders_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'accessControlAllowMethods',
      'Object that contains an attribute `items` that contains a list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header. Valid values: `GET` | `POST` | `OPTIONS` | `PUT` | `DELETE` | `HEAD` | `ALL`',
      () =>
        cloudfront_ResponseHeadersPolicyCorsConfigAccessControlAllowMethods_GetTypes(),
      true,
      false,
    ),
  ];
}
