import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkPeeringArgs {
  /*
The ID of the Network Peering.


- - -
*/
  Name?: string;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  PeerNetworkType?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  VmwareEngineNetwork?: string;

  // User-provided description for this network peering.
  Description?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  ExportCustomRoutes?: boolean;

  // True if custom routes are imported from the peered network; false otherwise.
  ImportCustomRoutes?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  ExportCustomRoutesWithPublicIp?: boolean;

  // True if custom routes are imported from the peered network; false otherwise.
  ImportCustomRoutesWithPublicIp?: boolean;

  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  PeerNetwork?: string;
}
export class NetworkPeering extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The canonical name of the VMware Engine network in the form:
projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  public VmwareEngineNetworkCanonical?: string;

  // True if custom routes are exported to the peered network; false otherwise.
  public ExportCustomRoutes?: boolean;

  // True if all subnet routes with a public IP address range are exported; false otherwise.
  public ExportCustomRoutesWithPublicIp?: boolean;

  /*
The ID of the Network Peering.


- - -
*/
  public Name?: string;

  /*
The relative resource name of the network to peer with a standard VMware Engine network.
The provided network can be a consumer VPC network or another standard VMware Engine network.
*/
  public PeerNetwork?: string;

  // True if custom routes are imported from the peered network; false otherwise.
  public ImportCustomRoutes?: boolean;

  /*
The type of the network to peer with the VMware Engine network.
Possible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.
*/
  public PeerNetworkType?: string;

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

  // User-provided description for this network peering.
  public Description?: string;

  // True if custom routes are imported from the peered network; false otherwise.
  public ImportCustomRoutesWithPublicIp?: boolean;

  /*
State of the network peering.
This field has a value of 'ACTIVE' when there's a matching configuration in the peer network.
New values may be added to this enum when appropriate.
*/
  public State?: string;

  // Details about the current state of the network peering.
  public StateDetails?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "ExportCustomRoutes",
        "True if custom routes are exported to the peered network; false otherwise.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ImportCustomRoutes",
        "True if custom routes are imported from the peered network; false otherwise.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ExportCustomRoutesWithPublicIp",
        "True if all subnet routes with a public IP address range are exported; false otherwise.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerNetwork",
        "The relative resource name of the network to peer with a standard VMware Engine network.\nThe provided network can be a consumer VPC network or another standard VMware Engine network.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VmwareEngineNetwork",
        "The relative resource name of the VMware Engine network. Specify the name in the following form:\nprojects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}\ncan either be a project number or a project ID.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeerNetworkType",
        "The type of the network to peer with the VMware Engine network.\nPossible values are: `STANDARD`, `VMWARE_ENGINE_NETWORK`, `PRIVATE_SERVICES_ACCESS`, `NETAPP_CLOUD_VOLUMES`, `THIRD_PARTY_SERVICE`, `DELL_POWERSCALE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this network peering.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ImportCustomRoutesWithPublicIp",
        "True if custom routes are imported from the peered network; false otherwise.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the Network Peering.\n\n\n- - -",
      ),
    ];
  }
}
