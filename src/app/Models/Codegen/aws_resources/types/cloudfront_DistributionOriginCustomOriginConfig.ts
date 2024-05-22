import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfront_DistributionOriginCustomOriginConfig {
  // The Custom KeepAlive timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `5`.
  originKeepaliveTimeout?: number;

  // Origin protocol policy to apply to your origin. One of `http-only`, `https-only`, or `match-viewer`.
  originProtocolPolicy?: string;

  // The Custom Read timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `30`.
  originReadTimeout?: number;

  // SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS. A list of one or more of `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
  originSslProtocols?: Array<string>;

  // HTTP port the custom origin listens on.
  httpPort?: number;

  // HTTPS port the custom origin listens on.
  httpsPort?: number;
}

export function cloudfront_DistributionOriginCustomOriginConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "originKeepaliveTimeout",
      "The Custom KeepAlive timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `5`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originProtocolPolicy",
      "Origin protocol policy to apply to your origin. One of `http-only`, `https-only`, or `match-viewer`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "originReadTimeout",
      "The Custom Read timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `30`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "originSslProtocols",
      "SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS. A list of one or more of `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpPort",
      "HTTP port the custom origin listens on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "httpsPort",
      "HTTPS port the custom origin listens on.",
      [],
      true,
      false,
    ),
  ];
}
