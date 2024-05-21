import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_EndpointPolicyTrafficPortSelector,
  networkservices_EndpointPolicyTrafficPortSelector_GetTypes,
} from "../types/networkservices_EndpointPolicyTrafficPortSelector";
import {
  networkservices_EndpointPolicyEndpointMatcher,
  networkservices_EndpointPolicyEndpointMatcher_GetTypes,
} from "../types/networkservices_EndpointPolicyEndpointMatcher";

export interface EndpointPolicyArgs {
  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  serverTlsPolicy?: string;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  trafficPortSelector?: networkservices_EndpointPolicyTrafficPortSelector;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  clientTlsPolicy?: string;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  authorizationPolicy?: string;

  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  endpointMatcher?: networkservices_EndpointPolicyEndpointMatcher;

  // Name of the EndpointPolicy resource.
  name?: string;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  type?: string;
}
export class EndpointPolicy extends Resource {
  // This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.
  public authorizationPolicy?: string;

  // Time the TcpRoute was created in UTC.
  public createTime?: string;

  /*
Set of label tags associated with the TcpRoute resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
Structure is documented below.
*/
  public trafficPortSelector?: networkservices_EndpointPolicyTrafficPortSelector;

  // Time the TcpRoute was updated in UTC.
  public updateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.
  public serverTlsPolicy?: string;

  /*
The type of endpoint policy. This is primarily used to validate the configuration.
Possible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.
*/
  public type?: string;

  // A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.
  public clientTlsPolicy?: string;

  /*
Required. A matcher that selects endpoints to which the policies should be applied.
Structure is documented below.
*/
  public endpointMatcher?: networkservices_EndpointPolicyEndpointMatcher;

  // Name of the EndpointPolicy resource.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clientTlsPolicy",
        "A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.",
        [],
        false,
        false,
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
        "authorizationPolicy",
        "This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "endpointMatcher",
        "Required. A matcher that selects endpoints to which the policies should be applied.\nStructure is documented below.",
        networkservices_EndpointPolicyEndpointMatcher_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the EndpointPolicy resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverTlsPolicy",
        "A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trafficPortSelector",
        "Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.\nStructure is documented below.",
        networkservices_EndpointPolicyTrafficPortSelector_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the TcpRoute resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of endpoint policy. This is primarily used to validate the configuration.\nPossible values are: `SIDECAR_PROXY`, `GRPC_SERVER`.",
        [],
        true,
        false,
      ),
    ];
  }
}
