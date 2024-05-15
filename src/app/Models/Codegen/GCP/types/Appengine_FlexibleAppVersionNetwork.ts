import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionNetwork {
  // Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.
  Name?: string;

  // Enable session affinity.
  SessionAffinity?: boolean;

  /*
Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.
If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
*/
  Subnetwork?: string;

  // List of ports, or port pairs, to forward from the virtual machine to the application container.
  ForwardedPorts?: Array<string>;

  // Tag to apply to the instance during creation.
  InstanceTag?: string;
}

export function Appengine_FlexibleAppVersionNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceTag",
      "Tag to apply to the instance during creation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "SessionAffinity",
      "Enable session affinity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      "Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.\nIf the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.\nIf the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.\nIf the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.\nIf specified, the subnetwork must exist in the same region as the App Engine flexible environment application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ForwardedPorts",
      "List of ports, or port pairs, to forward from the virtual machine to the application container.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
