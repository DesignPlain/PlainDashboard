import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetSSLProxyArgs {
  /*
A list of SslCertificate resources that are used to authenticate
connections between users and the load balancer. At least one
SSL certificate must be specified.
*/
  SslCertificates?: Array<string>;

  /*
A reference to the SslPolicy resource that will be associated with
the TargetSslProxy resource. If not set, the TargetSslProxy
resource will not have any SSL policy configured.
*/
  SslPolicy?: string;

  /*
A reference to the BackendService resource.


- - -
*/
  BackendService?: string;

  /*
A reference to the CertificateMap resource uri that identifies a certificate map
associated with the given target proxy. This field can only be set for global target proxies.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.
*/
  CertificateMap?: string;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  ProxyHeader?: string;
}
export class TargetSSLProxy extends Resource {
  /*
A reference to the BackendService resource.


- - -
*/
  public BackendService?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  public ProxyHeader?: string;

  /*
A list of SslCertificate resources that are used to authenticate
connections between users and the load balancer. At least one
SSL certificate must be specified.
*/
  public SslCertificates?: Array<string>;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
A reference to the SslPolicy resource that will be associated with
the TargetSslProxy resource. If not set, the TargetSslProxy
resource will not have any SSL policy configured.
*/
  public SslPolicy?: string;

  /*
A reference to the CertificateMap resource uri that identifies a certificate map
associated with the given target proxy. This field can only be set for global target proxies.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.
*/
  public CertificateMap?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The unique identifier for the resource.
  public ProxyId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
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
        InputType.String,
        "ProxyHeader",
        "Specifies the type of proxy header to append before sending data to\nthe backend.\nDefault value is `NONE`.\nPossible values are: `NONE`, `PROXY_V1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SslCertificates",
        "A list of SslCertificate resources that are used to authenticate\nconnections between users and the load balancer. At least one\nSSL certificate must be specified.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SslPolicy",
        "A reference to the SslPolicy resource that will be associated with\nthe TargetSslProxy resource. If not set, the TargetSslProxy\nresource will not have any SSL policy configured.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BackendService",
        "A reference to the BackendService resource.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CertificateMap",
        "A reference to the CertificateMap resource uri that identifies a certificate map\nassociated with the given target proxy. This field can only be set for global target proxies.\nAccepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
    ];
  }
}
