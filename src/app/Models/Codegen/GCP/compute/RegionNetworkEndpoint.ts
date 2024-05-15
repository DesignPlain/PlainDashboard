import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RegionNetworkEndpointArgs {
  /*
IPv4 address external endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
*/
  IpAddress?: string;

  // Port number of network endpoint.
  Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Region where the containing network endpoint group is located.
  Region?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  RegionNetworkEndpointGroup?: string;

  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  Fqdn?: string;
}
export class RegionNetworkEndpoint extends Resource {
  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  public Fqdn?: string;

  /*
IPv4 address external endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
*/
  public IpAddress?: string;

  // Port number of network endpoint.
  public Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Region where the containing network endpoint group is located.
  public Region?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  public RegionNetworkEndpointGroup?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IpAddress",
        "IPv4 address external endpoint.\nThis can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "Port number of network endpoint.",
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
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the containing network endpoint group is located.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "RegionNetworkEndpointGroup",
        "The network endpoint group this endpoint is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Fqdn",
        "Fully qualified domain name of network endpoint.\nThis can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.",
        [],
        false,
        true,
      ),
    ];
  }
}
