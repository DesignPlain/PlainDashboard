import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketV2ObjectLockConfiguration,
  s3_BucketV2ObjectLockConfiguration_GetTypes,
} from "../types/s3_BucketV2ObjectLockConfiguration";
import {
  s3_BucketV2CorsRule,
  s3_BucketV2CorsRule_GetTypes,
} from "../types/s3_BucketV2CorsRule";
import {
  s3_BucketV2Logging,
  s3_BucketV2Logging_GetTypes,
} from "../types/s3_BucketV2Logging";
import {
  s3_BucketV2Grant,
  s3_BucketV2Grant_GetTypes,
} from "../types/s3_BucketV2Grant";
import {
  s3_BucketV2ReplicationConfiguration,
  s3_BucketV2ReplicationConfiguration_GetTypes,
} from "../types/s3_BucketV2ReplicationConfiguration";
import {
  s3_BucketV2Website,
  s3_BucketV2Website_GetTypes,
} from "../types/s3_BucketV2Website";
import {
  s3_BucketV2Versioning,
  s3_BucketV2Versioning_GetTypes,
} from "../types/s3_BucketV2Versioning";
import {
  s3_BucketV2LifecycleRule,
  s3_BucketV2LifecycleRule_GetTypes,
} from "../types/s3_BucketV2LifecycleRule";
import {
  s3_BucketV2ServerSideEncryptionConfiguration,
  s3_BucketV2ServerSideEncryptionConfiguration_GetTypes,
} from "../types/s3_BucketV2ServerSideEncryptionConfiguration";

export interface BucketV2Args {
  /*
Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketPolicy` instead.
*/
  policy?: string;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.
See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.
*/
  requestPayer?: string;

  /*
Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.
*/
  serverSideEncryptionConfigurations?: Array<s3_BucketV2ServerSideEncryptionConfiguration>;

  // Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.
  bucket?: string;

  // Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.
  corsRules?: Array<s3_BucketV2CorsRule>;

  /*
Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLoggingV2` instead.
*/
  loggings?: Array<s3_BucketV2Logging>;

  /*
Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketAccelerateConfigurationV2` instead.
*/
  accelerationStatus?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  bucketPrefix?: string;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  grants?: Array<s3_BucketV2Grant>;

  /*
Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.
The provider wil only perform drift detection if a configuration value is provided.
Use the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.
*/
  objectLockConfiguration?: s3_BucketV2ObjectLockConfiguration;

  /*
Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketReplicationConfig` instead.
*/
  replicationConfigurations?: Array<s3_BucketV2ReplicationConfiguration>;

  /*
Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are deprecated, and will be removed in a future major version:
*/
  tags?: Map<string, string>;

  /*
Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
*/
  websites?: Array<s3_BucketV2Website>;

  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  acl?: string;

  // Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  forceDestroy?: boolean;

  // Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.
  versionings?: Array<s3_BucketV2Versioning>;

  /*
Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLifecycleConfigurationV2` instead.
*/
  lifecycleRules?: Array<s3_BucketV2LifecycleRule>;

  // Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.
  objectLockEnabled?: boolean;
}
export class BucketV2 extends Resource {
  /*
Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.
*/
  public serverSideEncryptionConfigurations?: Array<s3_BucketV2ServerSideEncryptionConfiguration>;

  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  public acl?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  public bucketPrefix?: string;

  // The bucket region-specific domain name. The bucket domain name including the region name. Please refer to the [S3 endpoints reference](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region) for format. Note: AWS CloudFront allows specifying an S3 region-specific endpoint when creating an S3 origin. This will prevent redirect issues from CloudFront to the S3 Origin URL. For more information, see the [Virtual Hosted-Style Requests for Other Regions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html#deprecated-global-endpoint) section in the AWS S3 User Guide.
  public bucketRegionalDomainName?: string;

  /*
Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLifecycleConfigurationV2` instead.
*/
  public lifecycleRules?: Array<s3_BucketV2LifecycleRule>;

  /*
Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketPolicy` instead.
*/
  public policy?: string;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.
See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.
The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.
*/
  public requestPayer?: string;

  /*
Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketAccelerateConfigurationV2` instead.
*/
  public accelerationStatus?: string;

  // ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
  public arn?: string;

  // Bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
  public bucketDomainName?: string;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.
  public grants?: Array<s3_BucketV2Grant>;

  /*
Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
*/
  public websites?: Array<s3_BucketV2Website>;

  // AWS region this bucket resides in.
  public region?: string;

  // Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.
  public versionings?: Array<s3_BucketV2Versioning>;

  // Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.
  public bucket?: string;

  // Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket -when the bucket is destroyed- so that the bucket can be destroyed without error. These objects are -not- recoverable. This only deletes objects when the bucket is destroyed, -not- when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.
  public forceDestroy?: boolean;

  // [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
  public hostedZoneId?: string;

  /*
Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketLoggingV2` instead.
*/
  public loggings?: Array<s3_BucketV2Logging>;

  /*
Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.
The provider wil only perform drift detection if a configuration value is provided.
Use the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.
*/
  public objectLockConfiguration?: s3_BucketV2ObjectLockConfiguration;

  // Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.
  public objectLockEnabled?: boolean;

  // (--Deprecated--) Website endpoint, if the bucket is configured with a website. If not, this will be an empty string. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  public websiteEndpoint?: string;

  // Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.
  public corsRules?: Array<s3_BucketV2CorsRule>;

  /*
Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.
Use the resource `aws.s3.BucketReplicationConfig` instead.
*/
  public replicationConfigurations?: Array<s3_BucketV2ReplicationConfiguration>;

  /*
Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are deprecated, and will be removed in a future major version:
*/
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // (--Deprecated--) Domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records. Use the resource `aws.s3.BucketWebsiteConfigurationV2` instead.
  public websiteDomain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "versionings",
        "Configuration of the [S3 bucket versioning state](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). See Versioning below for details. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketVersioningV2` instead.",
        s3_BucketV2Versioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "serverSideEncryptionConfigurations",
        "Configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html). See Server Side Encryption Configuration below for details.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketServerSideEncryptionConfigurationV2` instead.",
        s3_BucketV2ServerSideEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket. If omitted, the provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html). The name must not be in the format `[bucket_name]--[azid]--x-s3`. Use the `aws.s3.DirectoryBucket` resource to manage S3 Express buckets.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "corsRules",
        "Rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html). See CORS rule below for details. This provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketCorsConfigurationV2` instead.",
        s3_BucketV2CorsRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "objectLockConfiguration",
        "Configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). See Object Lock Configuration below for details.\nThe provider wil only perform drift detection if a configuration value is provided.\nUse the `object_lock_enabled` parameter and the resource `aws.s3.BucketObjectLockConfigurationV2` instead.",
        s3_BucketV2ObjectLockConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestPayer",
        "Specifies who should bear the cost of Amazon S3 data transfer.\nCan be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.\nSee [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketRequestPaymentConfigurationV2` instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loggings",
        "Configuration of [S3 bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) parameters. See Logging below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketLoggingV2` instead.",
        s3_BucketV2Logging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accelerationStatus",
        "Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. This provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketAccelerateConfigurationV2` instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketPrefix",
        "Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "replicationConfigurations",
        "Configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html). See Replication Configuration below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketReplicationConfig` instead.",
        s3_BucketV2ReplicationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket *when the bucket is destroyed* so that the bucket can be destroyed without error. These objects are *not* recoverable. This only deletes objects when the bucket is destroyed, *not* when setting this parameter to `true`. Once this parameter is set to `true`, there must be a successful `pulumi up` run before a destroy is required to update this value in the resource state. Without a successful `pulumi up` after this parameter is set, this flag will have no effect. If setting this field in the same operation that would require replacing the bucket or destroying the bucket, this flag will not work. Additionally when importing a bucket, a successful `pulumi up` is required to set this value in state before it will take effect on a destroy operation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lifecycleRules",
        "Configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html). See Lifecycle Rule below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketLifecycleConfigurationV2` instead.",
        s3_BucketV2LifecycleRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "objectLockEnabled",
        "Indicates whether this bucket has an Object Lock configuration enabled. Valid values are `true` or `false`. This argument is not supported in all regions or partitions.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with this provider, see the AWS IAM Policy Document Guide.\nThe provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketPolicy` instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "grants",
        "An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl). See Grant below for details. Conflicts with `acl`. The provider will only perform drift detection if a configuration value is provided. Use the resource `aws.s3.BucketAclV2` instead.",
        s3_BucketV2Grant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following arguments are deprecated, and will be removed in a future major version:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "websites",
        "Configuration of the [S3 bucket website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html). See Website below for details. The provider will only perform drift detection if a configuration value is provided.\nUse the resource `aws.s3.BucketWebsiteConfigurationV2` instead.",
        s3_BucketV2Website_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
