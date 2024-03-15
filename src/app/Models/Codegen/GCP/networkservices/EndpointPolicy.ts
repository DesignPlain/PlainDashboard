import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EndpointPolicyEndpointMatcher } from "../types/EndpointPolicyEndpointMatcher";
import { EndpointPolicyTrafficPortSelector } from "../types/EndpointPolicyTrafficPortSelector";

export interface EndpointPolicyArgs {
  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  EndpointMatcher?: EndpointPolicyEndpointMatcher;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  TrafficPortSelector?: EndpointPolicyTrafficPortSelector;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  ClientTlsPolicy?: string;

  // Name of the EndpointPolicy resource.
  Name?: string;

  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  ServerTlsPolicy?: string;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  Type?: string;

  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  AuthorizationPolicy?: string;
}
export class EndpointPolicy extends Resource {
  // Time the TcpRoute was updated in UTC.
  public UpdateTime?: string;

  // Time the TcpRoute was created in UTC.
  public CreateTime?: string;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  public TrafficPortSelector?: EndpointPolicyTrafficPortSelector;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  public ServerTlsPolicy?: string;

  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  public AuthorizationPolicy?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  public Type?: string;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  public ClientTlsPolicy?: string;

  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  public EndpointMatcher?: EndpointPolicyEndpointMatcher;

  // Name of the EndpointPolicy resource.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "TrafficPortSelector",
        "Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientTlsPolicy",
        "A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the EndpointPolicy resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServerTlsPolicy",
        "A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of endpoint policy. This is primarily used to validate the configuration.\nPossible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EndpointMatcher",
        "Required. A matcher that selects endpoints to which the policies should be applied.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the TcpRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthorizationPolicy",
        "This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.",
      ),
    ];
  }
}
