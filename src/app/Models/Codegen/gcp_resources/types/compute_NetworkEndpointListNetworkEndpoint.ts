import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_NetworkEndpointListNetworkEndpoint {
  /*
The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone as the network endpoint group.
*/
  instance?: string;

  /*
IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).
*/
  ipAddress?: string;

  /*
Port number of network endpoint.
--Note-- `port` is required unless the Network Endpoint Group is created
with the type of `GCE_VM_IP`
*/
  port?: number;
}

export function compute_NetworkEndpointListNetworkEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instance",
      "The name for a specific VM instance that the IP address belongs to.\nThis is required for network endpoints of type GCE_VM_IP_PORT.\nThe instance must be in the same zone as the network endpoint group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "IPv4 address of network endpoint. The IP address must belong\nto a VM in GCE (either the primary IP or as part of an aliased IP\nrange).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number of network endpoint.\n**Note** `port` is required unless the Network Endpoint Group is created\nwith the type of `GCE_VM_IP`",
      [],
      false,
      false,
    ),
  ];
}
