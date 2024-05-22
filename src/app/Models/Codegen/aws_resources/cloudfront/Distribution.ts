import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_DistributionDefaultCacheBehavior,
  cloudfront_DistributionDefaultCacheBehavior_GetTypes,
} from "../types/cloudfront_DistributionDefaultCacheBehavior";
import {
  cloudfront_DistributionTrustedKeyGroup,
  cloudfront_DistributionTrustedKeyGroup_GetTypes,
} from "../types/cloudfront_DistributionTrustedKeyGroup";
import {
  cloudfront_DistributionCustomErrorResponse,
  cloudfront_DistributionCustomErrorResponse_GetTypes,
} from "../types/cloudfront_DistributionCustomErrorResponse";
import {
  cloudfront_DistributionViewerCertificate,
  cloudfront_DistributionViewerCertificate_GetTypes,
} from "../types/cloudfront_DistributionViewerCertificate";
import {
  cloudfront_DistributionOriginGroup,
  cloudfront_DistributionOriginGroup_GetTypes,
} from "../types/cloudfront_DistributionOriginGroup";
import {
  cloudfront_DistributionOrderedCacheBehavior,
  cloudfront_DistributionOrderedCacheBehavior_GetTypes,
} from "../types/cloudfront_DistributionOrderedCacheBehavior";
import {
  cloudfront_DistributionOrigin,
  cloudfront_DistributionOrigin_GetTypes,
} from "../types/cloudfront_DistributionOrigin";
import {
  cloudfront_DistributionTrustedSigner,
  cloudfront_DistributionTrustedSigner_GetTypes,
} from "../types/cloudfront_DistributionTrustedSigner";
import {
  cloudfront_DistributionLoggingConfig,
  cloudfront_DistributionLoggingConfig_GetTypes,
} from "../types/cloudfront_DistributionLoggingConfig";
import {
  cloudfront_DistributionRestrictions,
  cloudfront_DistributionRestrictions_GetTypes,
} from "../types/cloudfront_DistributionRestrictions";

export interface DistributionArgs {
  // Disables the distribution instead of deleting it when destroying the resource through the provider. If this is set, the distribution needs to be deleted manually afterwards. Default: `false`.
  retainOnDelete?: boolean;

  // If enabled, the resource will wait for the distribution status to change from `InProgress` to `Deployed`. Setting this to`false` will skip the process. Default: `true`.
  waitForDeployment?: boolean;

  // One or more custom error response elements (multiples allowed).
  customErrorResponses?: Array<cloudfront_DistributionCustomErrorResponse>;

  // The logging configuration that controls how logs are written to your distribution (maximum one).
  loggingConfig?: cloudfront_DistributionLoggingConfig;

  // Price class for this distribution. One of `PriceClass_All`, `PriceClass_200`, `PriceClass_100`.
  priceClass?: string;

  // The restriction configuration for this distribution (maximum one).
  restrictions?: cloudfront_DistributionRestrictions;

  // Any comments you want to include about the distribution.
  comment?: string;

  // Maximum HTTP version to support on the distribution. Allowed values are `http1.1`, `http2`, `http2and3` and `http3`. The default is `http2`.
  httpVersion?: string;

  // One or more origin_group for this distribution (multiples allowed).
  originGroups?: Array<cloudfront_DistributionOriginGroup>;

  // Whether the IPv6 is enabled for the distribution.
  isIpv6Enabled?: boolean;

  // Ordered list of cache behaviors resource for this distribution. List from top to bottom in order of precedence. The topmost cache behavior will have precedence 0.
  orderedCacheBehaviors?: Array<cloudfront_DistributionOrderedCacheBehavior>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The SSL configuration for this distribution (maximum one).
  viewerCertificate?: cloudfront_DistributionViewerCertificate;

  // Extra CNAMEs (alternate domain names), if any, for this distribution.
  aliases?: Array<string>;

  // Identifier of a continuous deployment policy. This argument should only be set on a production distribution. See the `aws.cloudfront.ContinuousDeploymentPolicy` resource for additional details.
  continuousDeploymentPolicyId?: string;

  // Object that you want CloudFront to return (for example, index.html) when an end user requests the root URL.
  defaultRootObject?: string;

