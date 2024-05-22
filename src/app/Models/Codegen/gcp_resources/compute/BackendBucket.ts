import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_BackendBucketCdnPolicy,
  compute_BackendBucketCdnPolicy_GetTypes,
} from "../types/compute_BackendBucketCdnPolicy";

export interface BackendBucketArgs {
  // If true, enable Cloud CDN for this BackendBucket.
  enableCdn?: boolean;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Cloud Storage bucket name.
  bucketName?: string;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  compressionMode?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  customResponseHeaders?: Array<string>;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  description?: string;

  // The security policy associated with this backend bucket.
  edgeSecurityPolicy?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  cdnPolicy?: compute_BackendBucketCdnPolicy;
}
export class BackendBucket extends Resource {
  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  public description?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  public enableCdn?: boolean;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public compressionMode?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  public cdnPolicy?: compute_BackendBucketCdnPolicy;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  public customResponseHeaders?: Array<string>;

  // The security policy associated with this backend bucket.
  public edgeSecurityPolicy?: string;

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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Cloud Storage bucket name.
  public bucketName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "customResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied responses.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "edgeSecurityPolicy",
        "The security policy associated with this backend bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cdnPolicy",
        "Cloud CDN configuration for this Backend Bucket.\nStructure is documented below.",
        compute_BackendBucketCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCdn",
        "If true, enable Cloud CDN for this BackendBucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "Cloud Storage bucket name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "compressionMode",
        "Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.\nPossible values are: `AUTOMATIC`, `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional textual description of the resource; provided by the\nclient when the resource is created.",
        [],
        false,
        false,
      ),
    ];
  }
}
