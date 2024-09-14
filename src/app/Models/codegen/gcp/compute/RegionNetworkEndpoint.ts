import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RegionNetworkEndpointArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Region where the containing network endpoint group is located.
  region?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  regionNetworkEndpointGroup?: string;

  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  fqdn?: string;

  /*
IPv4 address external endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
*/
  ipAddress?: string;

  // Port number of network endpoint.
  port?: number;
}
export class RegionNetworkEndpoint extends DS_Resource {
  /*
The network endpoint group this endpoint is part of.


- - -
*/
  public regionNetworkEndpointGroup?: string;

  /*
Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.
*/
  public fqdn?: string;

  /*
IPv4 address external endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.
*/
  public ipAddress?: string;

  // Port number of network endpoint.
  public port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Region where the containing network endpoint group is located.
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where the containing network endpoint group is located.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "regionNetworkEndpointGroup",
        "The network endpoint group this endpoint is part of.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fqdn",
        "Fully qualified domain name of network endpoint.\nThis can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "IPv4 address external endpoint.\nThis can only be specified when network_endpoint_type of the NEG is INTERNET_IP_PORT.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port number of network endpoint.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