  // A Boolean that indicates whether this is a staging distribution. Defaults to `false`.
  staging?: boolean;

  // Unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of AWS WAF (WAFv2), use the ACL ARN, for example `aws_wafv2_web_acl.example.arn`. To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `aws_waf_web_acl.example.id`. The WAF Web ACL must exist in the WAF Global (CloudFront) region and the credentials configuring this argument must have `waf:GetWebACL` permissions assigned.
  webAclId?: string;

  // Default cache behavior for this distribution (maximum one). Requires either `cache_policy_id` (preferred) or `forwarded_values` (deprecated) be set.
  defaultCacheBehavior?: cloudfront_DistributionDefaultCacheBehavior;

  // Whether Origin Shield is enabled.
  enabled?: boolean;

  // One or more origins for this distribution (multiples allowed).
  origins?: Array<cloudfront_DistributionOrigin>;
}
export class Distribution extends Resource {
  // Maximum HTTP version to support on the distribution. Allowed values are `http1.1`, `http2`, `http2and3` and `http3`. The default is `http2`.
  public httpVersion?: string;

  // List of AWS account IDs (or `self`) that you want to allow to create signed URLs for private content. See the [CloudFront User Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html) for more information about this feature.
  public trustedSigners?: Array<cloudfront_DistributionTrustedSigner>;

  // One or more custom error response elements (multiples allowed).
  public customErrorResponses?: Array<cloudfront_DistributionCustomErrorResponse>;

  // Default cache behavior for this distribution (maximum one). Requires either `cache_policy_id` (preferred) or `forwarded_values` (deprecated) be set.
  public defaultCacheBehavior?: cloudfront_DistributionDefaultCacheBehavior;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN for the distribution. For example: `arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5`, where `123456789012` is your AWS account ID.
  public arn?: string;

  // Current version of the distribution's information. For example: `E2QWRUHAPOMQZL`.
  public etag?: string;

  // Price class for this distribution. One of `PriceClass_All`, `PriceClass_200`, `PriceClass_100`.
  public priceClass?: string;

  // Disables the distribution instead of deleting it when destroying the resource through the provider. If this is set, the distribution needs to be deleted manually afterwards. Default: `false`.
  public retainOnDelete?: boolean;

  // List of key group IDs that CloudFront can use to validate signed URLs or signed cookies. See the [CloudFront User Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html) for more information about this feature.
  public trustedKeyGroups?: Array<cloudfront_DistributionTrustedKeyGroup>;

  // Identifier of a continuous deployment policy. This argument should only be set on a production distribution. See the `aws.cloudfront.ContinuousDeploymentPolicy` resource for additional details.
  public continuousDeploymentPolicyId?: string;

  // The logging configuration that controls how logs are written to your distribution (maximum one).
  public loggingConfig?: cloudfront_DistributionLoggingConfig;

  // One or more origin_group for this distribution (multiples allowed).
  public originGroups?: Array<cloudfront_DistributionOriginGroup>;

  // One or more origins for this distribution (multiples allowed).
  public origins?: Array<cloudfront_DistributionOrigin>;

  // Current status of the distribution. `Deployed` if the distribution's information is fully propagated throughout the Amazon CloudFront system.
  public status?: string;

  // The SSL configuration for this distribution (maximum one).
  public viewerCertificate?: cloudfront_DistributionViewerCertificate;

  // Extra CNAMEs (alternate domain names), if any, for this distribution.
  public aliases?: Array<string>;

  // Internal value used by CloudFront to allow future updates to the distribution configuration.
  public callerReference?: string;

  // If enabled, the resource will wait for the distribution status to change from `InProgress` to `Deployed`. Setting this to`false` will skip the process. Default: `true`.
  public waitForDeployment?: boolean;

  // Ordered list of cache behaviors resource for this distribution. List from top to bottom in order of precedence. The topmost cache behavior will have precedence 0.
  public orderedCacheBehaviors?: Array<cloudfront_DistributionOrderedCacheBehavior>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether Origin Shield is enabled.
  public enabled?: boolean;

