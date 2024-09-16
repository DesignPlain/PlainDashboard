import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
  // The policy directives and their values that CloudFront includes as values for the Content-Security-Policy HTTP response header.
  contentSecurityPolicy?: string;

  // Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.
  override?: boolean;
}

export function cloudfront_getResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contentSecurityPolicy',
      'The policy directives and their values that CloudFront includes as values for the Content-Security-Policy HTTP response header.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'override',
      'Whether CloudFront overrides the X-XSS-Protection HTTP response header received from the origin with the one specified in this response headers policy.',
      () => [],
      true,
      false,
    ),
  ];
}
