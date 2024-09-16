import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_OriginRequestPolicyHeadersConfig,
  cloudfront_OriginRequestPolicyHeadersConfig_GetTypes,
} from '../types/cloudfront_OriginRequestPolicyHeadersConfig';
import {
  cloudfront_OriginRequestPolicyQueryStringsConfig,
  cloudfront_OriginRequestPolicyQueryStringsConfig_GetTypes,
} from '../types/cloudfront_OriginRequestPolicyQueryStringsConfig';
import {
  cloudfront_OriginRequestPolicyCookiesConfig,
  cloudfront_OriginRequestPolicyCookiesConfig_GetTypes,
} from '../types/cloudfront_OriginRequestPolicyCookiesConfig';

export interface OriginRequestPolicyArgs {
  // Comment to describe the origin request policy.
  comment?: string;

  // Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.
  cookiesConfig?: cloudfront_OriginRequestPolicyCookiesConfig;

  // Object that determines whether any HTTP headers (and if so, which headers) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.
  headersConfig?: cloudfront_OriginRequestPolicyHeadersConfig;

  // Unique name to identify the origin request policy.
  name?: string;

  // Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Query String Config for more information.
  queryStringsConfig?: cloudfront_OriginRequestPolicyQueryStringsConfig;
}
export class OriginRequestPolicy extends DS_Resource {
  // Comment to describe the origin request policy.
  public comment?: string;

  // Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.
  public cookiesConfig?: cloudfront_OriginRequestPolicyCookiesConfig;

  // The current version of the origin request policy.
  public etag?: string;

  // Object that determines whether any HTTP headers (and if so, which headers) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.
  public headersConfig?: cloudfront_OriginRequestPolicyHeadersConfig;

  // Unique name to identify the origin request policy.
  public name?: string;

  // Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Query String Config for more information.
  public queryStringsConfig?: cloudfront_OriginRequestPolicyQueryStringsConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'comment',
        'Comment to describe the origin request policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cookiesConfig',
        'Object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Cookies Config for more information.',
        () => cloudfront_OriginRequestPolicyCookiesConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'headersConfig',
        'Object that determines whether any HTTP headers (and if so, which headers) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Headers Config for more information.',
        () => cloudfront_OriginRequestPolicyHeadersConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name to identify the origin request policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'queryStringsConfig',
        'Object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the origin request key and automatically included in requests that CloudFront sends to the origin. See Query String Config for more information.',
        () => cloudfront_OriginRequestPolicyQueryStringsConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
