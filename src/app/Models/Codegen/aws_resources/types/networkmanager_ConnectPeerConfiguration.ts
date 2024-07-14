import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkmanager_ConnectPeerConfigurationBgpConfiguration,
  networkmanager_ConnectPeerConfigurationBgpConfiguration_GetTypes,
} from "./networkmanager_ConnectPeerConfigurationBgpConfiguration";

export interface networkmanager_ConnectPeerConfiguration {
  //
  bgpConfigurations?: Array<networkmanager_ConnectPeerConfigurationBgpConfiguration>;

  // A Connect peer core network address.
  coreNetworkAddress?: string;

  // The inside IP addresses used for BGP peering. Required when the Connect attachment protocol is `GRE`. See `aws.networkmanager.ConnectAttachment` for details.
  insideCidrBlocks?: Array<string>;

  /*
The Connect peer address.

The following arguments are optional:
*/
  peerAddress?: string;

  //
  protocol?: string;
}

export function networkmanager_ConnectPeerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "peerAddress",
      "The Connect peer address.\n\nThe following arguments are optional:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "bgpConfigurations",
      "",
      networkmanager_ConnectPeerConfigurationBgpConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "coreNetworkAddress",
      "A Connect peer core network address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "insideCidrBlocks",
      "The inside IP addresses used for BGP peering. Required when the Connect attachment protocol is `GRE`. See `aws.networkmanager.ConnectAttachment` for details.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
