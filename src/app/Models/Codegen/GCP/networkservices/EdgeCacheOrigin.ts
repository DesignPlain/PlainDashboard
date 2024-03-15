import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EdgeCacheOriginOriginRedirect } from "../types/EdgeCacheOriginOriginRedirect";
import { EdgeCacheOriginOriginOverrideAction } from "../types/EdgeCacheOriginOriginOverrideAction";
import { EdgeCacheOriginTimeout } from "../types/EdgeCacheOriginTimeout";
import { EdgeCacheOriginAwsV4Authentication } from "../types/EdgeCacheOriginAwsV4Authentication";

export interface EdgeCacheOriginArgs {
  /*
Follow redirects from this origin.
Structure is documented below.
*/
  OriginRedirect?: EdgeCacheOriginOriginRedirect;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A human-readable description of the resource.
  Description?: string;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The override actions, including url rewrites and header
additions, for requests that use this origin.
Structure is documented below.
*/
  OriginOverrideAction?: EdgeCacheOriginOriginOverrideAction;

  /*
The port to connect to the origin on.
Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
*/
  Port?: number;

  /*
The Origin resource to try when the current origin cannot be reached.
After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.
The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.
*/
  FailoverOrigin?: string;

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
  MaxAttempts?: number;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  Name?: string;

  /*
The connection and HTTP timeout configuration for this origin.
Structure is documented below.
*/
  Timeout?: EdgeCacheOriginTimeout;

  /*
Enable AWS Signature Version 4 origin authentication.
Structure is documented below.
*/
  AwsV4Authentication?: EdgeCacheOriginAwsV4Authentication;

  /*
A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.
This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname
When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
*/
  OriginAddress?: string;

  /*
The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.
When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.
Possible values are: `HTTP2`, `HTTPS`, `HTTP`.
*/
  Protocol?: string;

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
  RetryConditions?: Array<string>;
}
export class EdgeCacheOrigin extends Resource {
  // A human-readable description of the resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.
When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.
Possible values are: `HTTP2`, `HTTPS`, `HTTP`.
*/
  public Protocol?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The Origin resource to try when the current origin cannot be reached.
After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.
The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
A reference to a Topic resource.
*/
  public FailoverOrigin?: string;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

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
  public MaxAttempts?: number;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  public Name?: string;

  /*
A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.
This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname
When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
*/
  public OriginAddress?: string;

  /*
Enable AWS Signature Version 4 origin authentication.
Structure is documented below.
*/
  public AwsV4Authentication?: EdgeCacheOriginAwsV4Authentication;

  /*
The override actions, including url rewrites and header
additions, for requests that use this origin.
Structure is documented below.
*/
  public OriginOverrideAction?: EdgeCacheOriginOriginOverrideAction;

  /*
Follow redirects from this origin.
Structure is documented below.
*/
  public OriginRedirect?: EdgeCacheOriginOriginRedirect;

  /*
The port to connect to the origin on.
Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
*/
  public Port?: number;

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
  public RetryConditions?: Array<string>;

  /*
The connection and HTTP timeout configuration for this origin.
Structure is documented below.
*/
  public Timeout?: EdgeCacheOriginTimeout;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OriginRedirect",
        "Follow redirects from this origin.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OriginAddress",
        'A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.\nThis address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname\nWhen providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.\nIf a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RetryConditions",
        'Specifies one or more retry conditions for the configured origin.\nIf the failure mode during a connection attempt to the origin matches the configured retryCondition(s),\nthe origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.\nThe default retryCondition is "CONNECT_FAILURE".\nretryConditions apply to this origin, and not subsequent failoverOrigin(s),\nwhich may specify their own retryConditions and maxAttempts.\nValid values are:\n- CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.\n- HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.\n- GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.\n- RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)\n- NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.\n- FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden).\nEach value may be one of: `CONNECT_FAILURE`, `HTTP_5XX`, `GATEWAY_ERROR`, `RETRIABLE_4XX`, `NOT_FOUND`, `FORBIDDEN`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OriginOverrideAction",
        "The override actions, including url rewrites and header\nadditions, for requests that use this origin.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The port to connect to the origin on.\nDefaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FailoverOrigin",
        "The Origin resource to try when the current origin cannot be reached.\nAfter maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.\nThe value of timeout.maxAttemptsTimeout dictates the timeout across all origins.\nA reference to a Topic resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AwsV4Authentication",
        "Enable AWS Signature Version 4 origin authentication.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        "The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.\nWhen using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server.\nPossible values are: `HTTP2`, `HTTPS`, `HTTP`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Timeout",
        "The connection and HTTP timeout configuration for this origin.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the EdgeCache resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxAttempts",
        "The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.\nOnce maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,\nretryConditions and failoverOrigin to control its own cache fill failures.\nThe total number of allowed attempts to cache fill across this and failover origins is limited to four.\nThe total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.\nThe last valid, non-retried response from all origins will be returned to the client.\nIf no origin returns a valid response, an HTTP 502 will be returned to the client.\nDefaults to 1. Must be a value greater than 0 and less than 4.",
      ),
    ];
  }
}
