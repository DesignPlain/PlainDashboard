import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionBackendServiceCdnPolicy,
  compute_RegionBackendServiceCdnPolicy_GetTypes,
} from '../types/compute_RegionBackendServiceCdnPolicy';
import {
  compute_RegionBackendServiceLogConfig,
  compute_RegionBackendServiceLogConfig_GetTypes,
} from '../types/compute_RegionBackendServiceLogConfig';
import {
  compute_RegionBackendServiceConnectionTrackingPolicy,
  compute_RegionBackendServiceConnectionTrackingPolicy_GetTypes,
} from '../types/compute_RegionBackendServiceConnectionTrackingPolicy';
import {
  compute_RegionBackendServiceBackend,
  compute_RegionBackendServiceBackend_GetTypes,
} from '../types/compute_RegionBackendServiceBackend';
import {
  compute_RegionBackendServiceOutlierDetection,
  compute_RegionBackendServiceOutlierDetection_GetTypes,
} from '../types/compute_RegionBackendServiceOutlierDetection';
import {
  compute_RegionBackendServiceFailoverPolicy,
  compute_RegionBackendServiceFailoverPolicy_GetTypes,
} from '../types/compute_RegionBackendServiceFailoverPolicy';
import {
  compute_RegionBackendServiceSubsetting,
  compute_RegionBackendServiceSubsetting_GetTypes,
} from '../types/compute_RegionBackendServiceSubsetting';
import {
  compute_RegionBackendServiceIap,
  compute_RegionBackendServiceIap_GetTypes,
} from '../types/compute_RegionBackendServiceIap';
import {
  compute_RegionBackendServiceCircuitBreakers,
  compute_RegionBackendServiceCircuitBreakers_GetTypes,
} from '../types/compute_RegionBackendServiceCircuitBreakers';
import {
  compute_RegionBackendServiceConsistentHash,
  compute_RegionBackendServiceConsistentHash_GetTypes,
} from '../types/compute_RegionBackendServiceConsistentHash';

export interface RegionBackendServiceArgs {
  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
This field is applicable only when the `load_balancing_scheme` is set
to INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  outlierDetection?: compute_RegionBackendServiceOutlierDetection;

  /*
The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.
*/
  protocol?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  cdnPolicy?: compute_RegionBackendServiceCdnPolicy;

  /*
Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `INTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  loadBalancingScheme?: string;

  // If true, enable Cloud CDN for this RegionBackendService.
  enableCdn?: boolean;

  /*
Policy for failovers.
Structure is documented below.
*/
  failoverPolicy?: compute_RegionBackendServiceFailoverPolicy;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  localityLbPolicy?: string;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  logConfig?: compute_RegionBackendServiceLogConfig;

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
  name?: string;

  /*
A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
*/
  portName?: string;

  /*
Connection Tracking configuration for this BackendService.
This is available only for Layer 4 Internal Load Balancing and
Network Load Balancing.
Structure is documented below.
*/
  connectionTrackingPolicy?: compute_RegionBackendServiceConnectionTrackingPolicy;

  // An optional description of this resource.
  description?: string;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  connectionDrainingTimeoutSec?: number;

  /*
The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
*/
  healthChecks?: string;

  /*
The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
*/
  network?: string;

  /*
The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
*/
  region?: string;

  // The security policy associated with this backend service.
  securityPolicy?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.
*/
  sessionAffinity?: string;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  affinityCookieTtlSec?: number;

  /*
The set of backends that serve this RegionBackendService.
Structure is documented below.
*/
  backends?: Array<compute_RegionBackendServiceBackend>;

