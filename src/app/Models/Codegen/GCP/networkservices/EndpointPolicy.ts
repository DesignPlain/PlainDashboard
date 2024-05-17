import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_EndpointPolicyTrafficPortSelector,
  Networkservices_EndpointPolicyTrafficPortSelector_GetTypes,
} from "../types/Networkservices_EndpointPolicyTrafficPortSelector";
import {
  Networkservices_EndpointPolicyEndpointMatcher,
  Networkservices_EndpointPolicyEndpointMatcher_GetTypes,
} from "../types/Networkservices_EndpointPolicyEndpointMatcher";

export interface EndpointPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  ServerTlsPolicy?: string;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  TrafficPortSelector?: Networkservices_EndpointPolicyTrafficPortSelector;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  Type?: string;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  ClientTlsPolicy?: string;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  EndpointMatcher?: Networkservices_EndpointPolicyEndpointMatcher;

  // Name of the EndpointPolicy resource.
  Name?: string;

  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  AuthorizationPolicy?: string;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class EndpointPolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  public TrafficPortSelector?: Networkservices_EndpointPolicyTrafficPortSelector;

  // Time the TcpRoute was updated in UTC.
  public UpdateTime?: string;

  // Time the TcpRoute was created in UTC.
  public CreateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the EndpointPolicy resource.
  public Name?: string;

  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  public AuthorizationPolicy?: string;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  public ClientTlsPolicy?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  public EndpointMatcher?: Networkservices_EndpointPolicyEndpointMatcher;

  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  public ServerTlsPolicy?: string;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of endpoint policy. This is primarily used to validate the configuration.\nPossible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientTlsPolicy",
        "A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EndpointMatcher",
        "Required. A matcher that selects endpoints to which the policies should be applied.\nStructure is documented below.",
        Networkservices_EndpointPolicyEndpointMatcher_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the EndpointPolicy resource.",
        [],
        false,
        true,
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
        InputType.String,
        "ServerTlsPolicy",
        "A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TrafficPortSelector",
        "Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.\nStructure is documented below.",
        Networkservices_EndpointPolicyTrafficPortSelector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizationPolicy",
        "This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the TcpRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
