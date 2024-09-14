import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ServerlessClusterClientAuthenticationSasl,
  msk_ServerlessClusterClientAuthenticationSasl_GetTypes,
} from "./msk_ServerlessClusterClientAuthenticationSasl";

export interface msk_ServerlessClusterClientAuthentication {
  // Details for client authentication using SASL. See below.
  sasl?: msk_ServerlessClusterClientAuthenticationSasl;
}

export function msk_ServerlessClusterClientAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sasl",
      "Details for client authentication using SASL. See below.",
      () => msk_ServerlessClusterClientAuthenticationSasl_GetTypes(),
      true,
      true,
    ),
  ];
}
