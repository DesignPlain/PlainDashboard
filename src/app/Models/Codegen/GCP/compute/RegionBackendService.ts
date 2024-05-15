import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionBackendServiceConsistentHash,
  Compute_RegionBackendServiceConsistentHash_GetTypes,
} from "../types/Compute_RegionBackendServiceConsistentHash";
import {
  Compute_RegionBackendServiceFailoverPolicy,
  Compute_RegionBackendServiceFailoverPolicy_GetTypes,
} from "../types/Compute_RegionBackendServiceFailoverPolicy";
import {
  Compute_RegionBackendServiceIap,
  Compute_RegionBackendServiceIap_GetTypes,
} from "../types/Compute_RegionBackendServiceIap";
import {
  Compute_RegionBackendServiceOutlierDetection,
  Compute_RegionBackendServiceOutlierDetection_GetTypes,
} from "../types/Compute_RegionBackendServiceOutlierDetection";
import {
  Compute_RegionBackendServiceLogConfig,
  Compute_RegionBackendServiceLogConfig_GetTypes,
} from "../types/Compute_RegionBackendServiceLogConfig";
import {
  Compute_RegionBackendServiceSubsetting,
  Compute_RegionBackendServiceSubsetting_GetTypes,
} from "../types/Compute_RegionBackendServiceSubsetting";
import {
  Compute_RegionBackendServiceCdnPolicy,
  Compute_RegionBackendServiceCdnPolicy_GetTypes,
} from "../types/Compute_RegionBackendServiceCdnPolicy";
import {
  Compute_RegionBackendServiceConnectionTrackingPolicy,
  Compute_RegionBackendServiceConnectionTrackingPolicy_GetTypes,
} from "../types/Compute_RegionBackendServiceConnectionTrackingPolicy";
import {
  Compute_RegionBackendServiceBackend,
  Compute_RegionBackendServiceBackend_GetTypes,
} from "../types/Compute_RegionBackendServiceBackend";
import {
  Compute_RegionBackendServiceCircuitBreakers,
  Compute_RegionBackendServiceCircuitBreakers_GetTypes,
} from "../types/Compute_RegionBackendServiceCircuitBreakers";

export interface RegionBackendServiceArgs {
  /*
The set of backends that serve this RegionBackendService.
Structure is documented below.
*/
  Backends?: Array<Compute_RegionBackendServiceBackend>;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED
and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  CircuitBreakers?: Compute_RegionBackendServiceCircuitBreakers;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  ConnectionDrainingTimeoutSec?: number;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  LocalityLbPolicy?: string;

  /*
Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.
Structure is documented below.
*/
  Subsetting?: Compute_RegionBackendServiceSubsetting;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  CdnPolicy?: Compute_RegionBackendServiceCdnPolicy;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing.
This field only applies when all of the following are true -
*/
  ConsistentHash?: Compute_RegionBackendServiceConsistentHash;

  /*
Policy for failovers.
Structure is documented below.
*/
  FailoverPolicy?: Compute_RegionBackendServiceFailoverPolicy;

  /*
The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
*/
  HealthChecks?: string;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  Iap?: Compute_RegionBackendServiceIap;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
This field is applicable only when the `load_balancing_scheme` is set
to INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  OutlierDetection?: Compute_RegionBackendServiceOutlierDetection;

  // The security policy associated with this backend service.
  SecurityPolicy?: string;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  AffinityCookieTtlSec?: number;

  /*
Connection Tracking configuration for this BackendService.
This is available only for Layer 4 Internal Load Balancing and
Network Load Balancing.
Structure is documented below.
*/
  ConnectionTrackingPolicy?: Compute_RegionBackendServiceConnectionTrackingPolicy;

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


- - -
*/
  Name?: string;

  /*
The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
*/
  Network?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.
*/
  SessionAffinity?: string;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  TimeoutSec?: number;

  // If true, enable Cloud CDN for this RegionBackendService.
  EnableCdn?: boolean;

  /*
Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `INTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  LoadBalancingScheme?: string;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  LogConfig?: Compute_RegionBackendServiceLogConfig;

  /*
A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
*/
  PortName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.
*/
  Protocol?: string;

  /*
The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;
}
export class RegionBackendService extends Resource {
  /*
Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `INTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  public LoadBalancingScheme?: string;

  /*
The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.
*/
  public Protocol?: string;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  public TimeoutSec?: number;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  public Iap?: Compute_RegionBackendServiceIap;

  /*
The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
*/
  public Network?: string;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  public AffinityCookieTtlSec?: number;

  /*
Connection Tracking configuration for this BackendService.
This is available only for Layer 4 Internal Load Balancing and
Network Load Balancing.
Structure is documented below.
*/
  public ConnectionTrackingPolicy?: Compute_RegionBackendServiceConnectionTrackingPolicy;

  /*
The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
*/
  public HealthChecks?: string;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  public LocalityLbPolicy?: string;

  /*
The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED
and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  public CircuitBreakers?: Compute_RegionBackendServiceCircuitBreakers;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.
Structure is documented below.
*/
  public Subsetting?: Compute_RegionBackendServiceSubsetting;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  public CdnPolicy?: Compute_RegionBackendServiceCdnPolicy;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  public ConnectionDrainingTimeoutSec?: number;

