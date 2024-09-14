import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_BackendServiceSecuritySettings,
  compute_BackendServiceSecuritySettings_GetTypes,
} from "../types/compute_BackendServiceSecuritySettings";
import {
  compute_BackendServiceOutlierDetection,
  compute_BackendServiceOutlierDetection_GetTypes,
} from "../types/compute_BackendServiceOutlierDetection";
import {
  compute_BackendServiceConsistentHash,
  compute_BackendServiceConsistentHash_GetTypes,
} from "../types/compute_BackendServiceConsistentHash";
import {
  compute_BackendServiceLogConfig,
  compute_BackendServiceLogConfig_GetTypes,
} from "../types/compute_BackendServiceLogConfig";
import {
  compute_BackendServiceCircuitBreakers,
  compute_BackendServiceCircuitBreakers_GetTypes,
} from "../types/compute_BackendServiceCircuitBreakers";
import {
  compute_BackendServiceIap,
  compute_BackendServiceIap_GetTypes,
} from "../types/compute_BackendServiceIap";
import {
  compute_BackendServiceCdnPolicy,
  compute_BackendServiceCdnPolicy_GetTypes,
} from "../types/compute_BackendServiceCdnPolicy";
import {
  compute_BackendServiceBackend,
  compute_BackendServiceBackend_GetTypes,
} from "../types/compute_BackendServiceBackend";
import {
  compute_BackendServiceLocalityLbPolicy,
  compute_BackendServiceLocalityLbPolicy_GetTypes,
} from "../types/compute_BackendServiceLocalityLbPolicy";

export interface BackendServiceArgs {
  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  circuitBreakers?: compute_BackendServiceCircuitBreakers;

  /*
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  compressionMode?: string;

  // An optional description of this resource.
  description?: string;

  // The resource URL for the edge security policy associated with this backend service.
  edgeSecurityPolicy?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.
*/
  sessionAffinity?: string;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  iap?: compute_BackendServiceIap;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  localityLbPolicy?: string;

  /*
The security settings that apply to this backend service. This field is applicable to either
a regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and
load_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the
load_balancing_scheme set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  securitySettings?: compute_BackendServiceSecuritySettings;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  connectionDrainingTimeoutSec?: number;

  /*
The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
For internal load balancing, a URL to a HealthCheck resource must be specified instead.
*/
  healthChecks?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  cdnPolicy?: compute_BackendServiceCdnPolicy;

  /*
Headers that the HTTP/S load balancer should add to proxied
responses.
*/
  customResponseHeaders?: Array<string>;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
Applicable backend service types can be a global backend service with the
loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.
Structure is documented below.
*/
  outlierDetection?: compute_BackendServiceOutlierDetection;

  /*
Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
*/
  portName?: string;

  /*
The set of backends that serve this BackendService.
Structure is documented below.
*/
  backends?: Array<compute_BackendServiceBackend>;

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
  consistentHash?: compute_BackendServiceConsistentHash;

  /*
Headers that the HTTP/S load balancer should add to proxied
requests.
*/
  customRequestHeaders?: Array<string>;

  /*
Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.
*/
  loadBalancingScheme?: string;

  /*
A list of locality load balancing policies to be used in order of
preference. Either the policy or the customPolicy field should be set.
Overrides any value set in the localityLbPolicy field.
localityLbPolicies is only supported when the BackendService is referenced
by a URL Map that is referenced by a target gRPC proxy that has the
validateForProxyless field set to true.
Structure is documented below.
*/
  localityLbPolicies?: Array<compute_BackendServiceLocalityLbPolicy>;

  /*
Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.
When the load balancing scheme is INTERNAL, this field is not used.
*/
  affinityCookieTtlSec?: number;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  logConfig?: compute_BackendServiceLogConfig;

  // The security policy associated with this backend service.
  securityPolicy?: string;

  // If true, enable Cloud CDN for this BackendService.
  enableCdn?: boolean;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The protocol this BackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. --NOTE--: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.
*/
  protocol?: string;

  /*
How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
*/
  timeoutSec?: number;
}
export class BackendService extends DS_Resource {
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
  public consistentHash?: compute_BackendServiceConsistentHash;

