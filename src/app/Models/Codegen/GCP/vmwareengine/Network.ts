import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NetworkVpcNetwork } from "../types/NetworkVpcNetwork";

export interface NetworkArgs {
  // User-provided description for this VMware Engine network.
  Description?: string;

  // The location where the VMwareEngineNetwork should reside.
  Location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  Type?: string;
}
export class Network extends Resource {
  // User-provided description for this VMware Engine network.
  public Description?: string;

  // The location where the VMwareEngineNetwork should reside.
  public Location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // State of the VMware Engine network.
  public State?: string;

  /*
VMware Engine network type.
Possible values are: `LEGACY`, `STANDARD`.
*/
  public Type?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
VMware Engine service VPC networks that provide connectivity from a private cloud to customer projects,
the internet, and other Google Cloud services.
Structure is documented below.
*/
  public VpcNetworks?: Array<NetworkVpcNetwork>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this VMware Engine network.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the VMwareEngineNetwork should reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the VMwareEngineNetwork.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "VMware Engine network type.\nPossible values are: `LEGACY`, `STANDARD`.",
      ),
    ];
  }
}
