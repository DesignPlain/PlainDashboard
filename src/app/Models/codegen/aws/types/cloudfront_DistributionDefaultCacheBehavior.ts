import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation,
  cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation_GetTypes,
} from "./cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation";
import {
  cloudfront_DistributionDefaultCacheBehaviorForwardedValues,
  cloudfront_DistributionDefaultCacheBehaviorForwardedValues_GetTypes,
} from "./cloudfront_DistributionDefaultCacheBehaviorForwardedValues";
import {
  cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation,
  cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation_GetTypes,
} from "./cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation";

export interface cloudfront_DistributionDefaultCacheBehavior {
  // Unique identifier of the origin request policy that is attached to the behavior.
  originRequestPolicyId?: string;

  // Value of ID for the origin that you want CloudFront to route requests to when a request matches the path pattern either for a cache behavior or for the default cache behavior.
  targetOriginId?: string;

  // Field level encryption configuration ID.
  fieldLevelEncryptionId?: string;

  // A config block that triggers a cloudfront function with specific actions (maximum 2).
  functionAssociations?: Array<cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation>;

  // Maximum amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. Only effective in the presence of `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` headers.
  maxTtl?: number;

  // ARN of the real-time log configuration that is attached to this cache behavior.
  realtimeLogConfigArn?: string;

  // Identifier for a response headers policy.
  responseHeadersPolicyId?: string;

  // Use this element to specify the protocol that users can use to access the files in the origin specified by TargetOriginId when a request matches the path pattern in PathPattern. One of `allow-all`, `https-only`, or `redirect-to-https`.
  viewerProtocolPolicy?: string;

  // Whether you want CloudFront to automatically compress content for web requests that include `Accept-Encoding: gzip` in the request header (default: `false`).
  compress?: boolean;

  // Default amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request in the absence of an `Cache-Control max-age` or `Expires` header.
  defaultTtl?: number;

  // The forwarded values configuration that specifies how CloudFront handles query strings, cookies and headers (maximum one).
  forwardedValues?: cloudfront_DistributionDefaultCacheBehaviorForwardedValues;

  // A config block that triggers a lambda function with specific actions (maximum 4).
  lambdaFunctionAssociations?: Array<cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation>;

  // Indicates whether you want to distribute media files in Microsoft Smooth Streaming format using the origin that is associated with this cache behavior.
  smoothStreaming?: boolean;

  // List of nested attributes for active trusted key groups, if the distribution is set up to serve private content with signed URLs.
  trustedKeyGroups?: Array<string>;

  // Controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin.
  allowedMethods?: Array<string>;

  // Controls whether CloudFront caches the response to requests using the specified HTTP methods.
  cachedMethods?: Array<string>;

  // List of nested attributes for active trusted signers, if the distribution is set up to serve private content with signed URLs.
  trustedSigners?: Array<string>;

  // Unique identifier of the cache policy that is attached to the cache behavior. If configuring the `default_cache_behavior` either `cache_policy_id` or `forwarded_values` must be set.
  cachePolicyId?: string;

  // Minimum amount of time that you want objects to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated. Defaults to 0 seconds.
  minTtl?: number;
}

export function cloudfront_DistributionDefaultCacheBehavior_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "trustedSigners",
      "List of nested attributes for active trusted signers, if the distribution is set up to serve private content with signed URLs.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "viewerProtocolPolicy",
      "Use this element to specify the protocol that users can use to access the files in the origin specified by TargetOriginId when a request matches the path pattern in PathPattern. One of `allow-all`, `https-only`, or `redirect-to-https`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "compress",
      "Whether you want CloudFront to automatically compress content for web requests that include `Accept-Encoding: gzip` in the request header (default: `false`).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "defaultTtl",
      "Default amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request in the absence of an `Cache-Control max-age` or `Expires` header.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedValues",
      "The forwarded values configuration that specifies how CloudFront handles query strings, cookies and headers (maximum one).",
      () =>
        cloudfront_DistributionDefaultCacheBehaviorForwardedValues_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetOriginId",
      "Value of ID for the origin that you want CloudFront to route requests to when a request matches the path pattern either for a cache behavior or for the default cache behavior.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fieldLevelEncryptionId",
      "Field level encryption configuration ID.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lambdaFunctionAssociations",
      "A config block that triggers a lambda function with specific actions (maximum 4).",
      () =>
        cloudfront_DistributionDefaultCacheBehaviorLambdaFunctionAssociation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cachePolicyId",
      "Unique identifier of the cache policy that is attached to the cache behavior. If configuring the `default_cache_behavior` either `cache_policy_id` or `forwarded_values` must be set.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minTtl",
      "Minimum amount of time that you want objects to stay in CloudFront caches before CloudFront queries your origin to see whether the object has been updated. Defaults to 0 seconds.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "trustedKeyGroups",
      "List of nested attributes for active trusted key groups, if the distribution is set up to serve private content with signed URLs.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedMethods",
      "Controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originRequestPolicyId",
      "Unique identifier of the origin request policy that is attached to the behavior.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "functionAssociations",
      "A config block that triggers a cloudfront function with specific actions (maximum 2).",
      () =>
        cloudfront_DistributionDefaultCacheBehaviorFunctionAssociation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxTtl",
      "Maximum amount of time (in seconds) that an object is in a CloudFront cache before CloudFront forwards another request to your origin to determine whether the object has been updated. Only effective in the presence of `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` headers.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "realtimeLogConfigArn",
      "ARN of the real-time log configuration that is attached to this cache behavior.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseHeadersPolicyId",
      "Identifier for a response headers policy.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "smoothStreaming",
      "Indicates whether you want to distribute media files in Microsoft Smooth Streaming format using the origin that is associated with this cache behavior.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cachedMethods",
      "Controls whether CloudFront caches the response to requests using the specified HTTP methods.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
