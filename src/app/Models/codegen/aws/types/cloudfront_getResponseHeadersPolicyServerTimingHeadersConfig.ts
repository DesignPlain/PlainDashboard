import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_getResponseHeadersPolicyServerTimingHeadersConfig {
  // Whether CloudFront adds the `Server-Timing` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
  enabled?: boolean;

  // Number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the Server-Timing header to.
  samplingRate?: number;
}

export function cloudfront_getResponseHeadersPolicyServerTimingHeadersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      "Whether CloudFront adds the `Server-Timing` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'samplingRate',
      'Number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the Server-Timing header to.',
      () => [],
      true,
      false,
    ),
  ];
}
