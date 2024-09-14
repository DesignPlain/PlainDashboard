import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketServerSideEncryptionConfiguration,
  s3_BucketServerSideEncryptionConfiguration_GetTypes,
} from "../types/s3_BucketServerSideEncryptionConfiguration";
import {
  s3_BucketObjectLockConfiguration,
  s3_BucketObjectLockConfiguration_GetTypes,
} from "../types/s3_BucketObjectLockConfiguration";
import {
  s3_BucketWebsite,
  s3_BucketWebsite_GetTypes,
} from "../types/s3_BucketWebsite";
import {
  s3_BucketLifecycleRule,
  s3_BucketLifecycleRule_GetTypes,
} from "../types/s3_BucketLifecycleRule";
import {
  s3_BucketCorsRule,
  s3_BucketCorsRule_GetTypes,
} from "../types/s3_BucketCorsRule";
import {
  s3_BucketGrant,
  s3_BucketGrant_GetTypes,
} from "../types/s3_BucketGrant";
import {
  s3_BucketLogging,
  s3_BucketLogging_GetTypes,
} from "../types/s3_BucketLogging";
import {
  s3_BucketReplicationConfiguration,
  s3_BucketReplicationConfiguration_GetTypes,
} from "../types/s3_BucketReplicationConfiguration";
import {
  s3_BucketVersioning,
  s3_BucketVersioning_GetTypes,
} from "../types/s3_BucketVersioning";

export interface BucketArgs {
  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  acl?: string;

  // Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.
  bucket?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  bucketPrefix?: string;

  /*
Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.
*/
  serverSideEncryptionConfiguration?: s3_BucketServerSideEncryptionConfiguration;

  // Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.
  corsRules?: Array<s3_BucketCorsRule>;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  grants?: Array<s3_BucketGrant>;

  // [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
  hostedZoneId?: string;

  /*
Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLoggingV2` instead.
*/
  loggings?: Array<s3_BucketLogging>;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.
See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.
*/
  requestPayer?: string;

  /*
Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are deprecated, and will be removed in a future major version:
*/
  tags?: Map<string, string>;

  /*
Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketReplicationConfig` instead.
*/
  replicationConfiguration?: s3_BucketReplicationConfiguration;

  // Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.
  versioning?: s3_BucketVersioning;

  /*
Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketAccelerateConfigurationV2` instead.
*/
  accelerationStatus?: string;

  // ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
  arn?: string;

  // Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  forceDestroy?: boolean;

  /*
Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLifecycleConfigurationV2` instead.
*/
  lifecycleRules?: Array<s3_BucketLifecycleRule>;

  /*
Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.
The provider wil only perform drift detection if a configuration value is provided.
Use the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.
*/
  objectLockConfiguration?: s3_BucketObjectLockConfiguration;

  /*
Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketPolicy` instead.
*/
  policy?: string;

  // (--Deprecated--) Domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  websiteDomain?: string;

  // (--Deprecated--) Website endpoint, if the bucket is configured with a website. If not, this will be an empty string. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  websiteEndpoint?: string;

  /*
Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
*/
  website?: s3_BucketWebsite;
}
export class Bucket extends DS_Resource {
  /*
Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLoggingV2` instead.
*/
  public loggings?: Array<s3_BucketLogging>;

  // (--Deprecated--) Domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  public websiteDomain?: string;

  /*
Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketAccelerateConfigurationV2` instead.
*/
  public accelerationStatus?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  public bucketPrefix?: string;

  // Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.
  public corsRules?: Array<s3_BucketCorsRule>;

  // Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  public forceDestroy?: boolean;

  /*
Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLifecycleConfigurationV2` instead.
*/
  public lifecycleRules?: Array<s3_BucketLifecycleRule>;

  // AWS region this bucket resides in.
  public region?: string;

  /*
Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketReplicationConfig` instead.
*/
  public replicationConfiguration?: s3_BucketReplicationConfiguration;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.
See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.
*/
  public requestPayer?: string;

  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  public acl?: string;

  // ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
  public arn?: string;

  // The bucket region-specific domain name. The bucket domain name including the region name. Please refer to the [S3 endpoints reference](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region) for format. Note: AWS CloudFront allows specifying an S3 region-specific endpoint when creating an S3 origin. This will prevent redirect issues from CloudFront to the S3 Origin URL. For more information, see the [Virtual Hosted-Style Requests for Other Regions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html#deprecated-global-endpoint) section in the AWS S3 User Guide.
  public bucketRegionalDomainName?: string;

  // [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
  public hostedZoneId?: string;

  /*
Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.
The provider wil only perform drift detection if a configuration value is provided.
Use the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.
*/
  public objectLockConfiguration?: s3_BucketObjectLockConfiguration;

  /*
Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.
*/
  public serverSideEncryptionConfiguration?: s3_BucketServerSideEncryptionConfiguration;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
*/
  public website?: s3_BucketWebsite;

  // (--Deprecated--) Website endpoint, if the bucket is configured with a website. If not, this will be an empty string. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  public websiteEndpoint?: string;

  // Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.
  public bucket?: string;

  // Bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
  public bucketDomainName?: string;

  /*
Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketPolicy` instead.
*/
  public policy?: string;

  // Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.
  public versioning?: s3_BucketVersioning;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  public grants?: Array<s3_BucketGrant>;

  /*
Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are deprecated, and will be removed in a future major version:
*/
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accelerationStatus",
        "Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketAccelerateConfigurationV2` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "arn",
        "ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "website",
        "Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketWebsiteConfigurationV2` instead.",
        () => s3_BucketWebsite_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketPrefix",
        "Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "corsRules",
        "Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.",
        () => s3_BucketCorsRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostedZoneId",
        "[Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loggings",
        "Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketLoggingV2` instead.",
        () => s3_BucketLogging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "grants",
        "An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.",
        () => s3_BucketGrant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "replicationConfiguration",
        "Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketReplicationConfig` instead.",
        () => s3_BucketReplicationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lifecycleRules",
        "Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketLifecycleConfigurationV2` instead.",
        () => s3_BucketLifecycleRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "objectLockConfiguration",
        "Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.\nThe provider wil only perform drift detection if a configuration value is provided.\nUse the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.",
        () => s3_BucketObjectLockConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "websiteDomain",
        "(**Deprecated**) Domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverSideEncryptionConfiguration",
        "Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.",
        () => s3_BucketServerSideEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestPayer",
        "Specifies who should bear the cost of Amazon S3 data transfer.\nCan be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.\nSee [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "versioning",
        "Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.",
        () => s3_BucketVersioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketPolicy` instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following arguments are deprecated, and will be removed in a future major version:",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket *when the bucket is destroyed* so that the bucket can be destroyed without error. These objects are *not* recoverable. This only deletes objects when the bucket is destroyed, *not* when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "websiteEndpoint",
        "(**Deprecated**) Website endpoint, if the bucket is configured with a website. If not, this will be an empty string. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
