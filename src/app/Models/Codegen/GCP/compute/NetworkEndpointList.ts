import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_NetworkEndpointListNetworkEndpoint,
  compute_NetworkEndpointListNetworkEndpoint_GetTypes,
} from "../types/compute_NetworkEndpointListNetworkEndpoint";

export interface NetworkEndpointListArgs {
  /*
The network endpoint group these endpoints are part of.


- - -
*/
  networkEndpointGroup?: string;

  /*
The network endpoints to be added to the enclosing network endpoint group
(NEG). Each endpoint specifies an IP address and port, along with
additional information depending on the NEG type.
Structure is documented below.
*/
  networkEndpoints?: Array<compute_NetworkEndpointListNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Zone where the containing network endpoint group is located.
  zone?: string;
}
export class NetworkEndpointList extends Resource {
  /*
The network endpoint group these endpoints are part of.


- - -
*/
  public networkEndpointGroup?: string;

  /*
The network endpoints to be added to the enclosing network endpoint group
(NEG). Each endpoint specifies an IP address and port, along with
additional information depending on the NEG type.
Structure is documented below.
*/
  public networkEndpoints?: Array<compute_NetworkEndpointListNetworkEndpoint>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Zone where the containing network endpoint group is located.
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "zone",
        "Zone where the containing network endpoint group is located.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkEndpointGroup",
        "The network endpoint group these endpoints are part of.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "networkEndpoints",
        "The network endpoints to be added to the enclosing network endpoint group\n(NEG). Each endpoint specifies an IP address and port, along with\nadditional information depending on the NEG type.\nStructure is documented below.",
        compute_NetworkEndpointListNetworkEndpoint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
