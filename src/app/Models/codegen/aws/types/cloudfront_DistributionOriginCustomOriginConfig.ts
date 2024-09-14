import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudfront_DistributionOriginCustomOriginConfig {
  // HTTPS port the custom origin listens on.
  httpsPort?: number;

  // The Custom KeepAlive timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `5`.
  originKeepaliveTimeout?: number;

  // Origin protocol policy to apply to your origin. One of `http-only`, `https-only`, or `match-viewer`.
  originProtocolPolicy?: string;

  // The Custom Read timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `30`.
  originReadTimeout?: number;

  // List of SSL/TLS protocols that CloudFront can use when connecting to your origin over HTTPS. Valid values: `SSLv3`, `TLSv1`, `TLSv1.1`, `TLSv1.2`. For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the Amazon CloudFront Developer Guide.
  originSslProtocols?: Array<string>;

  // HTTP port the custom origin listens on.
  httpPort?: number;
}

export function cloudfront_DistributionOriginCustomOriginConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "originReadTimeout",
      "The Custom Read timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `30`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "originSslProtocols",
      "List of SSL/TLS protocols that CloudFront can use when connecting to your origin over HTTPS. Valid values: `SSLv3`, `TLSv1`, `TLSv1.1`, `TLSv1.2`. For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the Amazon CloudFront Developer Guide.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpPort",
      "HTTP port the custom origin listens on.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpsPort",
      "HTTPS port the custom origin listens on.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "originKeepaliveTimeout",
      "The Custom KeepAlive timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `5`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originProtocolPolicy",
      "Origin protocol policy to apply to your origin. One of `http-only`, `https-only`, or `match-viewer`.",
      () => [],
      true,
      false,
    ),
  ];
}
