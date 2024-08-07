import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity";
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection";
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy";
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption";
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption";
import {
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy,
  cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy_GetTypes,
} from "./cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy";

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfig {
  // The policy directives and their values that CloudFront includes as values for the Content-Security-Policy HTTP response header.
  contentSecurityPolicies?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy>;

  // A setting that determines whether CloudFront includes the X-Content-Type-Options HTTP response header with its value set to nosniff. See Content Type Options for more information.
  contentTypeOptions?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption>;

  // Setting that determines whether CloudFront includes the X-Frame-Options HTTP response header and the header’s value. See Frame Options for more information.
  frameOptions?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption>;

  // Value of the Referrer-Policy HTTP response header. Valid Values: `no-referrer` | `no-referrer-when-downgrade` | `origin` | `origin-when-cross-origin` | `same-origin` | `strict-origin` | `strict-origin-when-cross-origin` | `unsafe-url`
  referrerPolicies?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy>;

  // Settings that determine whether CloudFront includes the Strict-Transport-Security HTTP response header and the header’s value. See Strict Transport Security for more information.
  strictTransportSecurities?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity>;

  // Settings that determine whether CloudFront includes the X-XSS-Protection HTTP response header and the header’s value. See XSS Protection for more information.
  xssProtections?: Array<cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection>;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "contentSecurityPolicies",
      "The policy directives and their values that CloudFront includes as values for the Content-Security-Policy HTTP response header.",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "contentTypeOptions",
      "A setting that determines whether CloudFront includes the X-Content-Type-Options HTTP response header with its value set to nosniff. See Content Type Options for more information.",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentTypeOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "frameOptions",
      "Setting that determines whether CloudFront includes the X-Frame-Options HTTP response header and the header’s value. See Frame Options for more information.",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigFrameOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "referrerPolicies",
      "Value of the Referrer-Policy HTTP response header. Valid Values: `no-referrer` | `no-referrer-when-downgrade` | `origin` | `origin-when-cross-origin` | `same-origin` | `strict-origin` | `strict-origin-when-cross-origin` | `unsafe-url`",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigReferrerPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "strictTransportSecurities",
      "Settings that determine whether CloudFront includes the Strict-Transport-Security HTTP response header and the header’s value. See Strict Transport Security for more information.",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "xssProtections",
      "Settings that determine whether CloudFront includes the X-XSS-Protection HTTP response header and the header’s value. See XSS Protection for more information.",
      cloudfront_getResponseHeadersPolicySecurityHeadersConfigXssProtection_GetTypes(),
      true,
      false,
    ),
  ];
}