  /*
Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.
Structure is documented below.
*/
  subsetting?: compute_RegionBackendServiceSubsetting;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  iap?: compute_RegionBackendServiceIap;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  timeoutSec?: number;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED
and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  circuitBreakers?: compute_RegionBackendServiceCircuitBreakers;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing.
This field only applies when all of the following are true -
*/
  consistentHash?: compute_RegionBackendServiceConsistentHash;
}
export class RegionBackendService extends DS_Resource {
  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Indicates what kind of load balancing this regional backend service
will be used for. A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `INTERNAL`.
Possible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.
*/
  public loadBalancingScheme?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Connection Tracking configuration for this BackendService.
This is available only for Layer 4 Internal Load Balancing and
Network Load Balancing.
Structure is documented below.
*/
  public connectionTrackingPolicy?: compute_RegionBackendServiceConnectionTrackingPolicy;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  public localityLbPolicy?: string;

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
  public name?: string;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  public timeoutSec?: number;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  public affinityCookieTtlSec?: number;

  /*
Consistent Hash-based load balancing can be used to provide soft session
affinity based on HTTP headers, cookies or other properties. This load balancing
policy is applicable only for HTTP connections. The affinity to a particular
destination host will be lost when one or more hosts are added/removed from the
destination service. This field specifies parameters that control consistent
hashing.
This field only applies when all of the following are true -
*/
  public consistentHash?: compute_RegionBackendServiceConsistentHash;

  // An optional description of this resource.
  public description?: string;

  /*
The Region in which the created backend service should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  public connectionDrainingTimeoutSec?: number;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  public iap?: compute_RegionBackendServiceIap;

  /*
A named port on a backend instance group representing the port for
communication to the backend VMs in that group. Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
*/
  public portName?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  public cdnPolicy?: compute_RegionBackendServiceCdnPolicy;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED
and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  public circuitBreakers?: compute_RegionBackendServiceCircuitBreakers;

  /*
Policy for failovers.
Structure is documented below.
*/
  public failoverPolicy?: compute_RegionBackendServiceFailoverPolicy;

  /*
The set of URLs to HealthCheck resources for health checking
this RegionBackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
*/
  public healthChecks?: string;

  /*
The URL of the network to which this backend service belongs.
This field can only be specified when the load balancing scheme is set to INTERNAL.
*/
  public network?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.
*/
  public sessionAffinity?: string;

  // If true, enable Cloud CDN for this RegionBackendService.
  public enableCdn?: boolean;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  public logConfig?: compute_RegionBackendServiceLogConfig;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
This field is applicable only when the `load_balancing_scheme` is set
to INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.
Structure is documented below.
*/
  public outlierDetection?: compute_RegionBackendServiceOutlierDetection;

  /*
The protocol this RegionBackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.
*/
  public protocol?: string;

  /*
Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.
Structure is documented below.
*/
  public subsetting?: compute_RegionBackendServiceSubsetting;

  /*
The set of backends that serve this RegionBackendService.
Structure is documented below.
*/
  public backends?: Array<compute_RegionBackendServiceBackend>;

