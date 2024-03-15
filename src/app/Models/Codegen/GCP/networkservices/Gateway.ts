import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GatewayArgs {
  /*
When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.
If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.
*/
  DeleteSwgAutogenRouterOnDestroy?: boolean;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  /*
One or more port numbers (1-65535), on which the Gateway will receive traffic.
The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
*/
  Ports?: Array<number>;

  /*
Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.
*/
  Addresses?: Array<string>;

  /*
A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  CertificateUrls?: Array<string>;

  /*
The location of the gateway.
The default value is `global`.
*/
  Location?: string;

  /*
Short name of the Gateway resource to be created.


- - -
*/
  Name?: string;

  /*
Immutable. Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
*/
  Scope?: string;

  /*
The relative resource name identifying the subnetwork in which this SWG is allocated.
For example: `projects/-/regions/us-central1/subnetworks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.
*/
  Subnetwork?: string;

  /*
A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: `projects/-/locations/-/gatewaySecurityPolicies/swg-policy`.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  GatewaySecurityPolicy?: string;

  /*
The relative resource name identifying the VPC network that is using this configuration.
For example: `projects/-/global/networks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  Network?: string;

  /*
A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.
If empty, TLS termination is disabled.
*/
  ServerTlsPolicy?: string;

  /*
Immutable. The type of the customer-managed gateway. Possible values are: - OPEN_MESH - SECURE_WEB_GATEWAY.
Possible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.
*/
  Type?: string;

  /*
Set of label tags associated with the Gateway resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Gateway extends Resource {
  /*
Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.
*/
  public Addresses?: Array<string>;

  /*
A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: `projects/-/locations/-/gatewaySecurityPolicies/swg-policy`.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public GatewaySecurityPolicy?: string;

  /*
Set of label tags associated with the Gateway resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location of the gateway.
The default value is `global`.
*/
  public Location?: string;

  /*
The relative resource name identifying the subnetwork in which this SWG is allocated.
For example: `projects/-/regions/us-central1/subnetworks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.
*/
  public Subnetwork?: string;

  /*
Immutable. The type of the customer-managed gateway. Possible values are: - OPEN_MESH - SECURE_WEB_GATEWAY.
Possible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.
*/
  public Type?: string;

  /*
When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.
If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.
*/
  public DeleteSwgAutogenRouterOnDestroy?: boolean;

  /*
One or more port numbers (1-65535), on which the Gateway will receive traffic.
The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.
*/
  public Ports?: Array<number>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Server-defined URL of this resource.
  public SelfLink?: string;

  /*
A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public CertificateUrls?: Array<string>;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Short name of the Gateway resource to be created.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.
If empty, TLS termination is disabled.
*/
  public ServerTlsPolicy?: string;

  // Time the AccessPolicy was created in UTC.
  public CreateTime?: string;

  /*
The relative resource name identifying the VPC network that is using this configuration.
For example: `projects/-/global/networks/network-1`.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
*/
  public Network?: string;

  /*
Immutable. Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
*/
  public Scope?: string;

  // Time the AccessPolicy was updated in UTC.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scope",
        "Immutable. Scope determines how configuration across multiple Gateway instances are merged.\nThe configuration for multiple Gateway instances with the same scope will be merged as presented as\na single coniguration to the proxy/load balancer.\nMax length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The relative resource name identifying the VPC network that is using this configuration.\nFor example: `projects/*/global/networks/network-1`.\nCurrently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServerTlsPolicy",
        "A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated.\nIf empty, TLS termination is disabled.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeleteSwgAutogenRouterOnDestroy",
        "When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.\nIf there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Addresses",
        "Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided,\nan IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.\nGateways of type 'OPEN_MESH' listen on 0.0.0.0.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Short name of the Gateway resource to be created.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "The relative resource name identifying the subnetwork in which this SWG is allocated.\nFor example: `projects/*/regions/us-central1/subnetworks/network-1`.\nCurrently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Ports",
        "One or more port numbers (1-65535), on which the Gateway will receive traffic.\nThe proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are\nlimited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "CertificateUrls",
        "A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.\nThis feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY.\nPossible values are: `TYPE_UNSPECIFIED`, `OPEN_MESH`, `SECURE_WEB_GATEWAY`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the gateway.\nThe default value is `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GatewaySecurityPolicy",
        "A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.\nFor example: `projects/*/locations/*/gatewaySecurityPolicies/swg-policy`.\nThis policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Set of label tags associated with the Gateway resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}