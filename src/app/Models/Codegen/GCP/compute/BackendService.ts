import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BackendServiceBackend } from "../types/BackendServiceBackend";
import { BackendServiceLocalityLbPolicy } from "../types/BackendServiceLocalityLbPolicy";
import { BackendServiceSecuritySettings } from "../types/BackendServiceSecuritySettings";
import { BackendServiceLogConfig } from "../types/BackendServiceLogConfig";
import { BackendServiceCdnPolicy } from "../types/BackendServiceCdnPolicy";
import { BackendServiceCircuitBreakers } from "../types/BackendServiceCircuitBreakers";
import { BackendServiceOutlierDetection } from "../types/BackendServiceOutlierDetection";
import { BackendServiceIap } from "../types/BackendServiceIap";
import { BackendServiceConsistentHash } from "../types/BackendServiceConsistentHash";

export interface BackendServiceArgs {
  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  TimeoutSec?: number;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  CompressionMode?: string;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing. This field only applies if the load_balancing_scheme is set to
INTERNAL_SELF_MANAGED. This field is only applicable when locality_lb_policy is
set to MAGLEV or RING_HASH.
Structure is documented below.
*/
  ConsistentHash?: BackendServiceConsistentHash;

  /*
Headers that the HTTP/S load balancer should add to proxied
requests.
*/
  CustomRequestHeaders?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  CdnPolicy?: BackendServiceCdnPolicy;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  CircuitBreakers?: BackendServiceCircuitBreakers;

  /*
The set of backends that serve this BackendService.
Structure is documented below.
*/
  Backends?: Array<BackendServiceBackend>;

  /*
The protocol this BackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. --NOTE--: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.
*/
  Protocol?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.
*/
  SessionAffinity?: string;

  /*
A list of locality load balancing policies to be used in order of
preference. Either the policy or the customPolicy field should be set.
Overrides any value set in the localityLbPolicy field.
localityLbPolicies is only supported when the BackendService is referenced
by a URL Map that is referenced by a target gRPC proxy that has the
validateForProxyless field set to true.
Structure is documented below.
*/
  LocalityLbPolicies?: Array<BackendServiceLocalityLbPolicy>;

  // If true, enable Cloud CDN for this BackendService.
  EnableCdn?: boolean;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
Applicable backend service types can be a global backend service with the
loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.
Structure is documented below.
*/
  OutlierDetection?: BackendServiceOutlierDetection;

  /*
Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
*/
  PortName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  ConnectionDrainingTimeoutSec?: number;

  /*
The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
For internal load balancing, a URL to a HealthCheck resource must be specified instead.
*/
  HealthChecks?: string;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  LocalityLbPolicy?: string;

  /*
The security settings that apply to this backend service. This field is applicable to either
a regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and
load_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the
load_balancing_scheme set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  SecuritySettings?: BackendServiceSecuritySettings;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  AffinityCookieTtlSec?: number;

  // The resource URL for the edge security policy associated with this backend service.
  EdgeSecurityPolicy?: string;

  /*
Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.
*/
  LoadBalancingScheme?: string;

  // An optional description of this resource.
  Description?: string;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  Iap?: BackendServiceIap;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  LogConfig?: BackendServiceLogConfig;

  // The security policy associated with this backend service.
  SecurityPolicy?: string;

  /*
Headers that the HTTP/S load balancer should add to proxied
responses.
*/
  CustomResponseHeaders?: Array<string>;
}
export class BackendService extends Resource {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  public Name?: string;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  public LocalityLbPolicy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The security policy associated with this backend service.
  public SecurityPolicy?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.
*/
  public SessionAffinity?: string;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  public Iap?: BackendServiceIap;

  /*
The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
For internal load balancing, a URL to a HealthCheck resource must be specified instead.
*/
  public HealthChecks?: string;

  /*
Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.
*/
  public LoadBalancingScheme?: string;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  public LogConfig?: BackendServiceLogConfig;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  public TimeoutSec?: number;

  // If true, enable Cloud CDN for this BackendService.
  public EnableCdn?: boolean;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  public ConnectionDrainingTimeoutSec?: number;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing. This field only applies if the load_balancing_scheme is set to
INTERNAL_SELF_MANAGED. This field is only applicable when locality_lb_policy is
set to MAGLEV or RING_HASH.
Structure is documented below.
*/
  public ConsistentHash?: BackendServiceConsistentHash;

  /*
Headers that the HTTP/S load balancer should add to proxied
responses.
*/
  public CustomResponseHeaders?: Array<string>;

  /*
Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
*/
  public PortName?: string;

  /*
The security settings that apply to this backend service. This field is applicable to either
a regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and
load_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the
load_balancing_scheme set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  public SecuritySettings?: BackendServiceSecuritySettings;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public CompressionMode?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in this
object. This field is used in optimistic locking.
*/
  public Fingerprint?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  public CdnPolicy?: BackendServiceCdnPolicy;

  // The resource URL for the edge security policy associated with this backend service.
  public EdgeSecurityPolicy?: string;

