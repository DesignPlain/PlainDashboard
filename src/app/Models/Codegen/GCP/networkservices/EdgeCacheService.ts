import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EdgeCacheServiceRouting } from "../types/EdgeCacheServiceRouting";
import { EdgeCacheServiceLogConfig } from "../types/EdgeCacheServiceLogConfig";

export interface EdgeCacheServiceArgs {
  /*
Disables HTTP/2.
HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.
Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.
*/
  DisableHttp2?: boolean;

  // HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.
  DisableQuic?: boolean;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Require TLS (HTTPS) for all clients connecting to this service.
Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.
*/
  RequireTls?: boolean;

  /*
Defines how requests are routed, modified, cached and/or which origin content is filled from.
Structure is documented below.
*/
  Routing?: EdgeCacheServiceRouting;

  // A human-readable description of the hostRule.
  Description?: string;

  /*
URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.
Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.
*/
  EdgeSslCertificates?: Array<string>;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.
Structure is documented below.
*/
  LogConfig?: EdgeCacheServiceLogConfig;

  /*
URL of the SslPolicy resource that will be associated with the EdgeCacheService.
If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.
*/
  SslPolicy?: string;

  // Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.
  EdgeSecurityPolicy?: string;
}
export class EdgeCacheService extends Resource {
  // A human-readable description of the hostRule.
  public Description?: string;

  /*
Disables HTTP/2.
HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.
Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.
*/
  public DisableHttp2?: boolean;

  // Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.
  public EdgeSecurityPolicy?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.
  public DisableQuic?: boolean;

  // The IPv4 addresses associated with this service. Addresses are static for the lifetime of the service.
  public Ipv4Addresses?: Array<string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
*/
  public Name?: string;

  /*
URL of the SslPolicy resource that will be associated with the EdgeCacheService.
If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.
*/
  public SslPolicy?: string;

  /*
URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.
Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.
*/
  public EdgeSslCertificates?: Array<string>;

  // The IPv6 addresses associated with this service. Addresses are static for the lifetime of the service.
  public Ipv6Addresses?: Array<string>;

  /*
Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.
Structure is documented below.
*/
  public LogConfig?: EdgeCacheServiceLogConfig;

  /*
Require TLS (HTTPS) for all clients connecting to this service.
Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.
*/
  public RequireTls?: boolean;

  /*
Defines how requests are routed, modified, cached and/or which origin content is filled from.
Structure is documented below.
*/
  public Routing?: EdgeCacheServiceRouting;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the hostRule.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "EdgeSslCertificates",
        'URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.\nNote that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the EdgeCache resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DisableQuic",
        "HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RequireTls",
        "Require TLS (HTTPS) for all clients connecting to this service.\nClients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).\nYou must have at least one (1) edgeSslCertificate specified to enable this.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Routing",
        "Defines how requests are routed, modified, cached and/or which origin content is filled from.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SslPolicy",
        'URL of the SslPolicy resource that will be associated with the EdgeCacheService.\nIf not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DisableHttp2",
        "Disables HTTP/2.\nHTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.\nSome legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeSecurityPolicy",
        "Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.",
      ),
    ];
  }
}
