import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkEndpointArgs {
  /*
The network endpoint group this endpoint is part of.


- - -
*/
  networkEndpointGroup?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Zone where the containing network endpoint group is located.
  zone?: string;

  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.
*/
  instance?: string;

  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  ipAddress?: string;
}
export class NetworkEndpoint extends Resource {
  // Zone where the containing network endpoint group is located.
  public zone?: string;

  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.
*/
  public instance?: string;

  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  public ipAddress?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  public networkEndpointGroup?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  public port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkEndpointGroup",
        "The network endpoint group this endpoint is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "Port number of network endpoint.\n**Note** `port` is required unless the Network Endpoint Group is created\nwith the type of `GCE_VM_IP`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "Zone where the containing network endpoint group is located.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name for a specific VM instance that the IP address belongs to.\nThis is required for network endpoints of type GCE_VM_IP_PORT.\nThe instance must be in the same zone of network endpoint group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "IPv4 address of network endpoint. The IP address must belong\nto a VM in GCE (either the primary IP or as part of an aliased IP\nrange).",
        [],
        true,
        true,
      ),
    ];
  }
}
