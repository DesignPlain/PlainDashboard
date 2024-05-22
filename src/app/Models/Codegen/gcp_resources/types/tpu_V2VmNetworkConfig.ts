import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface tpu_V2VmNetworkConfig {
  /*
Allows the TPU node to send and receive packets with non-matching destination or source
IPs. This is required if you plan to use the TPU workers to forward routes.
*/
  canIpForward?: boolean;

  /*
Indicates that external IP addresses would be associated with the TPU workers. If set to
false, the specified subnetwork or network should have Private Google Access enabled.
*/
  enableExternalIps?: boolean;

  /*
The name of the network for the TPU node. It must be a preexisting Google Compute Engine
network. If both network and subnetwork are specified, the given subnetwork must belong
to the given network. If network is not specified, it will be looked up from the
subnetwork if one is provided, or otherwise use "default".
*/
  network?: string;

  /*
The name of the subnetwork for the TPU node. It must be a preexisting Google Compute
Engine subnetwork. If both network and subnetwork are specified, the given subnetwork
must belong to the given network. If subnetwork is not specified, the subnetwork with the
same name as the network will be used.
*/
  subnetwork?: string;
}

export function tpu_V2VmNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      'The name of the network for the TPU node. It must be a preexisting Google Compute Engine\nnetwork. If both network and subnetwork are specified, the given subnetwork must belong\nto the given network. If network is not specified, it will be looked up from the\nsubnetwork if one is provided, or otherwise use "default".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      "The name of the subnetwork for the TPU node. It must be a preexisting Google Compute\nEngine subnetwork. If both network and subnetwork are specified, the given subnetwork\nmust belong to the given network. If subnetwork is not specified, the subnetwork with the\nsame name as the network will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "canIpForward",
      "Allows the TPU node to send and receive packets with non-matching destination or source\nIPs. This is required if you plan to use the TPU workers to forward routes.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableExternalIps",
      "Indicates that external IP addresses would be associated with the TPU workers. If set to\nfalse, the specified subnetwork or network should have Private Google Access enabled.",
      [],
      false,
      true,
    ),
  ];
}
