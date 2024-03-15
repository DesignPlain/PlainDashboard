import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BucketObjectRetention } from "../types/BucketObjectRetention";
import { BucketObjectCustomerEncryption } from "../types/BucketObjectCustomerEncryption";

export interface BucketObjectArgs {
  // [Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  ContentType?: string;

  // Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  EventBasedHold?: boolean;

  // The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.
  KmsKeyName?: string;

  // The name of the object. If you're interpolating the name of this object, see `output_name` instead.
  Name?: string;

  // Data as `string` to be uploaded. Must be defined if `source` is not. --Note--: The `content` field is marked as sensitive.
  Content?: string;

  // [Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.
  ContentLanguage?: string;

  // The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.
  Retention?: BucketObjectRetention;

  /*
A path to the data you want to upload. Must be defined
if `content` is not.

- - -
*/
  Source?: string;

  /*
The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.
Supported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default
storage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.
*/
  StorageClass?: string;

  /*
Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)
Structure is documented below.
*/
  CustomerEncryption?: BucketObjectCustomerEncryption;

  /*
User-provided metadata, in key/value pairs.

One of the following is required:
*/
  Metadata?: Map<string, string>;

  // Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.
  TemporaryHold?: boolean;

  // The name of the containing bucket.
  Bucket?: string;

  /*
[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
*/
  CacheControl?: string;

  // [Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.
  ContentDisposition?: string;

  // [Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.
  ContentEncoding?: string;

  //
  DetectMd5hash?: string;
}
export class BucketObject extends Resource {
  // (Computed) Base 64 MD5 hash of the uploaded data.
  public Md5hash?: string;

  /*
The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.
Supported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default
storage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.
*/
  public StorageClass?: string;

  /*
[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
*/
  public CacheControl?: string;

  // [Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.
  public ContentDisposition?: string;

  // [Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.
  public ContentEncoding?: string;

  // [Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  public ContentType?: string;

  // (Computed) A url reference to this object.
  public SelfLink?: string;

  // The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.
  public Retention?: BucketObjectRetention;

  // The name of the containing bucket.
  public Bucket?: string;

  /*
Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)
Structure is documented below.
*/
  public CustomerEncryption?: BucketObjectCustomerEncryption;

  // The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.
  public KmsKeyName?: string;

  // (Computed) A url reference to download this object.
  public MediaLink?: string;

  /*
User-provided metadata, in key/value pairs.

One of the following is required:
*/
  public Metadata?: Map<string, string>;

  // The name of the object. If you're interpolating the name of this object, see `output_name` instead.
  public Name?: string;

  /*
(Computed) The name of the object. Use this field in interpolations with `gcp.storage.ObjectACL` to recreate
`gcp.storage.ObjectACL` resources when your `gcp.storage.BucketObject` is recreated.
*/
  public OutputName?: string;

  /*
A path to the data you want to upload. Must be defined
if `content` is not.

- - -
*/
  public Source?: string;

  // Data as `string` to be uploaded. Must be defined if `source` is not. --Note--: The `content` field is marked as sensitive.
  public Content?: string;

  // [Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.
  public ContentLanguage?: string;

  // (Computed) Base 64 CRC32 hash of the uploaded data.
  public Crc32c?: string;

  //
  public DetectMd5hash?: string;

  // Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  public EventBasedHold?: boolean;

  // Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.
  public TemporaryHold?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CacheControl",
        "[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)\ndirective to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentEncoding",
        "[Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the object. If you're interpolating the name of this object, see `output_name` instead.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Content",
        "Data as `string` to be uploaded. Must be defined if `source` is not. **Note**: The `content` field is marked as sensitive.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentLanguage",
        "[Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "User-provided metadata, in key/value pairs.\n\nOne of the following is required:",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "TemporaryHold",
        "Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentType",
        '[Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EventBasedHold",
        "Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The name of the containing bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContentDisposition",
        "[Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.",
      ),
      new DynamicUIProps(InputType.String, "DetectMd5hash", ""),
      new DynamicUIProps(
        InputType.String,
        "Retention",
        "The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StorageClass",
        "The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.\nSupported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default\nstorage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Source",
        "A path to the data you want to upload. Must be defined\nif `content` is not.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomerEncryption",
        "Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)\nStructure is documented below.",
      ),
    ];
  }
}