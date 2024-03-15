import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TargetServerSSlInfo } from "../types/TargetServerSSlInfo";

export interface TargetServerArgs {
  /*
Immutable. The protocol used by this TargetServer.
Possible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.
*/
  Protocol?: string;

  /*
Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
Structure is documented below.
*/
  SSlInfo?: TargetServerSSlInfo;

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
}
export class TargetServer extends Resource {
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
  public SSlInfo?: TargetServerSSlInfo;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        "Immutable. The protocol used by this TargetServer.\nPossible values are: `HTTP`, `HTTP2`, `GRPC_TARGET`, `GRPC`, `EXTERNAL_CALLOUT`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SSlInfo",
        "Specifies TLS configuration info for this TargetServer. The JSON name is sSLInfo for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of this TargetServer.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Host",
        "The host name this target connects to. Value must be a valid hostname as described by RFC-1123.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IsEnabled",
        "Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource id of this reference. Values must match the regular expression [\\w\\s-.]+.",
      ),
    ];
  }
}
