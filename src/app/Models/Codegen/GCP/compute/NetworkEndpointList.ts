import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NetworkEndpointListNetworkEndpoint } from "../types/NetworkEndpointListNetworkEndpoint";

export interface NetworkEndpointListArgs {
  /*
The network endpoint group these endpoints are part of.


- - -
*/
  NetworkEndpointGroup?: string;

  /*
The network endpoints to be added to the enclosing network endpoint group
(NEG). Each endpoint specifies an IP address and port, along with
additional information depending on the NEG type.
Structure is documented below.
*/
  NetworkEndpoints?: Array<NetworkEndpointListNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Zone where the containing network endpoint group is located.
  Zone?: string;
}
export class NetworkEndpointList extends Resource {
  /*
The network endpoint group these endpoints are part of.


- - -
*/
  public NetworkEndpointGroup?: string;

  /*
The network endpoints to be added to the enclosing network endpoint group
(NEG). Each endpoint specifies an IP address and port, along with
additional information depending on the NEG type.
Structure is documented below.
*/
  public NetworkEndpoints?: Array<NetworkEndpointListNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Zone where the containing network endpoint group is located.
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NetworkEndpointGroup",
        "The network endpoint group these endpoints are part of.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NetworkEndpoints",
        "The network endpoints to be added to the enclosing network endpoint group\n(NEG). Each endpoint specifies an IP address and port, along with\nadditional information depending on the NEG type.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "Zone where the containing network endpoint group is located.",
      ),
    ];
  }
}
