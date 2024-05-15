import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_TargetServerSSlInfo,
  Apigee_TargetServerSSlInfo_GetTypes,
} from "../types/Apigee_TargetServerSSlInfo";

export interface TargetServerArgs {
  // A human-readable description of this TargetServer.
  Description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  EnvId?: string;

  // The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  Host?: string;

  // Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  IsEnabled?: boolean;

  // The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  Name?: string;

  // The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  Port?: number;

  /*
Immutable. The protocol used by this TargetServer.
Possible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.
*/
  Protocol?: string;

  /*
Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
Structure is documented below.
*/
  SSlInfo?: Apigee_TargetServerSSlInfo;
}
export class TargetServer extends Resource {
  // The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  public Port?: number;

  /*
Immutable. The protocol used by this TargetServer.
Possible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.
*/
  public Protocol?: string;

  /*
Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
Structure is documented below.
*/
  public SSlInfo?: Apigee_TargetServerSSlInfo;

  // A human-readable description of this TargetServer.
  public Description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public EnvId?: string;

  // The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  public Host?: string;

  // Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  public IsEnabled?: boolean;

  // The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "SSlInfo",
        "Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.\nStructure is documented below.",
        Apigee_TargetServerSSlInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of this TargetServer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Host",
        "The host name this target connects to. Value must be a valid hostname as described by RFC-1123.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "IsEnabled",
        "Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource id of this reference. Values must match the regular expression [\\w\\s-.]+.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        "Immutable. The protocol used by this TargetServer.\nPossible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.",
        [],
        false,
        true,
      ),
    ];
  }
}
