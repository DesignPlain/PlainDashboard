import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      false,
      false,
    ),
  ];
}
