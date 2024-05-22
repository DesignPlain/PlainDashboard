import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy";
import {
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity,
  cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity_GetTypes,
} from "./cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity";

export interface cloudfront_ResponseHeadersPolicySecurityHeadersConfig {
  // Determine whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header’s value. See XSS Protection for more information.
  xssProtection?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection;

  // The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header. See Content Security Policy for more information.
  contentSecurityPolicy?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;

  // Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`. See Content Type Options for more information.
  contentTypeOptions?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;

  // Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header’s value. See Frame Options for more information.
  frameOptions?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions;

  // Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header’s value. See Referrer Policy for more information.
  referrerPolicy?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;

  // Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header’s value. See Strict Transport Security for more information.
  strictTransportSecurity?: cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
}

export function cloudfront_ResponseHeadersPolicySecurityHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "contentSecurityPolicy",
      "The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header. See Content Security Policy for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "contentTypeOptions",
      "Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`. See Content Type Options for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigContentTypeOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "frameOptions",
      "Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header’s value. See Frame Options for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigFrameOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "referrerPolicy",
      "Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header’s value. See Referrer Policy for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigReferrerPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "strictTransportSecurity",
      "Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header’s value. See Strict Transport Security for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "xssProtection",
      "Determine whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header’s value. See XSS Protection for more information.",
      cloudfront_ResponseHeadersPolicySecurityHeadersConfigXssProtection_GetTypes(),
      false,
      false,
    ),
  ];
}
