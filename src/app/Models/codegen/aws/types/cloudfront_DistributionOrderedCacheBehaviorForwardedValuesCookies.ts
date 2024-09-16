import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies {
  // If you have specified `whitelist` to `forward`, the whitelisted cookies that you want CloudFront to forward to your origin.
  whitelistedNames?: Array<string>;

  // Whether you want CloudFront to forward cookies to the origin that is associated with this cache behavior. You can specify `all`, `none` or `whitelist`. If `whitelist`, you must include the subsequent `whitelisted_names`.
  forward?: string;
}

export function cloudfront_DistributionOrderedCacheBehaviorForwardedValuesCookies_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'whitelistedNames',
      'If you have specified `whitelist` to `forward`, the whitelisted cookies that you want CloudFront to forward to your origin.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'forward',
      'Whether you want CloudFront to forward cookies to the origin that is associated with this cache behavior. You can specify `all`, `none` or `whitelist`. If `whitelist`, you must include the subsequent `whitelisted_names`.',
      () => [],
      true,
      false,
    ),
  ];
}
