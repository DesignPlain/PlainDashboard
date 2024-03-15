import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PrivateCloudNsx } from "../types/PrivateCloudNsx";
import { PrivateCloudVcenter } from "../types/PrivateCloudVcenter";
import { PrivateCloudHcx } from "../types/PrivateCloudHcx";
import { PrivateCloudManagementCluster } from "../types/PrivateCloudManagementCluster";
import { PrivateCloudNetworkConfig } from "../types/PrivateCloudNetworkConfig";

export interface PrivateCloudArgs {
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
  ManagementCluster?: PrivateCloudManagementCluster;

  // The ID of the PrivateCloud.
  Name?: string;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  NetworkConfig?: PrivateCloudNetworkConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class PrivateCloud extends Resource {
  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
The management cluster for this private cloud. This used for creating and managing the default cluster.
Structure is documented below.
*/
  public ManagementCluster?: PrivateCloudManagementCluster;

  // The ID of the PrivateCloud.
  public Name?: string;

  /*
Details about a NSX Manager appliance.
Structure is documented below.
*/
  public Nsxes?: Array<PrivateCloudNsx>;

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

  /*
Details about a vCenter Server management appliance.
Structure is documented below.
*/
  public Vcenters?: Array<PrivateCloudVcenter>;

  // User-provided description for this private cloud.
  public Description?: string;

  /*
Details about a HCX Cloud Manager appliance.
Structure is documented below.
*/
  public Hcxes?: Array<PrivateCloudHcx>;

  // The location where the PrivateCloud should reside.
  public Location?: string;

  /*
Network configuration in the consumer project with which the peering has to be done.
Structure is documented below.
*/
  public NetworkConfig?: PrivateCloudNetworkConfig;

  /*
Initial type of the private cloud.
Possible values are: `STANDARD`, `TIME_LIMITED`.
*/
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ManagementCluster",
        "The management cluster for this private cloud. This used for creating and managing the default cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the PrivateCloud.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configuration in the consumer project with which the peering has to be done.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Initial type of the private cloud.\nPossible values are: `STANDARD`, `TIME_LIMITED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this private cloud.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the PrivateCloud should reside.",
      ),
    ];
  }
}
