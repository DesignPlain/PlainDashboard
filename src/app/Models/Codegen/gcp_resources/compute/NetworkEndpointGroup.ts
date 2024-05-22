import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkEndpointGroupArgs {
  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  defaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The network to which all network endpoints in the NEG belong.
Uses "default" project network if unspecified.


- - -
*/
  network?: string;

  /*
Type of network endpoints in this network endpoint group.
NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.
Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT.
Default value is `GCE_VM_IP_PORT`.
Possible values are: `GCE_VM_IP`, `GCE_VM_IP_PORT`, `NON_GCP_PRIVATE_IP_PORT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`, `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`.
*/
  networkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Optional subnetwork to which all network endpoints in the NEG belong.
  subnetwork?: string;

  // Zone where the network endpoint group is located.
  zone?: string;
}
export class NetworkEndpointGroup extends Resource {
  // Zone where the network endpoint group is located.
  public zone?: string;

  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  public defaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
The network to which all network endpoints in the NEG belong.
Uses "default" project network if unspecified.


- - -
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Number of network endpoints in the network endpoint group.
  public size?: number;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
Type of network endpoints in this network endpoint group.
NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.
Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT.
Default value is `GCE_VM_IP_PORT`.
Possible values are: `GCE_VM_IP`, `GCE_VM_IP_PORT`, `NON_GCP_PRIVATE_IP_PORT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`, `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`.
*/
  public networkEndpointType?: string;

  // Optional subnetwork to which all network endpoints in the NEG belong.
  public subnetwork?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "subnetwork",
        "Optional subnetwork to which all network endpoints in the NEG belong.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "Zone where the network endpoint group is located.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "defaultPort",
        "The default port used if the port number is not specified in the\nnetwork endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'The network to which all network endpoints in the NEG belong.\nUses "default" project network if unspecified.\n\n\n- - -',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkEndpointType",
        "Type of network endpoints in this network endpoint group.\nNON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network\nendpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).\nNote that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services\nthat 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,\nINTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or\nCONNECTION balancing modes.\nPossible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT.\nDefault value is `GCE_VM_IP_PORT`.\nPossible values are: `GCE_VM_IP`, `GCE_VM_IP_PORT`, `NON_GCP_PRIVATE_IP_PORT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`, `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`.",
        [],
        false,
        true,
      ),
    ];
  }
}
