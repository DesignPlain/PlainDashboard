import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringArgs {
  // True if custom routes are imported from the peered network; false otherwise.
  importCustomRoutesWithPublicIp?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  vmwareEngineNetwork?: string;

  // User-provided description for this network peering.
  description?: string;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  exportCustomRoutesWithPublicIp?: boolean;

  // True if custom routes are imported from the peered network; false otherwise.
  importCustomRoutes?: boolean;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  peerNetworkType?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  exportCustomRoutes?: boolean;

  /*
The ID of the Network Peering.


- - -
*/
  name?: string;

  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  peerNetwork?: string;
}
export class NetworkPeering extends Resource {
  // True if custom routes are imported from the peered network; false otherwise.
  public importCustomRoutes?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  public vmwareEngineNetwork?: string;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  public exportCustomRoutesWithPublicIp?: boolean;

  // User-provided description for this network peering.
  public description?: string;

  /*
The ID of the Network Peering.


- - -
*/
  public name?: string;

  /*
The canonical name of the VMware Engine network in the form:
projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  public vmwareEngineNetworkCanonical?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
State of the network peering.
This field has a value of 'ACTIVE' when there's a matching configuration in the peer network.
New values may be added to this enum when appropriate.
*/
  public state?: string;

  // Details about the current state of the network peering.
  public stateDetails?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  public exportCustomRoutes?: boolean;

  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  public peerNetwork?: string;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  public peerNetworkType?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // True if custom routes are imported from the peered network; false otherwise.
  public importCustomRoutesWithPublicIp?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "importCustomRoutesWithPublicIp",
        "True if custom routes are imported from the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vmwareEngineNetwork",
        "The relative resource name of the VMware Engine network. Specify the name in the following form:\nprojects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}\ncan either be a project number or a project ID.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "importCustomRoutes",
        "True if custom routes are imported from the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerNetworkType",
        "The type of the network to peer with the VMware Engine network.\nPossible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the Network Peering.\n\n\n- - -",
        [],
        false,
        true,
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
        "User-provided description for this network peering.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "exportCustomRoutesWithPublicIp",
        "True if all subnet routes with a public IP address range are exported; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "exportCustomRoutes",
        "True if custom routes are exported to the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerNetwork",
        "The relative resource name of the network to peer with a standard VMware Engine network.\nThe provided network can be a consumer VPC network or another standard VMware Engine network.",
        [],
        true,
        false,
      ),
    ];
  }
}
