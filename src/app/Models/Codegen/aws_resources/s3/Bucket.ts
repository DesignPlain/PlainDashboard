import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketObjectLockConfiguration,
  s3_BucketObjectLockConfiguration_GetTypes,
} from "../types/s3_BucketObjectLockConfiguration";
import {
  s3_BucketServerSideEncryptionConfiguration,
  s3_BucketServerSideEncryptionConfiguration_GetTypes,
} from "../types/s3_BucketServerSideEncryptionConfiguration";
import {
  s3_BucketGrant,
  s3_BucketGrant_GetTypes,
} from "../types/s3_BucketGrant";
import {
  s3_BucketWebsite,
  s3_BucketWebsite_GetTypes,
} from "../types/s3_BucketWebsite";
import {
  s3_BucketCorsRule,
  s3_BucketCorsRule_GetTypes,
} from "../types/s3_BucketCorsRule";
import {
  s3_BucketLifecycleRule,
  s3_BucketLifecycleRule_GetTypes,
} from "../types/s3_BucketLifecycleRule";
import {
  s3_BucketReplicationConfiguration,
  s3_BucketReplicationConfiguration_GetTypes,
} from "../types/s3_BucketReplicationConfiguration";
import {
  s3_BucketLogging,
  s3_BucketLogging_GetTypes,
} from "../types/s3_BucketLogging";
import {
  s3_BucketVersioning,
  s3_BucketVersioning_GetTypes,
} from "../types/s3_BucketVersioning";

export interface BucketArgs {
  /*
A configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) (documented below)

> --NOTE:-- You cannot use `acceleration_status` in `cn-north-1` or `us-gov-west-1`
*/
  objectLockConfiguration?: s3_BucketObjectLockConfiguration;

  // The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
  websiteDomain?: string;

  // The name of the bucket. If omitted, this provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  bucket?: string;

  // A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
  corsRules?: Array<s3_BucketCorsRule>;

  // A boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket so that the bucket can be destroyed without error. These objects are -not- recoverable.
  forceDestroy?: boolean;

  // The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
  hostedZoneId?: string;

  // A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
  lifecycleRules?: Array<s3_BucketLifecycleRule>;

  // A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
  serverSideEncryptionConfiguration?: s3_BucketServerSideEncryptionConfiguration;

  // Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
  accelerationStatus?: string;

  // A map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
  websiteEndpoint?: string;

  // A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing in a `pulumi preview`. In this case, please make sure you use the verbose/specific version of the policy.
  policy?: string;

  // A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
  replicationConfiguration?: s3_BucketReplicationConfiguration;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
developer guide for more information.
*/
  requestPayer?: string;

  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`.
  acl?: string;

  // The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
  arn?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  bucketPrefix?: string;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl) (documented below). Conflicts with `acl`.
  grants?: Array<s3_BucketGrant>;

  // A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
  loggings?: Array<s3_BucketLogging>;

  // A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
  versioning?: s3_BucketVersioning;

  // A website object (documented below).
  website?: s3_BucketWebsite;
}
export class Bucket extends Resource {
  // The AWS region this bucket resides in.
  public region?: string;

  // A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).
  public replicationConfiguration?: s3_BucketReplicationConfiguration;

  // The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.
  public websiteEndpoint?: string;

  // The name of the bucket. If omitted, this provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  public bucket?: string;

  // Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
  public bucketPrefix?: string;

  // An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl) (documented below). Conflicts with `acl`.
  public grants?: Array<s3_BucketGrant>;

  // The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.
  public hostedZoneId?: string;

  /*
A configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) (documented below)

> --NOTE:-- You cannot use `acceleration_status` in `cn-north-1` or `us-gov-west-1`
*/
  public objectLockConfiguration?: s3_BucketObjectLockConfiguration;

  // A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing in a `pulumi preview`. In this case, please make sure you use the verbose/specific version of the policy.
  public policy?: string;

  // A website object (documented below).
  public website?: s3_BucketWebsite;

  // Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.
  public accelerationStatus?: string;

  // The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`.
  public acl?: string;

  // The bucket region-specific domain name. The bucket domain name including the region name, please refer [here](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for format. Note: The AWS CloudFront allows specifying S3 region-specific endpoint when creating S3 origin, it will prevent [redirect issues](https://forums.aws.amazon.com/thread.jspa?threadID=216814) from CloudFront to S3 Origin URL.
  public bucketRegionalDomainName?: string;

  // A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).
  public lifecycleRules?: Array<s3_BucketLifecycleRule>;

  // A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)
  public serverSideEncryptionConfiguration?: s3_BucketServerSideEncryptionConfiguration;

  // A map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.
  public arn?: string;

  // A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).
  public corsRules?: Array<s3_BucketCorsRule>;

  // A boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket so that the bucket can be destroyed without error. These objects are -not- recoverable.
  public forceDestroy?: boolean;

  // A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).
  public loggings?: Array<s3_BucketLogging>;

  // The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.
  public websiteDomain?: string;

  // The bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.
  public bucketDomainName?: string;

  /*
Specifies who should bear the cost of Amazon S3 data transfer.
Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur
the costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)
developer guide for more information.
*/
  public requestPayer?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)
  public versioning?: s3_BucketVersioning;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "websiteDomain",
        "The domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the bucket. If omitted, this provider will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "A boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket so that the bucket can be destroyed without error. These objects are *not* recoverable.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lifecycleRules",
        "A configuration of [object lifecycle management](http://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) (documented below).",
        s3_BucketLifecycleRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serverSideEncryptionConfiguration",
        "A configuration of [server-side encryption configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) (documented below)",
        s3_BucketServerSideEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the bucket. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "grants",
        "An [ACL policy grant](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#sample-acl) (documented below). Conflicts with `acl`.",
        s3_BucketGrant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "websiteEndpoint",
        "The website endpoint, if the bucket is configured with a website. If not, this will be an empty string.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "A valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), this provider may view the policy as constantly changing in a `pulumi preview`. In this case, please make sure you use the verbose/specific version of the policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "loggings",
        "A settings of [bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/UG/ManagingBucketLogging.html) (documented below).",
        s3_BucketLogging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "website",
        "A website object (documented below).",
        s3_BucketWebsite_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "objectLockConfiguration",
        "A configuration of [S3 object locking](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) (documented below)\n\n> **NOTE:** You cannot use `acceleration_status` in `cn-north-1` or `us-gov-west-1`",
        s3_BucketObjectLockConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestPayer",
        "Specifies who should bear the cost of Amazon S3 data transfer.\nCan be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur\nthe costs of any data transfer. See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html)\ndeveloper guide for more information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "versioning",
        "A state of [versioning](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) (documented below)",
        s3_BucketVersioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "corsRules",
        "A rule of [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) (documented below).",
        s3_BucketCorsRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostedZoneId",
        "The [Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accelerationStatus",
        "Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "replicationConfiguration",
        "A configuration of [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html) (documented below).",
        s3_BucketReplicationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "arn",
        "The ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.",
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
    ];
  }
}