  /*
A list of locality load balancing policies to be used in order of
preference. Either the policy or the customPolicy field should be set.
Overrides any value set in the localityLbPolicy field.
localityLbPolicies is only supported when the BackendService is referenced
by a URL Map that is referenced by a target gRPC proxy that has the
validateForProxyless field set to true.
Structure is documented below.
*/
  public LocalityLbPolicies?: Array<BackendServiceLocalityLbPolicy>;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
Applicable backend service types can be a global backend service with the
loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.
Structure is documented below.
*/
  public OutlierDetection?: BackendServiceOutlierDetection;

  /*
The set of backends that serve this BackendService.
Structure is documented below.
*/
  public Backends?: Array<BackendServiceBackend>;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  public CircuitBreakers?: BackendServiceCircuitBreakers;

  // An optional description of this resource.
  public Description?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public GeneratedId?: number;

  /*
The protocol this BackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. --NOTE--: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.
*/
  public Protocol?: string;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  public AffinityCookieTtlSec?: number;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Headers that the HTTP/S load balancer should add to proxied
requests.
*/
  public CustomRequestHeaders?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "TimeoutSec",
        "How many seconds to wait for the backend before considering it a\nfailed request. Default is 30 seconds. Valid range is [1, 86400].",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ConnectionDrainingTimeoutSec",
        "Time for which instance will be drained (not accept new\nconnections, but still work to finish started).",
      ),
      new DynamicUIProps(
        InputType.String,
        "HealthChecks",
        "The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource\nfor health checking this BackendService. Currently at most one health\ncheck can be specified.\nA health check must be specified unless the backend service uses an internet\nor serverless NEG as a backend.\nFor internal load balancing, a URL to a HealthCheck resource must be specified instead.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LocalityLbPolicy",
        "The load balancing algorithm used within the scope of the locality.\nThe possible values are:",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecuritySettings",
        "The security settings that apply to this backend service. This field is applicable to either\na regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and\nload_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the\nload_balancing_scheme set to INTERNAL_SELF_MANAGED.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeSecurityPolicy",
        "The resource URL for the edge security policy associated with this backend service.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OutlierDetection",
        "Settings controlling eviction of unhealthy hosts from the load balancing pool.\nApplicable backend service types can be a global backend service with the\nloadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LoadBalancingScheme",
        "Indicates whether the backend service will be used with internal or\nexternal load balancing. A backend service created for one type of\nload balancing cannot be used with the other. For more information, refer to\n[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).\nDefault value is `EXTERNAL`.\nPossible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The security policy associated with this backend service.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CircuitBreakers",
        "Settings controlling the volume of connections to a backend service. This field\nis applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "LocalityLbPolicies",
        "A list of locality load balancing policies to be used in order of\npreference. Either the policy or the customPolicy field should be set.\nOverrides any value set in the localityLbPolicy field.\nlocalityLbPolicies is only supported when the BackendService is referenced\nby a URL Map that is referenced by a target gRPC proxy that has the\nvalidateForProxyless field set to true.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "This field denotes the logging options for the load balancer traffic served by this backend service.\nIf logging is enabled, logs will be exported to Stackdriver.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CustomResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied\nresponses.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CompressionMode",
        "Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.\nPossible values are: `AUTOMATIC`, `DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "AffinityCookieTtlSec",
        "Lifetime of cookies in seconds if session_affinity is\nGENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts\nonly until the end of the browser session (or equivalent). The\nmaximum allowed value for TTL is one day.\nWhen the load balancing scheme is INTERNAL, this field is not used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Iap",
        "Settings for enabling Cloud Identity Aware Proxy\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Backends",
        "The set of backends that serve this BackendService.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SessionAffinity",
        "Type of session affinity to use. The default is NONE. Session affinity is\nnot applicable if the protocol is UDP.\nPossible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConsistentHash",
        "Consistent Hash-based load balancing can be used to provide soft session\naffinity based on HTTP headers, cookies or other properties. This load balancing\npolicy is applicable only for HTTP connections. The affinity to a particular\ndestination host will be lost when one or more hosts are added/removed from the\ndestination service. This field specifies parameters that control consistent\nhashing. This field only applies if the load_balancing_scheme is set to\nINTERNAL_SELF_MANAGED. This field is only applicable when locality_lb_policy is\nset to MAGLEV or RING_HASH.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CustomRequestHeaders",
        "Headers that the HTTP/S load balancer should add to proxied\nrequests.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CdnPolicy",
        "Cloud CDN configuration for this BackendService.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        "The protocol this BackendService uses to communicate with backends.\nThe default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer\ntypes and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,\nthe backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing\nwith TCP/UDP/L3_DEFAULT Forwarding Rule protocol.\nPossible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableCdn",
        "If true, enable Cloud CDN for this BackendService.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PortName",
        "Name of backend port. The same name should appear in the instance\ngroups referenced by this service. Required when the load balancing\nscheme is EXTERNAL.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
