import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkmanagement_ConnectivityTestDestination {
  // A Compute Engine instance URI.
  Instance?: string;

  /*
The IP address of the endpoint, which can be an external or
internal IP. An IPv6 address is only allowed when the test's
destination is a global load balancer VIP.
*/
  IpAddress?: string;

  // A Compute Engine network URI.
  Network?: string;

  /*
The IP protocol port of the endpoint. Only applicable when
protocol is TCP or UDP.
*/
  Port?: number;

  /*
Project ID where the endpoint is located. The Project ID can be
derived from the URI if you provide a VM instance or network URI.
The following are two cases where you must provide the project ID:
1. Only the IP address is specified, and the IP address is within
a GCP project. 2. When you are using Shared VPC and the IP address
that you provide is from the service project. In this case, the
network that the IP address resides in is defined in the host
project.

- - -
*/
  ProjectId?: string;
}

export function Networkmanagement_ConnectivityTestDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Instance",
      "A Compute Engine instance URI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpAddress",
      "The IP address of the endpoint, which can be an external or\ninternal IP. An IPv6 address is only allowed when the test's\ndestination is a global load balancer VIP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "A Compute Engine network URI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The IP protocol port of the endpoint. Only applicable when\nprotocol is TCP or UDP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "Project ID where the endpoint is located. The Project ID can be\nderived from the URI if you provide a VM instance or network URI.\nThe following are two cases where you must provide the project ID:\n1. Only the IP address is specified, and the IP address is within\na GCP project. 2. When you are using Shared VPC and the IP address\nthat you provide is from the service project. In this case, the\nnetwork that the IP address resides in is defined in the host\nproject.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
