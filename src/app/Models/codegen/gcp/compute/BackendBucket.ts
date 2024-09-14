import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_BackendBucketCdnPolicy,
  compute_BackendBucketCdnPolicy_GetTypes,
} from "../types/compute_BackendBucketCdnPolicy";

export interface BackendBucketArgs {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  cdnPolicy?: compute_BackendBucketCdnPolicy;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  compressionMode?: string;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  description?: string;

  // The security policy associated with this backend bucket.
  edgeSecurityPolicy?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  enableCdn?: boolean;

  // Cloud Storage bucket name.
  bucketName?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  customResponseHeaders?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class BackendBucket extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  public cdnPolicy?: compute_BackendBucketCdnPolicy;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public compressionMode?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  public customResponseHeaders?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  public enableCdn?: boolean;

  // The URI of the created resource.
  public selfLink?: string;

  // Cloud Storage bucket name.
  public bucketName?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  public description?: string;

  // The security policy associated with this backend bucket.
  public edgeSecurityPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "compressionMode",
        "Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.\nPossible values are: `AUTOMATIC`, `DISABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "Cloud Storage bucket name.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied responses.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cdnPolicy",
        "Cloud CDN configuration for this Backend Bucket.\nStructure is documented below.",
        () => compute_BackendBucketCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional textual description of the resource; provided by the\nclient when the resource is created.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "edgeSecurityPolicy",
        "The security policy associated with this backend bucket.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCdn",
        "If true, enable Cloud CDN for this BackendBucket.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
