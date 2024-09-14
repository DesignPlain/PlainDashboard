import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storagegateway_GatewayGatewayNetworkInterface {
  // The Internet Protocol version 4 (IPv4) address of the interface.
  ipv4Address?: string;
}

export function storagegateway_GatewayGatewayNetworkInterface_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipv4Address",
      "The Internet Protocol version 4 (IPv4) address of the interface.",
      () => [],
      false,
      false,
    ),
  ];
}
