import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_ObjectCopyGrant,
  s3_ObjectCopyGrant_GetTypes,
} from "../types/s3_ObjectCopyGrant";

export interface ObjectCopyArgs {
  // Name of the bucket to put the file in.
  bucket?: string;

  // Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
  contentEncoding?: string;

  // Copies the object if its entity tag (ETag) matches the specified tag.
  copyIfMatch?: string;

  // Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
  sourceCustomerKeyMd5?: string;

  // Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).
  websiteRedirect?: string;

  // Specifies the algorithm to use to when encrypting the object (for example, AES256).
  customerAlgorithm?: string;

  // Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
  customerKey?: string;

  // Name of the object once it is in the bucket.
  key?: string;

  // Specifies the AWS KMS Encryption Context to use for object encryption. The value is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
  kmsEncryptionContext?: string;

  // Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).
  metadata?: Map<string, string>;

  // Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. Valid values are `COPY` and `REPLACE`.
  metadataDirective?: string;

  // The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.
  objectLockLegalHoldStatus?: string;

  // Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.
  checksumAlgorithm?: string;

  // Language the content is in e.g., en-US or en-GB.
  contentLanguage?: string;

  // Copies the object if it has been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  copyIfModifiedSince?: string;

  // Copies the object if it hasn't been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  copyIfUnmodifiedSince?: string;

  // Specifies server-side encryption of the object in S3. Valid values are `AES256` and `aws:kms`.
  serverSideEncryption?: string;

  // Standard MIME type describing the format of the object data, e.g., `application/octet-stream`. All Valid MIME Types are valid for this input.
  contentType?: string;

  // Allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.
  forceDestroy?: boolean;

  // Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets (https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the Amazon S3 Developer Guide. If included, the only valid value is `requester`.
  requestPayer?: string;

  // Specifies the desired [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#AmazonS3-CopyObject-request-header-StorageClass) for the object. Defaults to `STANDARD`.
  storageClass?: string;

  // [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Conflicts with `grant`.
  acl?: string;

  // Account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  expectedBucketOwner?: string;

  // Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).
  objectLockRetainUntilDate?: string;

  // Specifies the algorithm to use when decrypting the source object (for example, AES256).
  sourceCustomerAlgorithm?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
  cacheControl?: string;

  // Account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  expectedSourceBucketOwner?: string;

  // Configuration block for header grants. Documented below. Conflicts with `acl`.
  grants?: Array<s3_ObjectCopyGrant>;

  // Specifies the AWS KMS Key ARN to use for object encryption. This value is a fully qualified --ARN-- of the KMS Key. If using `aws.kms.Key`, use the exported `arn` attribute: `kms_key_id = aws_kms_key.foo.arn`
  kmsKeyId?: string;

  // Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  objectLockMode?: string;

  // Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
  sourceCustomerKey?: string;

  //
  bucketKeyEnabled?: boolean;

  // Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
  contentDisposition?: string;

  // Copies the object if its entity tag (ETag) is different than the specified ETag.
  copyIfNoneMatch?: string;

  // Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
  customerKeyMd5?: string;

  // Date and time at which the object is no longer cacheable, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  expires?: string;

  /*
Specifies the source object for the copy operation. You specify the value in one of two formats. For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (`/`). For example, `testbucket/test1.json`. For objects accessed through access points, specify the ARN of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, `arn:aws:s3:us-west-2:9999912999:accesspoint/my-access-point/object/testbucket/test1.json`.

The following arguments are optional:
*/
  source?: string;

  // Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request. Valid values are `COPY` and `REPLACE`.
  taggingDirective?: string;
}
export class ObjectCopy extends DS_Resource {
  // Copies the object if it has been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public copyIfModifiedSince?: string;

  // Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. Valid values are `COPY` and `REPLACE`.
  public metadataDirective?: string;

  // The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.
  public objectLockLegalHoldStatus?: string;

  // Version ID of the newly created copy.
  public versionId?: string;

  // Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).
  public websiteRedirect?: string;

  // Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.
  public cacheControl?: string;

  // Standard MIME type describing the format of the object data, e.g., `application/octet-stream`. All Valid MIME Types are valid for this input.
  public contentType?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Conflicts with `grant`.
  public acl?: string;

  // The base64-encoded, 32-bit CRC32 checksum of the object.
  public checksumCrc32?: string;

  // Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.
  public contentEncoding?: string;

  // Language the content is in e.g., en-US or en-GB.
  public contentLanguage?: string;

  // Copies the object if its entity tag (ETag) is different than the specified ETag.
  public copyIfNoneMatch?: string;

  // Copies the object if it hasn't been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public copyIfUnmodifiedSince?: string;

  // Account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  public expectedSourceBucketOwner?: string;

  // If present, indicates that the requester was successfully charged for the request.
  public requestCharged?: boolean;

  // ARN of the object.
  public arn?: string;

  // The base64-encoded, 256-bit SHA-256 digest of the object.
  public checksumSha256?: string;

  // Configuration block for header grants. Documented below. Conflicts with `acl`.
  public grants?: Array<s3_ObjectCopyGrant>;

  // Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets (https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the Amazon S3 Developer Guide. If included, the only valid value is `requester`.
  public requestPayer?: string;

  // Specifies server-side encryption of the object in S3. Valid values are `AES256` and `aws:kms`.
  public serverSideEncryption?: string;

  // Specifies the desired [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#AmazonS3-CopyObject-request-header-StorageClass) for the object. Defaults to `STANDARD`.
  public storageClass?: string;

  // Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.
  public customerKey?: string;

  // Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
  public customerKeyMd5?: string;

  // Copies the object if its entity tag (ETag) matches the specified tag.
  public copyIfMatch?: string;

  // Specifies the algorithm to use to when encrypting the object (for example, AES256).
  public customerAlgorithm?: string;

  // ETag generated for the object (an MD5 sum of the object content). For plaintext objects or objects encrypted with an AWS-managed key, the hash is an MD5 digest of the object data. For objects encrypted with a KMS key or objects created by either the Multipart Upload or Part Copy operation, the hash is not an MD5 digest, regardless of the method of encryption. More information on possible values can be found on [Common Response Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonResponseHeaders.html).
  public etag?: string;

  // If the object expiration is configured, this attribute will be set.
  public expiration?: string;

  // Returns the date that the object was last modified, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public lastModified?: string;

  // Specifies the algorithm to use when decrypting the source object (for example, AES256).
  public sourceCustomerAlgorithm?: string;

  // Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.
  public checksumAlgorithm?: string;

  // Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.
  public contentDisposition?: string;

  // Date and time at which the object is no longer cacheable, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public expires?: string;

  // Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
  public sourceCustomerKey?: string;

  // Name of the bucket to put the file in.
  public bucket?: string;

  // The base64-encoded, 160-bit SHA-1 digest of the object.
  public checksumSha1?: string;

  // Allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.
  public forceDestroy?: boolean;

  // Name of the object once it is in the bucket.
  public key?: string;

  // Specifies the AWS KMS Encryption Context to use for object encryption. The value is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
  public kmsEncryptionContext?: string;

  // Specifies the AWS KMS Key ARN to use for object encryption. This value is a fully qualified --ARN-- of the KMS Key. If using `aws.kms.Key`, use the exported `arn` attribute: `kms_key_id = aws_kms_key.foo.arn`
  public kmsKeyId?: string;

  /*
Specifies the source object for the copy operation. You specify the value in one of two formats. For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (`/`). For example, `testbucket/test1.json`. For objects accessed through access points, specify the ARN of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, `arn:aws:s3:us-west-2:9999912999:accesspoint/my-access-point/object/testbucket/test1.json`.

The following arguments are optional:
*/
  public source?: string;

  // Version of the copied object in the source bucket.
  public sourceVersionId?: string;

  // The base64-encoded, 32-bit CRC32C checksum of the object.
  public checksumCrc32c?: string;

  // Account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
  public expectedBucketOwner?: string;

  // Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request. Valid values are `COPY` and `REPLACE`.
  public taggingDirective?: string;

  // Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  public objectLockMode?: string;

  // Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).
  public objectLockRetainUntilDate?: string;

  // Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.
  public sourceCustomerKeyMd5?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public bucketKeyEnabled?: boolean;

  // Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).
  public metadata?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "checksumAlgorithm",
        "Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentLanguage",
        "Language the content is in e.g., en-US or en-GB.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverSideEncryption",
        "Specifies server-side encryption of the object in S3. Valid values are `AES256` and `aws:kms`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedSourceBucketOwner",
        "Account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceCustomerKey",
        "Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "copyIfMatch",
        "Copies the object if its entity tag (ETag) matches the specified tag.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "websiteRedirect",
        "Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsEncryptionContext",
        "Specifies the AWS KMS Encryption Context to use for object encryption. The value is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerKeyMd5",
        "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taggingDirective",
        "Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request. Valid values are `COPY` and `REPLACE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket to put the file in.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerAlgorithm",
        "Specifies the algorithm to use to when encrypting the object (for example, AES256).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "expires",
        "Date and time at which the object is no longer cacheable, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentEncoding",
        "Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "copyIfModifiedSince",
        "Copies the object if it has been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Specifies the AWS KMS Key ARN to use for object encryption. This value is a fully qualified **ARN** of the KMS Key. If using `aws.kms.Key`, use the exported `arn` attribute: `kms_key_id = aws_kms_key.foo.arn`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "copyIfNoneMatch",
        "Copies the object if its entity tag (ETag) is different than the specified ETag.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customerKey",
        "Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageClass",
        "Specifies the desired [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#AmazonS3-CopyObject-request-header-StorageClass) for the object. Defaults to `STANDARD`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "metadataDirective",
        "Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. Valid values are `COPY` and `REPLACE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockMode",
        "Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentDisposition",
        "Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceCustomerKeyMd5",
        "Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "copyIfUnmodifiedSince",
        "Copies the object if it hasn't been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceCustomerAlgorithm",
        "Specifies the algorithm to use when decrypting the source object (for example, AES256).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "grants",
        "Configuration block for header grants. Documented below. Conflicts with `acl`.",
        () => s3_ObjectCopyGrant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "Name of the object once it is in the bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockLegalHoldStatus",
        "The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectLockRetainUntilDate",
        "Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "bucketKeyEnabled",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "source",
        "Specifies the source object for the copy operation. You specify the value in one of two formats. For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (`/`). For example, `testbucket/test1.json`. For objects accessed through access points, specify the ARN of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, `arn:aws:s3:us-west-2:9999912999:accesspoint/my-access-point/object/testbucket/test1.json`.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "Standard MIME type describing the format of the object data, e.g., `application/octet-stream`. All Valid MIME Types are valid for this input.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestPayer",
        "Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets (https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the Amazon S3 Developer Guide. If included, the only valid value is `requester`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acl",
        "[Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Conflicts with `grant`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cacheControl",
        "Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
