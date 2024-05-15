import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vmwareengine_PrivateCloudManagementCluster,
  Vmwareengine_PrivateCloudManagementCluster_GetTypes,
} from "../types/Vmwareengine_PrivateCloudManagementCluster";
import {
  Vmwareengine_PrivateCloudNetworkConfig,
  Vmwareengine_PrivateCloudNetworkConfig_GetTypes,
} from "../types/Vmwareengine_PrivateCloudNetworkConfig";
import {
  Vmwareengine_PrivateCloudNsx,
  Vmwareengine_PrivateCloudNsx_GetTypes,
} from "../types/Vmwareengine_PrivateCloudNsx";
import {
  Vmwareengine_PrivateCloudVcenter,
  Vmwareengine_PrivateCloudVcenter_GetTypes,
} from "../types/Vmwareengine_PrivateCloudVcenter";
import {
  Vmwareengine_PrivateCloudHcx,
  Vmwareengine_PrivateCloudHcx_GetTypes,
} from "../types/Vmwareengine_PrivateCloudHcx";

export interface PrivateCloudArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Initial type of the private cloud.
Possible values are: `STANDARD`, `TIME_LIMITED`.
*/
  Type?: string;

  // User-provided description for this private cloud.
  Description?: string;

  // The location where the PrivateCloud should reside.
  Location?: string;

  /*
The management cluster for this private cloud. This used for creating and managing the default cluster.
Structure is documented below.
*/
  ManagementCluster?: Vmwareengine_PrivateCloudManagementCluster;

  // The ID of the PrivateCloud.
  Name?: string;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  NetworkConfig?: Vmwareengine_PrivateCloudNetworkConfig;
}
export class PrivateCloud extends Resource {
  // User-provided description for this private cloud.
  public Description?: string;

  // The location where the PrivateCloud should reside.
  public Location?: string;

  // The ID of the PrivateCloud.
  public Name?: string;

  /*
Details about a NSX Manager appliance.
Structure is documented below.
*/
  public Nsxes?: Array<Vmwareengine_PrivateCloudNsx>;

  /*
Initial type of the private cloud.
Possible values are: `STANDARD`, `TIME_LIMITED`.
*/
  public Type?: string;

  /*
Details about a vCenter Server management appliance.
Structure is documented below.
*/
  public Vcenters?: Array<Vmwareengine_PrivateCloudVcenter>;

  /*
Details about a HCX Cloud Manager appliance.
Structure is documented below.
*/
  public Hcxes?: Array<Vmwareengine_PrivateCloudHcx>;

  /*
The management cluster for this private cloud. This used for creating and managing the default cluster.
Structure is documented below.
*/
  public ManagementCluster?: Vmwareengine_PrivateCloudManagementCluster;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  public NetworkConfig?: Vmwareengine_PrivateCloudNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
State of the appliance.
Possible values are: `ACTIVE`, `CREATING`.
*/
  public State?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this private cloud.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the PrivateCloud should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ManagementCluster",
        "The management cluster for this private cloud. This used for creating and managing the default cluster.\nStructure is documented below.",
        Vmwareengine_PrivateCloudManagementCluster_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the PrivateCloud.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Network configuration in the consumer project with which the peering has to be done.\nStructure is documented below.",
        Vmwareengine_PrivateCloudNetworkConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Initial type of the private cloud.\nPossible values are: `STANDARD`, `TIME_LIMITED`.",
        [],
        false,
        true,
      ),
    ];
  }
}