  /*
Headers that the HTTP/S load balancer should add to proxied
responses.
*/
  public customResponseHeaders?: Array<string>;

  /*
Settings for enabling Cloud Identity Aware Proxy
Structure is documented below.
*/
  public iap?: compute_BackendServiceIap;

  /*
The load balancing algorithm used within the scope of the locality.
The possible values are:
*/
  public localityLbPolicy?: string;

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
Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
Possible values are: `AUTOMATIC`, `DISABLED`.
*/
  public compressionMode?: string;

  // The resource URL for the edge security policy associated with this backend service.
  public edgeSecurityPolicy?: string;

  /*
This field denotes the logging options for the load balancer traffic served by this backend service.
If logging is enabled, logs will be exported to Stackdriver.
Structure is documented below.
*/
  public logConfig?: compute_BackendServiceLogConfig;

  /*
Settings controlling eviction of unhealthy hosts from the load balancing pool.
Applicable backend service types can be a global backend service with the
loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.
Structure is documented below.
*/
  public outlierDetection?: compute_BackendServiceOutlierDetection;

  /*
Fingerprint of this resource. A hash of the contents stored in this
object. This field is used in optimistic locking.
*/
  public fingerprint?: string;

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
The security settings that apply to this backend service. This field is applicable to either
a regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and
load_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the
load_balancing_scheme set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  public securitySettings?: compute_BackendServiceSecuritySettings;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Headers that the HTTP/S load balancer should add to proxied
requests.
*/
  public customRequestHeaders?: Array<string>;

  // The unique identifier for the resource. This identifier is defined by the server.
  public generatedId?: number;

  /*
The protocol this BackendService uses to communicate with backends.
The default is HTTP. --NOTE--: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. --NOTE--: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol.
Possible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.
*/
  public protocol?: string;

  /*
The set of backends that serve this BackendService.
Structure is documented below.
*/
  public backends?: Array<compute_BackendServiceBackend>;

  /*
Time for which instance will be drained (not accept new
connections, but still work to finish started).
*/
  public connectionDrainingTimeoutSec?: number;

  // An optional description of this resource.
  public description?: string;

  // If true, enable Cloud CDN for this BackendService.
  public enableCdn?: boolean;

  /*
The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.
A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.
For internal load balancing, a URL to a HealthCheck resource must be specified instead.
*/
  public healthChecks?: string;

  /*
Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).
Default value is `EXTERNAL`.
Possible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.
*/
  public loadBalancingScheme?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The security policy associated with this backend service.
  public securityPolicy?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
*/
  public portName?: string;

  /*
Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP.
Possible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.
*/
  public sessionAffinity?: string;

  /*
Cloud CDN configuration for this BackendService.
Structure is documented below.
*/
  public cdnPolicy?: compute_BackendServiceCdnPolicy;

  /*
Settings controlling the volume of connections to a backend service. This field
is applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.
Structure is documented below.
*/
  public circuitBreakers?: compute_BackendServiceCircuitBreakers;

