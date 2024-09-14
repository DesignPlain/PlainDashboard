import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader,
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader_GetTypes,
} from "./cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader";
import {
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod,
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod_GetTypes,
} from "./cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod";
import {
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin,
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin_GetTypes,
} from "./cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin";
import {
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader,
  cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader_GetTypes,
} from "./cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader";

export interface cloudfront_getResponseHeadersPolicyCorsConfig {
  //
  originOverride?: boolean;

  // A Boolean value that CloudFront uses as the value for the Access-Control-Allow-Credentials HTTP response header.
  accessControlAllowCredentials?: boolean;

  // Object that contains an attribute `items` that contains a list of HTTP header names that CloudFront includes as values for the Access-Control-Allow-Headers HTTP response header.
  accessControlAllowHeaders?: Array<cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader>;

  // Object that contains an attribute `items` that contains a list of HTTP methods that CloudFront includes as values for the Access-Control-Allow-Methods HTTP response header. Valid values: `GET` | `POST` | `OPTIONS` | `PUT` | `DELETE` | `HEAD` | `ALL`
  accessControlAllowMethods?: Array<cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod>;

  // Object that contains an attribute `items` that contains a list of origins that CloudFront can use as the value for the Access-Control-Allow-Origin HTTP response header.
  accessControlAllowOrigins?: Array<cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin>;

  // Object that contains an attribute `items` that contains a list of HTTP headers that CloudFront includes as values for the Access-Control-Expose-Headers HTTP response header.
  accessControlExposeHeaders?: Array<cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader>;

  // A number that CloudFront uses as the value for the max-age directive in the Strict-Transport-Security HTTP response header.
  accessControlMaxAgeSec?: number;
}

export function cloudfront_getResponseHeadersPolicyCorsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "originOverride",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "accessControlAllowCredentials",
      "A Boolean value that CloudFront uses as the value for the Access-Control-Allow-Credentials HTTP response header.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessControlAllowHeaders",
      "Object that contains an attribute `items` that contains a list of HTTP header names that CloudFront includes as values for the Access-Control-Allow-Headers HTTP response header.",
      () =>
        cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessControlAllowMethods",
      "Object that contains an attribute `items` that contains a list of HTTP methods that CloudFront includes as values for the Access-Control-Allow-Methods HTTP response header. Valid values: `GET` | `POST` | `OPTIONS` | `PUT` | `DELETE` | `HEAD` | `ALL`",
      () =>
        cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowMethod_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessControlAllowOrigins",
      "Object that contains an attribute `items` that contains a list of origins that CloudFront can use as the value for the Access-Control-Allow-Origin HTTP response header.",
      () =>
        cloudfront_getResponseHeadersPolicyCorsConfigAccessControlAllowOrigin_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessControlExposeHeaders",
      "Object that contains an attribute `items` that contains a list of HTTP headers that CloudFront includes as values for the Access-Control-Expose-Headers HTTP response header.",
      () =>
        cloudfront_getResponseHeadersPolicyCorsConfigAccessControlExposeHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "accessControlMaxAgeSec",
      "A number that CloudFront uses as the value for the max-age directive in the Strict-Transport-Security HTTP response header.",
      () => [],
      true,
      false,
    ),
  ];
}
