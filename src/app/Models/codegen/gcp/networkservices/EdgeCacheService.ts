import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_EdgeCacheServiceRouting,
  networkservices_EdgeCacheServiceRouting_GetTypes,
} from "../types/networkservices_EdgeCacheServiceRouting";
import {
  networkservices_EdgeCacheServiceLogConfig,
  networkservices_EdgeCacheServiceLogConfig_GetTypes,
} from "../types/networkservices_EdgeCacheServiceLogConfig";

export interface EdgeCacheServiceArgs {
  // A human-readable description of the hostRule.
  description?: string;

  // Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.
  edgeSecurityPolicy?: string;

  /*
URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.
Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.
*/
  edgeSslCertificates?: Array<string>;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
URL of the SslPolicy resource that will be associated with the EdgeCacheService.
If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.
*/
  sslPolicy?: string;

  /*
Disables HTTP/2.
HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.
Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.
*/
  disableHttp2?: boolean;

  // HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.
  disableQuic?: boolean;

  /*
Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.
Structure is documented below.
*/
  logConfig?: networkservices_EdgeCacheServiceLogConfig;

  /*
Require TLS (HTTPS) for all clients connecting to this service.
Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.
*/
  requireTls?: boolean;

  /*
Defines how requests are routed, modified, cached and/or which origin content is filled from.
Structure is documented below.
*/
  routing?: networkservices_EdgeCacheServiceRouting;
}
export class EdgeCacheService extends DS_Resource {
  /*
Disables HTTP/2.
HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.
Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.
*/
  public disableHttp2?: boolean;

  /*
Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.
Structure is documented below.
*/
  public logConfig?: networkservices_EdgeCacheServiceLogConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Require TLS (HTTPS) for all clients connecting to this service.
Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.
*/
  public requireTls?: boolean;

  /*
Defines how requests are routed, modified, cached and/or which origin content is filled from.
Structure is documented below.
*/
  public routing?: networkservices_EdgeCacheServiceRouting;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.
Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.
*/
  public edgeSslCertificates?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The IPv6 addresses associated with this service. Addresses are static for the lifetime of the service.
  public ipv6Addresses?: Array<string>;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
*/
  public name?: string;

  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
URL of the SslPolicy resource that will be associated with the EdgeCacheService.
If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.
*/
  public sslPolicy?: string;

  // A human-readable description of the hostRule.
  public description?: string;

  // HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.
  public disableQuic?: boolean;

  // Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.
  public edgeSecurityPolicy?: string;

  // The IPv4 addresses associated with this service. Addresses are static for the lifetime of the service.
  public ipv4Addresses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "routing",
        "Defines how requests are routed, modified, cached and/or which origin content is filled from.\nStructure is documented below.",
        () => networkservices_EdgeCacheServiceRouting_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description of the hostRule.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "edgeSslCertificates",
        'URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.\nNote that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableHttp2",
        "Disables HTTP/2.\nHTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.\nSome legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableQuic",
        "HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireTls",
        "Require TLS (HTTPS) for all clients connecting to this service.\nClients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).\nYou must have at least one (1) edgeSslCertificate specified to enable this.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "Specifies the logging options for the traffic served by this service. If logging is enabled, logs will be exported to Cloud Logging.\nStructure is documented below.",
        () => networkservices_EdgeCacheServiceLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "edgeSecurityPolicy",
        "Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the EdgeCache resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.",
        () => [],
        false,
        true,
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
        InputType.String,
        "sslPolicy",
        'URL of the SslPolicy resource that will be associated with the EdgeCacheService.\nIf not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
