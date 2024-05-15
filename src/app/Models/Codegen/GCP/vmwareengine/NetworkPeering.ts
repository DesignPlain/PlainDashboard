import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringArgs {
  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  VmwareEngineNetwork?: string;

  // True if custom routes are imported from the peered network; false otherwise.
  ImportCustomRoutes?: boolean;

  // True if custom routes are imported from the peered network; false otherwise.
  ImportCustomRoutesWithPublicIp?: boolean;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  PeerNetworkType?: string;

  /*
The ID of the Network Peering.


- - -
*/
  Name?: string;

  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  PeerNetwork?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // User-provided description for this network peering.
  Description?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  ExportCustomRoutes?: boolean;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  ExportCustomRoutesWithPublicIp?: boolean;
}
export class NetworkPeering extends Resource {
  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  public PeerNetwork?: string;

  // Details about the current state of the network peering.
  public StateDetails?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  public VmwareEngineNetwork?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // True if custom routes are imported from the peered network; false otherwise.
  public ImportCustomRoutes?: boolean;

  // True if custom routes are imported from the peered network; false otherwise.
  public ImportCustomRoutesWithPublicIp?: boolean;

  /*
The ID of the Network Peering.


- - -
*/
  public Name?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  public ExportCustomRoutes?: boolean;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  public ExportCustomRoutesWithPublicIp?: boolean;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  public PeerNetworkType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
State of the network peering.
This field has a value of 'ACTIVE' when there's a matching configuration in the peer network.
New values may be added to this enum when appropriate.
*/
  public State?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // User-provided description for this network peering.
  public Description?: string;

  /*
The canonical name of the VMware Engine network in the form:
projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  public VmwareEngineNetworkCanonical?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ExportCustomRoutes",
        "True if custom routes are exported to the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ExportCustomRoutesWithPublicIp",
        "True if all subnet routes with a public IP address range are exported; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "VmwareEngineNetwork",
        "The relative resource name of the VMware Engine network. Specify the name in the following form:\nprojects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}\ncan either be a project number or a project ID.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportCustomRoutes",
        "True if custom routes are imported from the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerNetwork",
        "The relative resource name of the network to peer with a standard VMware Engine network.\nThe provided network can be a consumer VPC network or another standard VMware Engine network.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this network peering.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ImportCustomRoutesWithPublicIp",
        "True if custom routes are imported from the peered network; false otherwise.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerNetworkType",
        "The type of the network to peer with the VMware Engine network.\nPossible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the Network Peering.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
