import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_DistributionOriginCustomOriginConfig,
  cloudfront_DistributionOriginCustomOriginConfig_GetTypes,
} from "./cloudfront_DistributionOriginCustomOriginConfig";
import {
  cloudfront_DistributionOriginS3OriginConfig,
  cloudfront_DistributionOriginS3OriginConfig_GetTypes,
} from "./cloudfront_DistributionOriginS3OriginConfig";
import {
  cloudfront_DistributionOriginCustomHeader,
  cloudfront_DistributionOriginCustomHeader_GetTypes,
} from "./cloudfront_DistributionOriginCustomHeader";
import {
  cloudfront_DistributionOriginOriginShield,
  cloudfront_DistributionOriginOriginShield_GetTypes,
} from "./cloudfront_DistributionOriginOriginShield";

export interface cloudfront_DistributionOrigin {
  // Number of times that CloudFront attempts to connect to the origin. Must be between 1-3. Defaults to 3.
  connectionAttempts?: number;

  // Number of seconds that CloudFront waits when trying to establish a connection to the origin. Must be between 1-10. Defaults to 10.
  connectionTimeout?: number;

  // The CloudFront custom origin configuration information. If an S3 origin is required, use `origin_access_control_id` or `s3_origin_config` instead.
  customOriginConfig?: cloudfront_DistributionOriginCustomOriginConfig;

  //
  originId?: string;

  // Optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.
  originPath?: string;

  // CloudFront S3 origin configuration information. If a custom origin is required, use `custom_origin_config` instead.
  s3OriginConfig?: cloudfront_DistributionOriginS3OriginConfig;

  // One or more sub-resources with `name` and `value` parameters that specify header data that will be sent to the origin (multiples allowed).
  customHeaders?: Array<cloudfront_DistributionOriginCustomHeader>;

  // Domain name corresponding to the distribution. For example: `d604721fxaaqy9.cloudfront.net`.
  domainName?: string;

  // Unique identifier of a [CloudFront origin access control][8] for this origin.
  originAccessControlId?: string;

  // CloudFront Origin Shield configuration information. Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide.
  originShield?: cloudfront_DistributionOriginOriginShield;
}

export function cloudfront_DistributionOrigin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "connectionTimeout",
      "Number of seconds that CloudFront waits when trying to establish a connection to the origin. Must be between 1-10. Defaults to 10.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customOriginConfig",
      "The CloudFront custom origin configuration information. If an S3 origin is required, use `origin_access_control_id` or `s3_origin_config` instead.",
      () => cloudfront_DistributionOriginCustomOriginConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "originId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "originPath",
      "Optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3OriginConfig",
      "CloudFront S3 origin configuration information. If a custom origin is required, use `custom_origin_config` instead.",
      () => cloudfront_DistributionOriginS3OriginConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionAttempts",
      "Number of times that CloudFront attempts to connect to the origin. Must be between 1-3. Defaults to 3.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customHeaders",
      "One or more sub-resources with `name` and `value` parameters that specify header data that will be sent to the origin (multiples allowed).",
      () => cloudfront_DistributionOriginCustomHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "Domain name corresponding to the distribution. For example: `d604721fxaaqy9.cloudfront.net`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originAccessControlId",
      "Unique identifier of a [CloudFront origin access control][8] for this origin.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "originShield",
      "CloudFront Origin Shield configuration information. Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide.",
      () => cloudfront_DistributionOriginOriginShield_GetTypes(),
      false,
      false,
    ),
  ];
}
