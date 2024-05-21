import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigee_TargetServerSSlInfo,
  apigee_TargetServerSSlInfo_GetTypes,
} from "../types/apigee_TargetServerSSlInfo";

export interface TargetServerArgs {
  // The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  host?: string;

  // Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  isEnabled?: boolean;

  // The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  name?: string;

  // The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  port?: number;

  /*
Immutable. The protocol used by this TargetServer.
Possible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.
*/
  protocol?: string;

  /*
Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
Structure is documented below.
*/
  sSlInfo?: apigee_TargetServerSSlInfo;

  // A human-readable description of this TargetServer.
  description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  envId?: string;
}
export class TargetServer extends Resource {
  // The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  public port?: number;

  /*
Immutable. The protocol used by this TargetServer.
Possible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.
*/
  public protocol?: string;

  /*
Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
Structure is documented below.
*/
  public sSlInfo?: apigee_TargetServerSSlInfo;

  // A human-readable description of this TargetServer.
  public description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public envId?: string;

  // The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  public host?: string;

  // Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  public isEnabled?: boolean;

  // The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource id of this reference. Values must match the regular expression [\\w\\s-.]+.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "Immutable. The protocol used by this TargetServer.\nPossible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sSlInfo",
        "Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.\nStructure is documented below.",
        apigee_TargetServerSSlInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description of this TargetServer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "envId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "host",
        "The host name this target connects to. Value must be a valid hostname as described by RFC-1123.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isEnabled",
        "Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.",
        [],
        false,
        false,
      ),
    ];
  }
}
