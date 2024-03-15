import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RegionTargetHttpsProxyArgs {
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
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
*/
  SslCertificates?: Array<string>;

  /*
A reference to the Region SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  SslPolicy?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the RegionBackendService.


- - -
*/
  UrlMap?: string;

  /*
URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`
*/
  CertificateManagerCertificates?: Array<string>;

  // An optional description of this resource.
  Description?: string;
}
export class RegionTargetHttpsProxy extends Resource {
  // The unique identifier for the resource.
  public ProxyId?: number;

  /*
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the RegionBackendService.


- - -
*/
  public UrlMap?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
*/
  public SslCertificates?: Array<string>;

  /*
A reference to the Region SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  public SslPolicy?: string;

  /*
URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`
*/
  public CertificateManagerCertificates?: Array<string>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created target https proxy should reside.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SslCertificates",
        "URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.\nAt least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.\nsslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SslPolicy",
        "A reference to the Region SslPolicy resource that will be associated with\nthe TargetHttpsProxy resource. If not set, the TargetHttpsProxy\nresource will not have any SSL policy configured.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UrlMap",
        "A reference to the RegionUrlMap resource that defines the mapping from URL\nto the RegionBackendService.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CertificateManagerCertificates",
        "URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.\nCurrently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.\nsslCertificates and certificateManagerCertificates fields can not be defined together.\nAccepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`",
      ),
    ];
  }
}