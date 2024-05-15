import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringArgs {
  // Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.
  ImportSubnetRoutesWithPublicIp?: boolean;

  // Name of the peering.
  Name?: string;

  // The primary network of the peering.
  Network?: string;

  /*
The peer network in the peering. The peer network
may belong to a different project.
*/
  PeerNetwork?: string;

  // Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].
  StackType?: string;

  // Whether to export the custom routes to the peer network. Defaults to `false`.
  ExportCustomRoutes?: boolean;

  // Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
  ExportSubnetRoutesWithPublicIp?: boolean;

  // Whether to import the custom routes from the peer network. Defaults to `false`.
  ImportCustomRoutes?: boolean;
}
export class NetworkPeering extends Resource {
  // Whether to export the custom routes to the peer network. Defaults to `false`.
  public ExportCustomRoutes?: boolean;

  // Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.
  public ExportSubnetRoutesWithPublicIp?: boolean;

  // Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.
  public ImportSubnetRoutesWithPublicIp?: boolean;

  // The primary network of the peering.
  public Network?: string;

  /*
State for the peering, either `ACTIVE` or `INACTIVE`. The peering is
`ACTIVE` when there's a matching configuration in the peer network.
*/
  public State?: string;

  // Details about the current state of the peering.
  public StateDetails?: string;

  // Whether to import the custom routes from the peer network. Defaults to `false`.
  public ImportCustomRoutes?: boolean;

  // Name of the peering.
  public Name?: string;

  /*
The peer network in the peering. The peer network
may belong to a different project.
*/
  public PeerNetwork?: string;

  // Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].
  public StackType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "StackType",
        'Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"].',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ExportCustomRoutes",
        "Whether to export the custom routes to the peer network. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ExportSubnetRoutesWithPublicIp",
        "Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportCustomRoutes",
        "Whether to import the custom routes from the peer network. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportSubnetRoutesWithPublicIp",
        "Whether subnet routes with public IP range are imported. The default value is false. The IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported from peers and are not controlled by this field.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the peering.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The primary network of the peering.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerNetwork",
        "The peer network in the peering. The peer network\nmay belong to a different project.",
        [],
        true,
        true,
      ),
    ];
  }
}
