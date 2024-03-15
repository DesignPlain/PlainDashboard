import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BackendBucketCdnPolicy } from "../types/BackendBucketCdnPolicy";

export interface BackendBucketArgs {
  // Headers that the HTTP/S load balancer should add to proxied responses.
  CustomResponseHeaders?: Array<string>;

  // The security policy associated with this backend bucket.
  EdgeSecurityPolicy?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  EnableCdn?: boolean;

  // Cloud Storage bucket name.
  BucketName?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  CdnPolicy?: BackendBucketCdnPolicy;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  CompressionMode?: string;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  Description?: string;

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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class BackendBucket extends Resource {
  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public CompressionMode?: string;

  // If true, enable Cloud CDN for this BackendBucket.
  public EnableCdn?: boolean;

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

  // The URI of the created resource.
  public SelfLink?: string;

  // The security policy associated with this backend bucket.
  public EdgeSecurityPolicy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Cloud Storage bucket name.
  public BucketName?: string;

  /*
Cloud CDN configuration for this Backend Bucket.
Structure is documented below.
*/
  public CdnPolicy?: BackendBucketCdnPolicy;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Headers that the HTTP/S load balancer should add to proxied responses.
  public CustomResponseHeaders?: Array<string>;

  /*
An optional textual description of the resource; provided by the
client when the resource is created.
*/
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CompressionMode",
        "Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.\nPossible values are: `AUTOMATIC`, `DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource; provided by the\nclient when the resource is created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CustomResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied responses.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableCdn",
        "If true, enable Cloud CDN for this BackendBucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CdnPolicy",
        "Cloud CDN configuration for this Backend Bucket.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeSecurityPolicy",
        "The security policy associated with this backend bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketName",
        "Cloud Storage bucket name.",
      ),
    ];
  }
}
