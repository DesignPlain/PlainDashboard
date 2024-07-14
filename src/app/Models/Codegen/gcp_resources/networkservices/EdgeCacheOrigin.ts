import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkservices_EdgeCacheOriginOriginOverrideAction,
  networkservices_EdgeCacheOriginOriginOverrideAction_GetTypes,
} from "../types/networkservices_EdgeCacheOriginOriginOverrideAction";
import {
  networkservices_EdgeCacheOriginTimeout,
  networkservices_EdgeCacheOriginTimeout_GetTypes,
} from "../types/networkservices_EdgeCacheOriginTimeout";
import {
  networkservices_EdgeCacheOriginOriginRedirect,
  networkservices_EdgeCacheOriginOriginRedirect_GetTypes,
} from "../types/networkservices_EdgeCacheOriginOriginRedirect";
import {
  networkservices_EdgeCacheOriginAwsV4Authentication,
  networkservices_EdgeCacheOriginAwsV4Authentication_GetTypes,
} from "../types/networkservices_EdgeCacheOriginAwsV4Authentication";

export interface EdgeCacheOriginArgs {
  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  name?: string;

  /*
The override actions, including url rewrites and header
additions, for requests that use this origin.
Structure is documented below.
*/
  originOverrideAction?: networkservices_EdgeCacheOriginOriginOverrideAction;

  /*
The connection and HTTP timeout configuration for this origin.
Structure is documented below.
*/
  timeout?: networkservices_EdgeCacheOriginTimeout;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies one or more retry conditions for the configured origin.
If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.
The default retryCondition is "CONNECT_FAILURE".
retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.
Valid values are:
- CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
- HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
- GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
- RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
- NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
- FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden).
Each value may be one of: `CONNECT_FAILURE`, `HTTP_5XX`, `GATEWAY_ERROR`, `RETRIABLE_4XX`, `NOT_FOUND`, `FORBIDDEN`.
*/
  retryConditions?: Array<string>;

  /*
The Origin resource to try when the current origin cannot be reached.
After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.
The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.
*/
  failoverOrigin?: string;

  /*
Follow redirects from this origin.
Structure is documented below.
*/
  originRedirect?: networkservices_EdgeCacheOriginOriginRedirect;

  /*
The port to connect to the origin on.
Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
*/
  port?: number;

  /*
A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.
This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname
When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
*/
  originAddress?: string;

  // A human-readable description of the resource.
  description?: string;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.
Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.
The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.
The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.
Defaults to 1. Must be a value greater than 0 and less than 4.
*/
  maxAttempts?: number;

  /*
Enable AWS Signature Version 4 origin authentication.
Structure is documented below.
*/
  awsV4Authentication?: networkservices_EdgeCacheOriginAwsV4Authentication;

  /*
The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.
When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.
Possible values are: `HTTP2`, `HTTPS`, `HTTP`.
*/
  protocol?: string;
}
export class EdgeCacheOrigin extends Resource {
  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.
When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.
Possible values are: `HTTP2`, `HTTPS`, `HTTP`.
*/
  public protocol?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // A human-readable description of the resource.
  public description?: string;

  /*
The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.
Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
retryConditions and failoverOrigin to control its own cache fill failures.
The total number of allowed attempts to cache fill across this and failover origins is limited to four.
The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.
The last valid, non-retried response from all origins will be returned to the client.
If no origin returns a valid response, an HTTP 502 will be returned to the client.
Defaults to 1. Must be a value greater than 0 and less than 4.
*/
  public maxAttempts?: number;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  public name?: string;

  /*
Specifies one or more retry conditions for the configured origin.
If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.
The default retryCondition is "CONNECT_FAILURE".
retryConditions apply to this origin, and not subsequent failoverOrigin(s),
which may specify their own retryConditions and maxAttempts.
Valid values are:
- CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
- HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
- GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
- RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
- NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
- FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden).
Each value may be one of: `CONNECT_FAILURE`, `HTTP_5XX`, `GATEWAY_ERROR`, `RETRIABLE_4XX`, `NOT_FOUND`, `FORBIDDEN`.
*/
  public retryConditions?: Array<string>;

  /*
The connection and HTTP timeout configuration for this origin.
Structure is documented below.
*/
  public timeout?: networkservices_EdgeCacheOriginTimeout;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.
This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname
When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
*/
  public originAddress?: string;

  /*
The override actions, including url rewrites and header
additions, for requests that use this origin.
Structure is documented below.
*/
  public originOverrideAction?: networkservices_EdgeCacheOriginOriginOverrideAction;

  /*
Follow redirects from this origin.
Structure is documented below.
*/
  public originRedirect?: networkservices_EdgeCacheOriginOriginRedirect;

  /*
Enable AWS Signature Version 4 origin authentication.
Structure is documented below.
*/
  public awsV4Authentication?: networkservices_EdgeCacheOriginAwsV4Authentication;

  /*
The Origin resource to try when the current origin cannot be reached.
After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.
The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.
*/
  public failoverOrigin?: string;

  /*
The port to connect to the origin on.
Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
*/
  public port?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "originOverrideAction",
        "The override actions, including url rewrites and header\nadditions, for requests that use this origin.\nStructure is documented below.",
        networkservices_EdgeCacheOriginOriginOverrideAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "retryConditions",
        'Specifies one or more retry conditions for the configured origin.\nIf the failure mode during a connection attempt to the origin matches the configured retryCondition(s),\nthe origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.\nThe default retryCondition is "CONNECT_FAILURE".\nretryConditions apply to this origin, and not subsequent failoverOrigin(s),\nwhich may specify their own retryConditions and maxAttempts.\nValid values are:\n- CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.\n- HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.\n- GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.\n- RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)\n- NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.\n- FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden).\nEach value may be one of: `CONNECT_FAILURE`, `HTTP_5XX`, `GATEWAY_ERROR`, `RETRIABLE_4XX`, `NOT_FOUND`, `FORBIDDEN`.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "failoverOrigin",
        "The Origin resource to try when the current origin cannot be reached.\nAfter maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.\nThe value of timeout.maxAttemptsTimeout dictates the timeout across all origins.\nA reference to a Topic resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port to connect to the origin on.\nDefaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "originRedirect",
        "Follow redirects from this origin.\nStructure is documented below.",
        networkservices_EdgeCacheOriginOriginRedirect_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeout",
        "The connection and HTTP timeout configuration for this origin.\nStructure is documented below.",
        networkservices_EdgeCacheOriginTimeout_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "originAddress",
        'A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.\nThis address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname\nWhen providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.\nIf a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.\nWhen using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.\nPossible values are: `HTTP2`, `HTTPS`, `HTTP`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -",
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
        "description",
        "A human-readable description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the EdgeCache resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxAttempts",
        "The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.\nOnce maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,\nretryConditions and failoverOrigin to control its own cache fill failures.\nThe total number of allowed attempts to cache fill across this and failover origins is limited to four.\nThe total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.\nThe last valid, non-retried response from all origins will be returned to the client.\nIf no origin returns a valid response, an HTTP 502 will be returned to the client.\nDefaults to 1. Must be a value greater than 0 and less than 4.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "awsV4Authentication",
        "Enable AWS Signature Version 4 origin authentication.\nStructure is documented below.",
        networkservices_EdgeCacheOriginAwsV4Authentication_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
