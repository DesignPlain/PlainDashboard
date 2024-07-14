import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketObjectv2OverrideProvider,
  s3_BucketObjectv2OverrideProvider_GetTypes,
} from "../types/s3_BucketObjectv2OverrideProvider";

export interface BucketObjectv2Args {
  // Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.
  content?: string;

  // Standard MIME type describing the format of the object data, e.g., application/octet-stream. All Valid MIME Types are valid for this input.
  contentType?: string;

  // Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).
  metadata?: Map<string, string>;

  // Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  objectLockMode?: string;

  // Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).
  objectLockRetainUntilDate?: string;

  // Triggers updates like `etag` but useful to address `etag` encryption limitations. (The value is only stored in state and not saved by AWS.)
  sourceHash?: string;

  /*
Target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).

If no content is provided through `source`, `content` or `content_base64`, then the object will be empty.

> --Note:-- The provider ignores all leading `/`s in the object's `key` and treats multiple `/`s in the rest of the object's `key` as a single `/`, so values of `/index.html` and `index.html` correspond to the same S3 object as do `first//second///third//` and `first/second/third/`.
*/
  websiteRedirect?: string;

  // Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.
  bucketKeyEnabled?: boolean;

  // Content encodings that have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
  contentEncoding?: string;

  // Triggers updates when the value changes. This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`, also if an object is larger than 16 MB, the AWS Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest (see `source_hash` instead).
  etag?: string;

  // Whether to allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.
  forceDestroy?: boolean;

  // [Legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.
  objectLockLegalHoldStatus?: string;

  // Path to a file that will be read and uploaded as raw bytes for the object content.
  source?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.
  contentBase64?: string;

  // Presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
  contentDisposition?: string;

  /*
Name of the object once it is in the bucket.

The following arguments are optional:
*/
  key?: string;

  // Override provider-level configuration options. See Override Provider below for more details.
  overrideProvider?: s3_BucketObjectv2OverrideProvider;

  // [Storage Class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#AmazonS3-PutObject-request-header-StorageClass) for the object. Defaults to "`STANDARD`".
  storageClass?: string;

  // [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, and `bucket-owner-full-control`.
  acl?: string;

  // Name of the bucket to put the file in. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified.
  bucket?: string;

  // Caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
  cacheControl?: string;

  // Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.
  checksumAlgorithm?: string;

  // Language the content is in e.g., en-US or en-GB.
  contentLanguage?: string;

  // ARN of the KMS Key to use for object encryption. If the S3 Bucket has server-side encryption enabled, that value will automatically be used. If referencing the `aws.kms.Key` resource, use the `arn` attribute. If referencing the `aws.kms.Alias` data source or resource, use the `target_key_arn` attribute. The provider will only perform drift detection if a configuration value is provided.
  kmsKeyId?: string;

  // Server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".
  serverSideEncryption?: string;
}
export class BucketObjectv2 extends Resource {
  // Triggers updates when the value changes. This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`, also if an object is larger than 16 MB, the AWS Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest (see `source_hash` instead).
  public etag?: string;

  // Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).
  public objectLockRetainUntilDate?: string;

  // Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.
  public bucketKeyEnabled?: boolean;

  // Content encodings that have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
  public contentEncoding?: string;

  // [Storage Class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#AmazonS3-PutObject-request-header-StorageClass) for the object. Defaults to "`STANDARD`".
  public storageClass?: string;

  // [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, and `bucket-owner-full-control`.
  public acl?: string;

  // Override provider-level configuration options. See Override Provider below for more details.
  public overrideProvider?: s3_BucketObjectv2OverrideProvider;

  // Path to a file that will be read and uploaded as raw bytes for the object content.
  public source?: string;

  // Triggers updates like `etag` but useful to address `etag` encryption limitations. (The value is only stored in state and not saved by AWS.)
  public sourceHash?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Language the content is in e.g., en-US or en-GB.
  public contentLanguage?: string;

  // Standard MIME type describing the format of the object data, e.g., application/octet-stream. All Valid MIME Types are valid for this input.
  public contentType?: string;

  // Caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
  public cacheControl?: string;

  // Whether to allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.
  public forceDestroy?: boolean;

  /*
Target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).

If no content is provided through `source`, `content` or `content_base64`, then the object will be empty.

> --Note:-- The provider ignores all leading `/`s in the object's `key` and treats multiple `/`s in the rest of the object's `key` as a single `/`, so values of `/index.html` and `index.html` correspond to the same S3 object as do `first//second///third//` and `first/second/third/`.
*/
  public websiteRedirect?: string;

  // Name of the bucket to put the file in. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified.
  public bucket?: string;

  // Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.
  public checksumAlgorithm?: string;

  // Presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
  public contentDisposition?: string;

  // ARN of the KMS Key to use for object encryption. If the S3 Bucket has server-side encryption enabled, that value will automatically be used. If referencing the `aws.kms.Key` resource, use the `arn` attribute. If referencing the `aws.kms.Alias` data source or resource, use the `target_key_arn` attribute. The provider will only perform drift detection if a configuration value is provided.
  public kmsKeyId?: string;

  // Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).
  public metadata?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.
  public content?: string;

  // Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.
  public contentBase64?: string;

  // [Legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.
  public objectLockLegalHoldStatus?: string;

  // Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  public objectLockMode?: string;

  // Unique version ID value for the object, if bucket versioning is enabled.
  public versionId?: string;

  // The base64-encoded, 32-bit CRC32C checksum of the object.
  public checksumCrc32c?: string;

  // The base64-encoded, 256-bit SHA-256 digest of the object.
  public checksumSha256?: string;

  /*
Name of the object once it is in the bucket.

The following arguments are optional:
*/
  public key?: string;

  // Server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".
  public serverSideEncryption?: string;

  // The base64-encoded, 32-bit CRC32 checksum of the object.
  public checksumCrc32?: string;

  // The base64-encoded, 160-bit SHA-1 digest of the object.
  public checksumSha1?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "Standard MIME type describing the format of the object data, e.g., application/octet-stream. All Valid MIME Types are valid for this input.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "websiteRedirect",
        "Target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).\n\nIf no content is provided through `source`, `content` or `content_base64`, then the object will be empty.\n\n> **Note:** The provider ignores all leading `/`s in the object's `key` and treats multiple `/`s in the rest of the object's `key` as a single `/`, so values of `/index.html` and `index.html` correspond to the same S3 object as do `first//second///third//` and `first/second/third/`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bucketKeyEnabled",
        "Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Whether to allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockLegalHoldStatus",
        "[Legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "Name of the object once it is in the bucket.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ARN of the KMS Key to use for object encryption. If the S3 Bucket has server-side encryption enabled, that value will automatically be used. If referencing the `aws.kms.Key` resource, use the `arn` attribute. If referencing the `aws.kms.Alias` data source or resource, use the `target_key_arn` attribute. The provider will only perform drift detection if a configuration value is provided.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cacheControl",
        "Caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentDisposition",
        "Presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "overrideProvider",
        "Override provider-level configuration options. See Override Provider below for more details.",
        s3_BucketObjectv2OverrideProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "checksumAlgorithm",
        "Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentLanguage",
        "Language the content is in e.g., en-US or en-GB.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "etag",
        'Triggers updates when the value changes. This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`, also if an object is larger than 16 MB, the AWS Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest (see `source_hash` instead).',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageClass",
        '[Storage Class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#AmazonS3-PutObject-request-header-StorageClass) for the object. Defaults to "`STANDARD`".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket to put the file in. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockRetainUntilDate",
        "Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceHash",
        "Triggers updates like `etag` but useful to address `etag` encryption limitations. (The value is only stored in state and not saved by AWS.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentEncoding",
        "Content encodings that have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Path to a file that will be read and uploaded as raw bytes for the object content.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentBase64",
        "Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "[Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, and `bucket-owner-full-control`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverSideEncryption",
        'Server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockMode",
        "Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.",
        [],
        false,
        false,
      ),
    ];
  }
}
