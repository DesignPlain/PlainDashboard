import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vmwareengine_NetworkVpcNetwork,
  Vmwareengine_NetworkVpcNetwork_GetTypes,
} from "../types/Vmwareengine_NetworkVpcNetwork";

export interface NetworkArgs {
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

  // User-provided description for this VMware Engine network.
  Description?: string;

  // The location where the VMwareEngineNetwork should reside.
  Location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  Name?: string;
}
export class Network extends Resource {
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
  public VpcNetworks?: Array<Vmwareengine_NetworkVpcNetwork>;

  // User-provided description for this VMware Engine network.
  public Description?: string;

  // The location where the VMwareEngineNetwork should reside.
  public Location?: string;

  /*
The ID of the VMwareEngineNetwork.


- - -
*/
  public Name?: string;

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
        InputType.String,
        "Type",
        "VMware Engine network type.\nPossible values are: `LEGACY`, `STANDARD`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this VMware Engine network.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the VMwareEngineNetwork should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the VMwareEngineNetwork.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