  /*
A list of locality load balancing policies to be used in order of
preference. Either the policy or the customPolicy field should be set.
Overrides any value set in the localityLbPolicy field.
localityLbPolicies is only supported when the BackendService is referenced
by a URL Map that is referenced by a target gRPC proxy that has the
validateForProxyless field set to true.
Structure is documented below.
*/
  public localityLbPolicies?: Array<compute_BackendServiceLocalityLbPolicy>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cdnPolicy",
        "Cloud CDN configuration for this BackendService.\nStructure is documented below.",
        () => compute_BackendServiceCdnPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outlierDetection",
        "Settings controlling eviction of unhealthy hosts from the load balancing pool.\nApplicable backend service types can be a global backend service with the\nloadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL_MANAGED.\nStructure is documented below.",
        () => compute_BackendServiceOutlierDetection_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "loadBalancingScheme",
        "Indicates whether the backend service will be used with internal or\nexternal load balancing. A backend service created for one type of\nload balancing cannot be used with the other. For more information, refer to\n[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service).\nDefault value is `EXTERNAL`.\nPossible values are: `EXTERNAL`, `INTERNAL_SELF_MANAGED`, `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCdn",
        "If true, enable Cloud CDN for this BackendService.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "edgeSecurityPolicy",
        "The resource URL for the edge security policy associated with this backend service.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "iap",
        "Settings for enabling Cloud Identity Aware Proxy\nStructure is documented below.",
        () => compute_BackendServiceIap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "healthChecks",
        "The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource\nfor health checking this BackendService. Currently at most one health\ncheck can be specified.\nA health check must be specified unless the backend service uses an internet\nor serverless NEG as a backend.\nFor internal load balancing, a URL to a HealthCheck resource must be specified instead.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "connectionDrainingTimeoutSec",
        "Time for which instance will be drained (not accept new\nconnections, but still work to finish started).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The protocol this BackendService uses to communicate with backends.\nThe default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer\ntypes and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,\nthe backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing\nwith TCP/UDP/L3_DEFAULT Forwarding Rule protocol.\nPossible values are: `HTTP`, `HTTPS`, `HTTP2`, `TCP`, `SSL`, `GRPC`, `UNSPECIFIED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "localityLbPolicy",
        "The load balancing algorithm used within the scope of the locality.\nThe possible values are:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customRequestHeaders",
        "Headers that the HTTP/S load balancer should add to proxied\nrequests.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "localityLbPolicies",
        "A list of locality load balancing policies to be used in order of\npreference. Either the policy or the customPolicy field should be set.\nOverrides any value set in the localityLbPolicy field.\nlocalityLbPolicies is only supported when the BackendService is referenced\nby a URL Map that is referenced by a target gRPC proxy that has the\nvalidateForProxyless field set to true.\nStructure is documented below.",
        () => compute_BackendServiceLocalityLbPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionAffinity",
        "Type of session affinity to use. The default is NONE. Session affinity is\nnot applicable if the protocol is UDP.\nPossible values are: `NONE`, `CLIENT_IP`, `CLIENT_IP_PORT_PROTO`, `CLIENT_IP_PROTO`, `GENERATED_COOKIE`, `HEADER_FIELD`, `HTTP_COOKIE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customResponseHeaders",
        "Headers that the HTTP/S load balancer should add to proxied\nresponses.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "This field denotes the logging options for the load balancer traffic served by this backend service.\nIf logging is enabled, logs will be exported to Stackdriver.\nStructure is documented below.",
        () => compute_BackendServiceLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "backends",
        "The set of backends that serve this BackendService.\nStructure is documented below.",
        () => compute_BackendServiceBackend_GetTypes(),
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
        "circuitBreakers",
        "Settings controlling the volume of connections to a backend service. This field\nis applicable only when the load_balancing_scheme is set to INTERNAL_SELF_MANAGED.\nStructure is documented below.",
        () => compute_BackendServiceCircuitBreakers_GetTypes(),
        false,
        false,
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
        "portName",
        "Name of backend port. The same name should appear in the instance\ngroups referenced by this service. Required when the load balancing\nscheme is EXTERNAL.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "affinityCookieTtlSec",
        "Lifetime of cookies in seconds if session_affinity is\nGENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts\nonly until the end of the browser session (or equivalent). The\nmaximum allowed value for TTL is one day.\nWhen the load balancing scheme is INTERNAL, this field is not used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicy",
        "The security policy associated with this backend service.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutSec",
        "How many seconds to wait for the backend before considering it a\nfailed request. Default is 30 seconds. Valid range is [1, 86400].",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "securitySettings",
        "The security settings that apply to this backend service. This field is applicable to either\na regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and\nload_balancing_scheme set to INTERNAL_MANAGED; or a global backend service with the\nload_balancing_scheme set to INTERNAL_SELF_MANAGED.\nStructure is documented below.",
        () => compute_BackendServiceSecuritySettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "consistentHash",
        "Consistent Hash-based load balancing can be used to provide soft session\naffinity based on HTTP headers, cookies or other properties. This load balancing\npolicy is applicable only for HTTP connections. The affinity to a particular\ndestination host will be lost when one or more hosts are added/removed from the\ndestination service. This field specifies parameters that control consistent\nhashing. This field only applies if the load_balancing_scheme is set to\nINTERNAL_SELF_MANAGED. This field is only applicable when locality_lb_policy is\nset to MAGLEV or RING_HASH.\nStructure is documented below.",
        () => compute_BackendServiceConsistentHash_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
