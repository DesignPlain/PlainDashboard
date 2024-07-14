import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GatewayArgs {
  /*
The relative resource name identifying the VPC network that is using this configuration.
For example: `projects/-/global/networks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  network?: string;

  /*
A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.
If empty, TLS termination is disabled.
*/
  serverTlsPolicy?: string;

  /*
Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.
*/
  addresses?: Array<string>;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Short name of the Gateway resource to be created.


- - -
*/
  name?: string;

  /*
The relative resource name identifying the subnetwork in which this SWG is allocated.
For example: `projects/-/regions/us-central1/subnetworks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.
*/
  subnetwork?: string;

  /*
Immutable. The type of the customer-managed gateway. Possible values are: - OPEN_MESH - SECURE_WEB_GATEWAY.
Possible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.
*/
  type?: string;

  /*
One or more port numbers (1-65535), on which the Gateway will receive traffic.
The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
*/
  ports?: Array<number>;

  /*
Immutable. Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
*/
  scope?: string;

  /*
A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  certificateUrls?: Array<string>;

  /*
When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.
If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.
*/
  deleteSwgAutogenRouterOnDestroy?: boolean;

  /*
A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: `projects/-/locations/-/gatewaySecurityPolicies/swg-policy`.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  gatewaySecurityPolicy?: string;

  /*
Set of label tags associated with the Gateway resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the gateway.
The default value is `global`.
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Gateway extends Resource {
  /*
Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.
*/
  public addresses?: Array<string>;

  /*
When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.
If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.
*/
  public deleteSwgAutogenRouterOnDestroy?: boolean;

  /*
The relative resource name identifying the VPC network that is using this configuration.
For example: `projects/-/global/networks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public network?: string;

  /*
One or more port numbers (1-65535), on which the Gateway will receive traffic.
The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
*/
  public ports?: Array<number>;

  /*
Immutable. Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
*/
  public scope?: string;

  // Server-defined URL of this resource.
  public selfLink?: string;

  /*
A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.
If empty, TLS termination is disabled.
*/
  public serverTlsPolicy?: string;

  /*
A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: `projects/-/locations/-/gatewaySecurityPolicies/swg-policy`.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public gatewaySecurityPolicy?: string;

  /*
Set of label tags associated with the Gateway resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Short name of the Gateway resource to be created.


- - -
*/
  public name?: string;

  /*
Immutable. The type of the customer-managed gateway. Possible values are: - OPEN_MESH - SECURE_WEB_GATEWAY.
Possible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.
*/
  public type?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
The relative resource name identifying the subnetwork in which this SWG is allocated.
For example: `projects/-/regions/us-central1/subnetworks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.
*/
  public subnetwork?: string;

  // Time the AccessPolicy was updated in UTC.
  public updateTime?: string;

  /*
A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public certificateUrls?: Array<string>;

  // Time the AccessPolicy was created in UTC.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The location of the gateway.
The default value is `global`.
*/
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "addresses",
        "Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,\nan IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.\nGateways of type 'OPEN_MESH' listen on 0.0.0.0.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteSwgAutogenRouterOnDestroy",
        "When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.\nIf there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverTlsPolicy",
        "A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.\nIf empty, TLS termination is disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "The relative resource name identifying the subnetwork in which this SWG is allocated.\nFor example: `projects/*/regions/us-central1/subnetworks/network-1`.\nCurrently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ports",
        "One or more port numbers (1-65535), on which the Gateway will receive traffic.\nThe proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are\nlimited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.",
        InputType_Number_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Immutable. Scope determines how configuration across multiple Gateway instances are merged.\nThe configuration for multiple Gateway instances with the same scope will be merged as presented as\na single coniguration to the proxy/load balancer.\nMax length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "certificateUrls",
        "A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.\nThis feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewaySecurityPolicy",
        "A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.\nFor example: `projects/*/locations/*/gatewaySecurityPolicies/swg-policy`.\nThis policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The relative resource name identifying the VPC network that is using this configuration.\nFor example: `projects/*/global/networks/network-1`.\nCurrently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the Gateway resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
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
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Short name of the Gateway resource to be created.\n\n\n- - -",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY.\nPossible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the gateway.\nThe default value is `global`.",
        [],
        false,
        false,
      ),
    ];
  }
}