  // If true, enable Cloud CDN for this RegionBackendService.
  public EnableCdn?: boolean;

  // The security policy associated with this backend service.
  public SecurityPolicy?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The set of backends that serve this RegionBackendService.
Structure is documented below.
*/
  public Backends?: Array<Compute_RegionBackendServiceBackend>;

  /*
Fingerprint of this resource. A hash of the contents stored in this
object. This field is used in optimistic locking.
*/
  public Fingerprint?: string;

  /*
A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
*/
  public PortName?: string;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing.
This field only applies when all of the following are true -
*/
  public ConsistentHash?: Compute_RegionBackendServiceConsistentHash;

  /*
Policy for failovers.
Structure is documented below.
*/
  public FailoverPolicy?: Compute_RegionBackendServiceFailoverPolicy;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.
*/
  public SessionAffinity?: string;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  public LogConfig?: Compute_RegionBackendServiceLogConfig;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
This field is applicable only when the `load_balancing_scheme` is set
to INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  public OutlierDetection?: Compute_RegionBackendServiceOutlierDetection;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "LocalityLbPolicy",
        "The load balancing algorithm used within the scope of the locality.\nThe possible values are:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CdnPolicy",
        "Cloud CDN configuration for this BackendService.\nStructure is documented below.",
        Compute_RegionBackendServiceCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LoadBalancingScheme",
        "Indicates what kind of load balancing this regional backend service\nwill be used for. A backend service created for one type of load\nbalancing cannot be used with the other(s). For more information, refer to\n[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).\nDefault value is `INTERNAL`.\nPossible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableCdn",
        "If true, enable Cloud CDN for this RegionBackendService.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Backends",
        "The set of backends that serve this RegionBackendService.\nStructure is documented below.",
        Compute_RegionBackendServiceBackend_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Subsetting",
        "Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.\nStructure is documented below.",
        Compute_RegionBackendServiceSubsetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "FailoverPolicy",
        "Policy for failovers.\nStructure is documented below.",
        Compute_RegionBackendServiceFailoverPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "HealthChecks",
        "The set of URLs to HealthCheck resources for health checking\nthis RegionBackendService. Currently at most one health\ncheck can be specified.\nA health check must be specified unless the backend service uses an internet\nor serverless NEG as a backend.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Iap",
        "Settings for enabling Cloud Identity Aware Proxy\nStructure is documented below.",
        Compute_RegionBackendServiceIap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "OutlierDetection",
        "Settings controlling eviction of unhealthy hosts from the load balancing pool.\nThis field is applicable only when the `load_balancing_scheme` is set\nto INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.\nStructure is documented below.",
        Compute_RegionBackendServiceOutlierDetection_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The security policy associated with this backend service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "This field denotes the logging options for the load balancer traffic served by this backend service.\nIf logging is enabled, logs will be exported to Stackdriver.\nStructure is documented below.",
        Compute_RegionBackendServiceLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        "The protocol this RegionBackendService uses to communicate with backends.\nThe default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer\ntypes and may result in errors if used with the GA API.\nPossible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created backend service should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ConnectionDrainingTimeoutSec",
        "Time for which instance will be drained (not accept new\nconnections, but still work to finish started).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ConnectionTrackingPolicy",
        "Connection Tracking configuration for this BackendService.\nThis is available only for Layer 4 Internal Load Balancing and\nNetwork Load Balancing.\nStructure is documented below.",
        Compute_RegionBackendServiceConnectionTrackingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SessionAffinity",
        "Type of session affinity to use. The default is NONE. Session affinity is\nnot applicable if the protocol is UDP.\nPossible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TimeoutSec",
        "How many seconds to wait for the backend before considering it a\nfailed request. Default is 30 seconds. Valid range is [1, 86400].",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PortName",
        'A named port on a backend instance group representing the port for\ncommunication to the backend VMs in that group. Required when the\nloadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED\nand the backends are instance groups. The named port must be defined on each\nbackend instance group. This parameter has no meaning if the backends are NEGs. API sets a\ndefault of "http" if not given.\nMust be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).',
        [],
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
        InputType.Object,
        "CircuitBreakers",
        "Settings controlling the volume of connections to a backend service. This field\nis applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED\nand the `protocol` is set to HTTP, HTTPS, or HTTP2.\nStructure is documented below.",
        Compute_RegionBackendServiceCircuitBreakers_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ConsistentHash",
        "Consistent Hash-based load balancing can be used to provide soft session\naffinity based on HTTP headers, cookies or other properties. This load balancing\npolicy is applicable only for HTTP connections. The affinity to a particular\ndestination host will be lost when one or more hosts are added/removed from the\ndestination service. This field specifies parameters that control consistent\nhashing.\nThis field only applies when all of the following are true -",
        Compute_RegionBackendServiceConsistentHash_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "AffinityCookieTtlSec",
        "Lifetime of cookies in seconds if session_affinity is\nGENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts\nonly until the end of the browser session (or equivalent). The\nmaximum allowed value for TTL is one day.\nWhen the load balancing scheme is INTERNAL, this field is not used.",
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
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The URL of the network to which this backend service belongs.\nThis field can only be specified when the load balancing scheme is set to INTERNAL.",
        [],
        false,
        false,
      ),
    ];
  }
}