  // CloudFront Route 53 zone ID that can be used to route an [Alias Resource Record Set](http://docs.aws.amazon.com/Route53/latest/APIReference/CreateAliasRRSAPI.html) to. This attribute is simply an alias for the zone ID `Z2FDTNDATAQYW2`.
  public hostedZoneId?: string;

  // Number of invalidation batches currently in progress.
  public inProgressValidationBatches?: number;

  // Object that you want CloudFront to return (for example, index.html) when an end user requests the root URL.
  public defaultRootObject?: string;

  // DNS domain name of either the S3 bucket, or web site of your custom origin.
  public domainName?: string;

  // Date and time the distribution was last modified.
  public lastModifiedTime?: string;

  // The restriction configuration for this distribution (maximum one).
  public restrictions?: cloudfront_DistributionRestrictions;

  // A Boolean that indicates whether this is a staging distribution. Defaults to `false`.
  public staging?: boolean;

  // Unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of AWS WAF (WAFv2), use the ACL ARN, for example `aws_wafv2_web_acl.example.arn`. To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `aws_waf_web_acl.example.id`. The WAF Web ACL must exist in the WAF Global (CloudFront) region and the credentials configuring this argument must have `waf:GetWebACL` permissions assigned.
  public webAclId?: string;

  // Any comments you want to include about the distribution.
  public comment?: string;

  // Whether the IPv6 is enabled for the distribution.
  public isIpv6Enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "viewerCertificate",
        "The SSL configuration for this distribution (maximum one).",
        cloudfront_DistributionViewerCertificate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "originGroups",
        "One or more origin_group for this distribution (multiples allowed).",
        cloudfront_DistributionOriginGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfig",
        "The logging configuration that controls how logs are written to your distribution (maximum one).",
        cloudfront_DistributionLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restrictions",
        "The restriction configuration for this distribution (maximum one).",
        cloudfront_DistributionRestrictions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultCacheBehavior",
        "Default cache behavior for this distribution (maximum one). Requires either `cache_policy_id` (preferred) or `forwarded_values` (deprecated) be set.",
        cloudfront_DistributionDefaultCacheBehavior_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether Origin Shield is enabled.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "origins",
        "One or more origins for this distribution (multiples allowed).",
        cloudfront_DistributionOrigin_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForDeployment",
        "If enabled, the resource will wait for the distribution status to change from `InProgress` to `Deployed`. Setting this to`false` will skip the process. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customErrorResponses",
        "One or more custom error response elements (multiples allowed).",
        cloudfront_DistributionCustomErrorResponse_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isIpv6Enabled",
        "Whether the IPv6 is enabled for the distribution.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "aliases",
        "Extra CNAMEs (alternate domain names), if any, for this distribution.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "continuousDeploymentPolicyId",
        "Identifier of a continuous deployment policy. This argument should only be set on a production distribution. See the `aws.cloudfront.ContinuousDeploymentPolicy` resource for additional details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "staging",
        "A Boolean that indicates whether this is a staging distribution. Defaults to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "webAclId",
        "Unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of AWS WAF (WAFv2), use the ACL ARN, for example `aws_wafv2_web_acl.example.arn`. To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `aws_waf_web_acl.example.id`. The WAF Web ACL must exist in the WAF Global (CloudFront) region and the credentials configuring this argument must have `waf:GetWebACL` permissions assigned.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "priceClass",
        "Price class for this distribution. One of `PriceClass_All`, `PriceClass_200`, `PriceClass_100`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Any comments you want to include about the distribution.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "orderedCacheBehaviors",
        "Ordered list of cache behaviors resource for this distribution. List from top to bottom in order of precedence. The topmost cache behavior will have precedence 0.",
        cloudfront_DistributionOrderedCacheBehavior_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultRootObject",
        "Object that you want CloudFront to return (for example, index.html) when an end user requests the root URL.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "retainOnDelete",
        "Disables the distribution instead of deleting it when destroying the resource through the provider. If this is set, the distribution needs to be deleted manually afterwards. Default: `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpVersion",
        "Maximum HTTP version to support on the distribution. Allowed values are `http1.1`, `http2`, `http2and3` and `http3`. The default is `http2`.",
        [],
        false,
        false,
      ),
    ];
  }
}
