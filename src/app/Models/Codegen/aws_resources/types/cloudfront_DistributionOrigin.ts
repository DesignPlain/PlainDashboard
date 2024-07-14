import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_DistributionOriginCustomHeader,
  cloudfront_DistributionOriginCustomHeader_GetTypes,
} from "./cloudfront_DistributionOriginCustomHeader";
import {
  cloudfront_DistributionOriginOriginShield,
  cloudfront_DistributionOriginOriginShield_GetTypes,
} from "./cloudfront_DistributionOriginOriginShield";
import {
  cloudfront_DistributionOriginCustomOriginConfig,
  cloudfront_DistributionOriginCustomOriginConfig_GetTypes,
} from "./cloudfront_DistributionOriginCustomOriginConfig";
import {
  cloudfront_DistributionOriginS3OriginConfig,
  cloudfront_DistributionOriginS3OriginConfig_GetTypes,
} from "./cloudfront_DistributionOriginS3OriginConfig";

export interface cloudfront_DistributionOrigin {
  // The CloudFront custom origin configuration information. If an S3 origin is required, use `origin_access_control_id` or `s3_origin_config` instead.
  customOriginConfig?: cloudfront_DistributionOriginCustomOriginConfig;

  // DNS domain name of either the S3 bucket, or web site of your custom origin.
  domainName?: string;

  // Unique identifier of a [CloudFront origin access control][8] for this origin.
  originAccessControlId?: string;

  // CloudFront S3 origin configuration information. If a custom origin is required, use `custom_origin_config` instead.
  s3OriginConfig?: cloudfront_DistributionOriginS3OriginConfig;

  // Number of times that CloudFront attempts to connect to the origin. Must be between 1-3. Defaults to 3.
  connectionAttempts?: number;

  // Number of seconds that CloudFront waits when trying to establish a connection to the origin. Must be between 1-10. Defaults to 10.
  connectionTimeout?: number;

  // One or more sub-resources with `name` and `value` parameters that specify header data that will be sent to the origin (multiples allowed).
  customHeaders?: Array<cloudfront_DistributionOriginCustomHeader>;

  // Unique identifier of the member origin.
  originId?: string;

  // Optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.
  originPath?: string;

  // CloudFront Origin Shield configuration information. Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide.
  originShield?: cloudfront_DistributionOriginOriginShield;
}

export function cloudfront_DistributionOrigin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "DNS domain name of either the S3 bucket, or web site of your custom origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originAccessControlId",
      "Unique identifier of a [CloudFront origin access control][8] for this origin.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionAttempts",
      "Number of times that CloudFront attempts to connect to the origin. Must be between 1-3. Defaults to 3.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "connectionTimeout",
      "Number of seconds that CloudFront waits when trying to establish a connection to the origin. Must be between 1-10. Defaults to 10.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originId",
      "Unique identifier of the member origin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "originShield",
      "CloudFront Origin Shield configuration information. Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide.",
      cloudfront_DistributionOriginOriginShield_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customOriginConfig",
      "The CloudFront custom origin configuration information. If an S3 origin is required, use `origin_access_control_id` or `s3_origin_config` instead.",
      cloudfront_DistributionOriginCustomOriginConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3OriginConfig",
      "CloudFront S3 origin configuration information. If a custom origin is required, use `custom_origin_config` instead.",
      cloudfront_DistributionOriginS3OriginConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customHeaders",
      "One or more sub-resources with `name` and `value` parameters that specify header data that will be sent to the origin (multiples allowed).",
      cloudfront_DistributionOriginCustomHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originPath",
      "Optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.",
      [],
      false,
      false,
    ),
  ];
}
