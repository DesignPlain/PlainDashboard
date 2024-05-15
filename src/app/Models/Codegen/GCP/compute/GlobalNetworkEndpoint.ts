import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GlobalNetworkEndpointArgs {
  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  Fqdn?: string;

  /*
The global network endpoint group this endpoint is part of.


- - -
*/
  GlobalNetworkEndpointGroup?: string;

  // IPv4 address external endpoint.
  IpAddress?: string;

  // Port number of the external endpoint.
  Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class GlobalNetworkEndpoint extends Resource {
  /*
The global network endpoint group this endpoint is part of.


- - -
*/
  public GlobalNetworkEndpointGroup?: string;

  // IPv4 address external endpoint.
  public IpAddress?: string;

  // Port number of the external endpoint.
  public Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  public Fqdn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Fqdn",
        "Fully qualified domain name of network endpoint.\nThis can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "GlobalNetworkEndpointGroup",
        "The global network endpoint group this endpoint is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpAddress",
        "IPv4 address external endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "Port number of the external endpoint.",
        [],
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
    ];
  }
}
