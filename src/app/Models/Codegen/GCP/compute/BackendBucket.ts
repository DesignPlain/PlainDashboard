import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_BackendBucketCdnPolicy,
  Compute_BackendBucketCdnPolicy_GetTypes,
} from "../types/Compute_BackendBucketCdnPolicy";

export interface BackendBucketArgs {
  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  CdnPolicy?: Compute_BackendBucketCdnPolicy;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  Description?: string;

  // The security policy associated with this backend bucket.
  EdgeSecurityPolicy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Cloud Storage bucket name.
  BucketName?: string;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  CompressionMode?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  CustomResponseHeaders?: Array<string>;

  // If true, enable Cloud CDN for this BackendBucket.
  EnableCdn?: boolean;

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
  Name?: string;
}
export class BackendBucket extends Resource {
  // Cloud Storage bucket name.
  public BucketName?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  public CdnPolicy?: Compute_BackendBucketCdnPolicy;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public CompressionMode?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  public CustomResponseHeaders?: Array<string>;

  // The security policy associated with this backend bucket.
  public EdgeSecurityPolicy?: string;

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
  public Name?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  public Description?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  public EnableCdn?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "CustomResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied responses.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource; provided by the\nclient when the resource is created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeSecurityPolicy",
        "The security policy associated with this backend bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketName",
        "Cloud Storage bucket name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CompressionMode",
        "Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.\nPossible values are: `AUTOMATIC`, `DISABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CdnPolicy",
        "Cloud CDN configuration for this Backend Bucket.\nStructure is documented below.",
        Compute_BackendBucketCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableCdn",
        "If true, enable Cloud CDN for this BackendBucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
