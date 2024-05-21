import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  storage_BucketObjectRetention,
  storage_BucketObjectRetention_GetTypes,
} from "../types/storage_BucketObjectRetention";
import {
  storage_BucketObjectCustomerEncryption,
  storage_BucketObjectCustomerEncryption_GetTypes,
} from "../types/storage_BucketObjectCustomerEncryption";

export interface BucketObjectArgs {
  /*
[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
*/
  cacheControl?: string;

  //
  detectMd5hash?: string;

  // The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.
  retention?: storage_BucketObjectRetention;

  // The name of the containing bucket.
  bucket?: string;

  // Data as `string` to be uploaded. Must be defined if `source` is not. --Note--: The `content` field is marked as sensitive.
  content?: string;

  // [Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.
  contentDisposition?: string;

  // [Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  contentType?: string;

  /*
Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)
Structure is documented below.
*/
  customerEncryption?: storage_BucketObjectCustomerEncryption;

  /*
User-provided metadata, in key/value pairs.

One of the following is required:
*/
  metadata?: Map<string, string>;

  /*
A path to the data you want to upload. Must be defined
if `content` is not.

- - -
*/
  source?: string;

  // [Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.
  contentEncoding?: string;

  // [Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.
  contentLanguage?: string;

  // Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  eventBasedHold?: boolean;

  // The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.
  kmsKeyName?: string;

  // The name of the object. If you're interpolating the name of this object, see `output_name` instead.
  name?: string;

  /*
The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.
Supported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default
storage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.
*/
  storageClass?: string;

  // Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.
  temporaryHold?: boolean;
}
export class BucketObject extends Resource {
  /*
User-provided metadata, in key/value pairs.

One of the following is required:
*/
  public metadata?: Map<string, string>;

  /*
A path to the data you want to upload. Must be defined
if `content` is not.

- - -
*/
  public source?: string;

  // Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.
  public temporaryHold?: boolean;

  /*
(Computed) The name of the object. Use this field in interpolations with `gcp.storage.ObjectACL` to recreate
`gcp.storage.ObjectACL` resources when your `gcp.storage.BucketObject` is recreated.
*/
  public outputName?: string;

  // (Computed) A url reference to this object.
  public selfLink?: string;

  /*
[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600
*/
  public cacheControl?: string;

  // [Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.
  public contentEncoding?: string;

  // (Computed) Base 64 CRC32 hash of the uploaded data.
  public crc32c?: string;

  //
  public detectMd5hash?: string;

  // The name of the object. If you're interpolating the name of this object, see `output_name` instead.
  public name?: string;

  // (Computed) A url reference to download this object.
  public mediaLink?: string;

  // [Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.
  public contentDisposition?: string;

  // [Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
  public contentType?: string;

  /*
Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)
Structure is documented below.
*/
  public customerEncryption?: storage_BucketObjectCustomerEncryption;

  // The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.
  public kmsKeyName?: string;

  // (Computed) Base 64 MD5 hash of the uploaded data.
  public md5hash?: string;

  /*
The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.
Supported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default
storage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.
*/
  public storageClass?: string;

  // The name of the containing bucket.
  public bucket?: string;

  // Data as `string` to be uploaded. Must be defined if `source` is not. --Note--: The `content` field is marked as sensitive.
  public content?: string;

  // [Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.
  public contentLanguage?: string;

  // Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).
  public eventBasedHold?: boolean;

  // The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.
  public retention?: storage_BucketObjectRetention;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "cacheControl",
        "[Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)\ndirective to specify caching behavior of object data. If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "A path to the data you want to upload. Must be defined\nif `content` is not.\n\n- - -",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentLanguage",
        "[Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2) of the object data.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "eventBasedHold",
        "Whether an object is under [event-based hold](https://cloud.google.com/storage/docs/object-holds#hold-types). Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the object. If you're interpolating the name of this object, see `output_name` instead.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retention",
        "The [object retention](http://cloud.google.com/storage/docs/object-lock) settings for the object. The retention settings allow an object to be retained until a provided date. Structure is documented below.",
        storage_BucketObjectRetention_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentDisposition",
        "[Content-Disposition](https://tools.ietf.org/html/rfc6266) of the object data.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The resource name of the Cloud KMS key that will be used to [encrypt](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) the object.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageClass",
        "The [StorageClass](https://cloud.google.com/storage/docs/storage-classes) of the new bucket object.\nSupported values include: `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`. If not provided, this defaults to the bucket's default\nstorage class or to a [standard](https://cloud.google.com/storage/docs/storage-classes#standard) class.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "customerEncryption",
        "Enables object encryption with Customer-Supplied Encryption Key (CSEK). Google [documentation about CSEK.](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys)\nStructure is documented below.",
        storage_BucketObjectCustomerEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "temporaryHold",
        "Whether an object is under [temporary hold](https://cloud.google.com/storage/docs/object-holds#hold-types). While this flag is set to true, the object is protected against deletion and overwrites.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectMd5hash",
        "",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the containing bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "Data as `string` to be uploaded. Must be defined if `source` is not. **Note**: The `content` field is marked as sensitive.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentType",
        '[Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "metadata",
        "User-provided metadata, in key/value pairs.\n\nOne of the following is required:",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentEncoding",
        "[Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2) of the object data.",
        [],
        false,
        true,
      ),
    ];
  }
}
