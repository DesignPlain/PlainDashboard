import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkEndpointArgs {
  // Zone where the containing network endpoint group is located.
  Zone?: string;

  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.
*/
  Instance?: string;

  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  IpAddress?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  NetworkEndpointGroup?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class NetworkEndpoint extends Resource {
  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  public IpAddress?: string;

  /*
The network endpoint group this endpoint is part of.


- - -
*/
  public NetworkEndpointGroup?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  public Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Zone where the containing network endpoint group is located.
  public Zone?: string;

  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.
*/
  public Instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name for a specific VM instance that the IP address belongs to.\nThis is required for network endpoints of type GCE_VM_IP_PORT.\nThe instance must be in the same zone of network endpoint group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpAddress",
        "IPv4 address of network endpoint. The IP address must belong\nto a VM in GCE (either the primary IP or as part of an aliased IP\nrange).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkEndpointGroup",
        "The network endpoint group this endpoint is part of.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "Port number of network endpoint.\n**Note** `port` is required unless the Network Endpoint Group is created\nwith the type of `GCE_VM_IP`",
        [],
        false,
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
        "Zone",
        "Zone where the containing network endpoint group is located.",
        [],
        false,
        true,
      ),
    ];
  }
}
