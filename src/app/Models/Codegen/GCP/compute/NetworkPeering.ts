import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringArgs {
  // Whether to export the custom routes to the peer network. Defaults to `false`.
  exportCustomRoutes?: boolean;

  // Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
  exportSubnetRoutesWithPublicIp?: boolean;

  // Whether to import the custom routes from the peer network. Defaults to `false`.
  importCustomRoutes?: boolean;

  // Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.
  importSubnetRoutesWithPublicIp?: boolean;

  // Name of the peering.
  name?: string;

  // The primary network of the peering.
  network?: string;

  /*
The peer network in the peering. The peer network
may belong to a different project.
*/
  peerNetwork?: string;

  // Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].
  stackType?: string;
}
export class NetworkPeering extends Resource {
  // Whether to import the custom routes from the peer network. Defaults to `false`.
  public importCustomRoutes?: boolean;

  // Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.
  public importSubnetRoutesWithPublicIp?: boolean;

  /*
The peer network in the peering. The peer network
may belong to a different project.
*/
  public peerNetwork?: string;

  // Whether to export the custom routes to the peer network. Defaults to `false`.
  public exportCustomRoutes?: boolean;

  // Name of the peering.
  public name?: string;

  // The primary network of the peering.
  public network?: string;

  // Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].
  public stackType?: string;

  /*
State for the peering, either `ACTIVE` or `INACTIVE`. The peering is
`ACTIVE` when there's a matching configuration in the peer network.
*/
  public state?: string;

  // Details about the current state of the peering.
  public stateDetails?: string;

  // Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
  public exportSubnetRoutesWithPublicIp?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "exportSubnetRoutesWithPublicIp",
        "Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "importCustomRoutes",
        "Whether to import the custom routes from the peer network. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "importSubnetRoutesWithPublicIp",
        "Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the peering.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The primary network of the peering.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerNetwork",
        "The peer network in the peering. The peer network\nmay belong to a different project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackType",
        'Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "exportCustomRoutes",
        "Whether to export the custom routes to the peer network. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