  /*
Fingerprint of this resource. A hash of the contents stored in this
object. This field is used in optimistic locking.
*/
  public fingerprint?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The security policy associated with this backend service.
  public securityPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'failoverPolicy',
        'Policy for failovers.\nStructure is documented below.',
        () => compute_RegionBackendServiceFailoverPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'localityLbPolicy',
        'The load balancing algorithm used within the scope of the locality.\nThe possible values are:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logConfig',
        'This field denotes the logging options for the load balancer traffic served by this backend service.\nIf logging is enabled, logs will be exported to Stackdriver.\nStructure is documented below.',
        () => compute_RegionBackendServiceLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'healthChecks',
        'The set of URLs to HealthCheck resources for health checking\nthis RegionBackendService. Currently at most one health\ncheck can be specified.\nA health check must be specified unless the backend service uses an internet\nor serverless NEG as a backend.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'protocol',
        'The protocol this RegionBackendService uses to communicate with backends.\nThe default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer\ntypes and may result in errors if used with the GA API.\nPossible values are: `HTTP`, `HTTPS`, `HTTP2`, `SSL`, `TCP`, `UDP`, `GRPC`, `UNSPECIFIED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableCdn',
        'If true, enable Cloud CDN for this RegionBackendService.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'securityPolicy',
        'The security policy associated with this backend service.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sessionAffinity',
        'Type of session affinity to use. The default is NONE. Session affinity is\nnot applicable if the protocol is UDP.\nPossible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`, `CLIENT_IP_NO_DESTINATION`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'subsetting',
        'Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing and Internal HTTP(S) load balancing.\nStructure is documented below.',
        () => compute_RegionBackendServiceSubsetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cdnPolicy',
        'Cloud CDN configuration for this BackendService.\nStructure is documented below.',
        () => compute_RegionBackendServiceCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'portName',
        'A named port on a backend instance group representing the port for\ncommunication to the backend VMs in that group. Required when the\nloadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED\nand the backends are instance groups. The named port must be defined on each\nbackend instance group. This parameter has no meaning if the backends are NEGs. API sets a\ndefault of "http" if not given.\nMust be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'connectionDrainingTimeoutSec',
        'Time for which instance will be drained (not accept new\nconnections, but still work to finish started).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'network',
        'The URL of the network to which this backend service belongs.\nThis field can only be specified when the load balancing scheme is set to INTERNAL.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The Region in which the created backend service should reside.\nIf it is not provided, the provider region is used.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'backends',
        'The set of backends that serve this RegionBackendService.\nStructure is documented below.',
        () => compute_RegionBackendServiceBackend_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'circuitBreakers',
        'Settings controlling the volume of connections to a backend service. This field\nis applicable only when the `load_balancing_scheme` is set to INTERNAL_MANAGED\nand the `protocol` is set to HTTP, HTTPS, or HTTP2.\nStructure is documented below.',
        () => compute_RegionBackendServiceCircuitBreakers_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'outlierDetection',
        'Settings controlling eviction of unhealthy hosts from the load balancing pool.\nThis field is applicable only when the `load_balancing_scheme` is set\nto INTERNAL_MANAGED and the `protocol` is set to HTTP, HTTPS, or HTTP2.\nStructure is documented below.',
        () => compute_RegionBackendServiceOutlierDetection_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'loadBalancingScheme',
        'Indicates what kind of load balancing this regional backend service\nwill be used for. A backend service created for one type of load\nbalancing cannot be used with the other(s). For more information, refer to\n[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).\nDefault value is `INTERNAL`.\nPossible values are: `EXTERNAL`, `EXTERNAL_MANAGED`, `INTERNAL`, `INTERNAL_MANAGED`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'affinityCookieTtlSec',
        'Lifetime of cookies in seconds if session_affinity is\nGENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts\nonly until the end of the browser session (or equivalent). The\nmaximum allowed value for TTL is one day.\nWhen the load balancing scheme is INTERNAL, this field is not used.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'iap',
        'Settings for enabling Cloud Identity Aware Proxy\nStructure is documented below.',
        () => compute_RegionBackendServiceIap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'timeoutSec',
        'How many seconds to wait for the backend before considering it a\nfailed request. Default is 30 seconds. Valid range is [1, 86400].',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'consistentHash',
        'Consistent Hash-based load balancing can be used to provide soft session\naffinity based on HTTP headers, cookies or other properties. This load balancing\npolicy is applicable only for HTTP connections. The affinity to a particular\ndestination host will be lost when one or more hosts are added/removed from the\ndestination service. This field specifies parameters that control consistent\nhashing.\nThis field only applies when all of the following are true -',
        () => compute_RegionBackendServiceConsistentHash_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'connectionTrackingPolicy',
        'Connection Tracking configuration for this BackendService.\nThis is available only for Layer 4 Internal Load Balancing and\nNetwork Load Balancing.\nStructure is documented below.',
        () => compute_RegionBackendServiceConnectionTrackingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
