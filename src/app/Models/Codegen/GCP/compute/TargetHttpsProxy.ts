import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetHttpsProxyArgs {
  /*
URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`
*/
  CertificateManagerCertificates?: Array<string>;

  // An optional description of this resource.
  Description?: string;

  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  ProxyBind?: boolean;

  /*
A reference to the UrlMap resource that defines the mapping from URL
to the BackendService.


- - -
*/
  UrlMap?: string;

  /*
Specifies the QUIC override policy for this resource. This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used.
Default value is `NONE`.
Possible values are: `NONE`, `ENABLE`, `DISABLE`.
*/
  QuicOverride?: string;

  /*
A URL referring to a networksecurity.ServerTlsPolicy
resource that describes how the proxy should authenticate inbound
traffic. serverTlsPolicy only applies to a global TargetHttpsProxy
attached to globalForwardingRules with the loadBalancingScheme
set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED.
For details which ServerTlsPolicy resources are accepted with
INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED
loadBalancingScheme consult ServerTlsPolicy documentation.
If left blank, communications are not encrypted.
*/
  ServerTlsPolicy?: string;

  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.
*/
  SslCertificates?: Array<string>;

  /*
A reference to the SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  SslPolicy?: string;

  /*
A reference to the CertificateMap resource uri that identifies a certificate map
associated with the given target proxy. This field can only be set for global target proxies.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.
*/
  CertificateMap?: string;

  /*
Specifies how long to keep a connection open, after completing a response,
while there is no matching traffic (in seconds). If an HTTP keepalive is
not specified, a default value (610 seconds) will be used. For Global
external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
the maximum allowed value is 1200 seconds. For Global external HTTP(S)
load balancer (classic), this option is not available publicly.
*/
  HttpKeepAliveTimeoutSec?: number;

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
}
export class TargetHttpsProxy extends Resource {
  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  public ProxyBind?: boolean;

  /*
A URL referring to a networksecurity.ServerTlsPolicy
resource that describes how the proxy should authenticate inbound
traffic. serverTlsPolicy only applies to a global TargetHttpsProxy
attached to globalForwardingRules with the loadBalancingScheme
set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED.
For details which ServerTlsPolicy resources are accepted with
INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED
loadBalancingScheme consult ServerTlsPolicy documentation.
If left blank, communications are not encrypted.
*/
  public ServerTlsPolicy?: string;

  /*
A reference to the UrlMap resource that defines the mapping from URL
to the BackendService.


- - -
*/
  public UrlMap?: string;

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

  // The URI of the created resource.
  public SelfLink?: string;

  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.
*/
  public SslCertificates?: Array<string>;

  /*
A reference to the SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  public SslPolicy?: string;

  /*
A reference to the CertificateMap resource uri that identifies a certificate map
associated with the given target proxy. This field can only be set for global target proxies.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.
*/
  public CertificateMap?: string;

  // The unique identifier for the resource.
  public ProxyId?: number;

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
Specifies how long to keep a connection open, after completing a response,
while there is no matching traffic (in seconds). If an HTTP keepalive is
not specified, a default value (610 seconds) will be used. For Global
external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
the maximum allowed value is 1200 seconds. For Global external HTTP(S)
load balancer (classic), this option is not available publicly.
*/
  public HttpKeepAliveTimeoutSec?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies the QUIC override policy for this resource. This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used.
Default value is `NONE`.
Possible values are: `NONE`, `ENABLE`, `DISABLE`.
*/
  public QuicOverride?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "UrlMap",
        "A reference to the UrlMap resource that defines the mapping from URL\nto the BackendService.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServerTlsPolicy",
        "A URL referring to a networksecurity.ServerTlsPolicy\nresource that describes how the proxy should authenticate inbound\ntraffic. serverTlsPolicy only applies to a global TargetHttpsProxy\nattached to globalForwardingRules with the loadBalancingScheme\nset to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED.\nFor details which ServerTlsPolicy resources are accepted with\nINTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED\nloadBalancingScheme consult ServerTlsPolicy documentation.\nIf left blank, communications are not encrypted.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SslCertificates",
        "URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.\nCurrently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.\nsslCertificates and certificateManagerCertificates can not be defined together.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SslPolicy",
        "A reference to the SslPolicy resource that will be associated with\nthe TargetHttpsProxy resource. If not set, the TargetHttpsProxy\nresource will not have any SSL policy configured.",
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
        InputType.CheckBox,
        "ProxyBind",
        "This field only applies when the forwarding rule that references\nthis target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "QuicOverride",
        "Specifies the QUIC override policy for this resource. This determines\nwhether the load balancer will attempt to negotiate QUIC with clients\nor not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is\nspecified, Google manages whether QUIC is used.\nDefault value is `NONE`.\nPossible values are: `NONE`, `ENABLE`, `DISABLE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CertificateMap",
        "A reference to the CertificateMap resource uri that identifies a certificate map\nassociated with the given target proxy. This field can only be set for global target proxies.\nAccepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}`.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "HttpKeepAliveTimeoutSec",
        "Specifies how long to keep a connection open, after completing a response,\nwhile there is no matching traffic (in seconds). If an HTTP keepalive is\nnot specified, a default value (610 seconds) will be used. For Global\nexternal HTTP(S) load balancer, the minimum allowed value is 5 seconds and\nthe maximum allowed value is 1200 seconds. For Global external HTTP(S)\nload balancer (classic), this option is not available publicly.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CertificateManagerCertificates",
        "URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.\nCurrently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.\nsslCertificates and certificateManagerCertificates fields can not be defined together.\nAccepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`",
      ),
    ];
  }
}
