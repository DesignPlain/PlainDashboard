import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_DistributionOrderedCacheBehavior,
  cloudfront_DistributionOrderedCacheBehavior_GetTypes,
} from '../types/cloudfront_DistributionOrderedCacheBehavior';
import {
  cloudfront_DistributionDefaultCacheBehavior,
  cloudfront_DistributionDefaultCacheBehavior_GetTypes,
} from '../types/cloudfront_DistributionDefaultCacheBehavior';
import {
  cloudfront_DistributionLoggingConfig,
  cloudfront_DistributionLoggingConfig_GetTypes,
} from '../types/cloudfront_DistributionLoggingConfig';
import {
  cloudfront_DistributionTrustedKeyGroup,
  cloudfront_DistributionTrustedKeyGroup_GetTypes,
} from '../types/cloudfront_DistributionTrustedKeyGroup';
import {
  cloudfront_DistributionRestrictions,
  cloudfront_DistributionRestrictions_GetTypes,
} from '../types/cloudfront_DistributionRestrictions';
import {
  cloudfront_DistributionOrigin,
  cloudfront_DistributionOrigin_GetTypes,
} from '../types/cloudfront_DistributionOrigin';
import {
  cloudfront_DistributionViewerCertificate,
  cloudfront_DistributionViewerCertificate_GetTypes,
} from '../types/cloudfront_DistributionViewerCertificate';
import {
  cloudfront_DistributionCustomErrorResponse,
  cloudfront_DistributionCustomErrorResponse_GetTypes,
} from '../types/cloudfront_DistributionCustomErrorResponse';
import {
  cloudfront_DistributionTrustedSigner,
  cloudfront_DistributionTrustedSigner_GetTypes,
} from '../types/cloudfront_DistributionTrustedSigner';
import {
  cloudfront_DistributionOriginGroup,
  cloudfront_DistributionOriginGroup_GetTypes,
} from '../types/cloudfront_DistributionOriginGroup';

export interface DistributionArgs {
  // `true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs
  enabled?: boolean;

  //
  originGroups?: Array<cloudfront_DistributionOriginGroup>;

  //
  priceClass?: string;

  //
  restrictions?: cloudfront_DistributionRestrictions;

  //
  tags?: Map<string, string>;

  //
  aliases?: Array<string>;

  //
  comment?: string;

  //
  defaultRootObject?: string;

  //
  webAclId?: string;

  //
  origins?: Array<cloudfront_DistributionOrigin>;

  //
  viewerCertificate?: cloudfront_DistributionViewerCertificate;

  //
  waitForDeployment?: boolean;

  //
  customErrorResponses?: Array<cloudfront_DistributionCustomErrorResponse>;

  //
  httpVersion?: string;

  //
  orderedCacheBehaviors?: Array<cloudfront_DistributionOrderedCacheBehavior>;

  //
  defaultCacheBehavior?: cloudfront_DistributionDefaultCacheBehavior;

  //
  retainOnDelete?: boolean;

  //
  staging?: boolean;

  //
  continuousDeploymentPolicyId?: string;

  //
  isIpv6Enabled?: boolean;

  //
  loggingConfig?: cloudfront_DistributionLoggingConfig;
}
export class Distribution extends DS_Resource {
  // Date and time the distribution was last modified.
  public lastModifiedTime?: string;

  //
  public origins?: Array<cloudfront_DistributionOrigin>;

  // Internal value used by CloudFront to allow future updates to the distribution configuration.
  public callerReference?: string;

  //
  public orderedCacheBehaviors?: Array<cloudfront_DistributionOrderedCacheBehavior>;

  // List of nested attributes for active trusted key groups, if the distribution is set up to serve private content with signed URLs.
  public trustedKeyGroups?: Array<cloudfront_DistributionTrustedKeyGroup>;

  // Domain name corresponding to the distribution. For example: `d604721fxaaqy9.cloudfront.net`.
  public domainName?: string;

  // Number of invalidation batches currently in progress.
  public inProgressValidationBatches?: number;

  //
  public isIpv6Enabled?: boolean;

  //
  public originGroups?: Array<cloudfront_DistributionOriginGroup>;

  //
  public restrictions?: cloudfront_DistributionRestrictions;

  //
  public retainOnDelete?: boolean;

  // Current status of the distribution. `Deployed` if the distribution's information is fully propagated throughout the Amazon CloudFront system.
  public status?: string;

  // List of nested attributes for active trusted signers, if the distribution is set up to serve private content with signed URLs.
  public trustedSigners?: Array<cloudfront_DistributionTrustedSigner>;

  //
  public comment?: string;

  // ARN for the distribution. For example: `arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5`, where `123456789012` is your AWS account ID.
  public arn?: string;

  //
  public customErrorResponses?: Array<cloudfront_DistributionCustomErrorResponse>;

  //
  public defaultRootObject?: string;

  // Current version of the distribution's information. For example: `E2QWRUHAPOMQZL`.
  public etag?: string;

  //
  public loggingConfig?: cloudfront_DistributionLoggingConfig;

  //
  public staging?: boolean;

  //
  public aliases?: Array<string>;

  //
  public priceClass?: string;

  //
  public tags?: Map<string, string>;

  //
  public webAclId?: string;

  // `true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs
  public enabled?: boolean;

  // CloudFront Route 53 zone ID that can be used to route an [Alias Resource Record Set](http://docs.aws.amazon.com/Route53/latest/APIReference/CreateAliasRRSAPI.html) to. This attribute is simply an alias for the zone ID `Z2FDTNDATAQYW2`.
  public hostedZoneId?: string;

  //
  public httpVersion?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public waitForDeployment?: boolean;

  //
  public continuousDeploymentPolicyId?: string;

  //
  public viewerCertificate?: cloudfront_DistributionViewerCertificate;

  //
  public defaultCacheBehavior?: cloudfront_DistributionDefaultCacheBehavior;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'httpVersion',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'orderedCacheBehaviors',
        '',
        () => cloudfront_DistributionOrderedCacheBehavior_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'isIpv6Enabled',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'waitForDeployment',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'defaultCacheBehavior',
        '',
        () => cloudfront_DistributionDefaultCacheBehavior_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loggingConfig',
        '',
        () => cloudfront_DistributionLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        '`true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'priceClass',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'restrictions',
        '',
        () => cloudfront_DistributionRestrictions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'continuousDeploymentPolicyId',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'originGroups',
        '',
        () => cloudfront_DistributionOriginGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultRootObject',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'viewerCertificate',
        '',
        () => cloudfront_DistributionViewerCertificate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'origins',
        '',
        () => cloudfront_DistributionOrigin_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customErrorResponses',
        '',
        () => cloudfront_DistributionCustomErrorResponse_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'retainOnDelete',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.Bool, 'staging', '', () => [], false, true),
      new DynamicUIProps(
        InputType.Array,
        'aliases',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'webAclId',
        '',
        () => [],
        false,
        false,
      ),
    ];
  }
}
