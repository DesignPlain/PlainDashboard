import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_getEndpointRedisSetting {
  //
  sslCaCertificateArn?: string;

  //
  sslSecurityProtocol?: string;

  //
  authPassword?: string;

  //
  authType?: string;

  //
  authUserName?: string;

  //
  port?: number;

  //
  serverName?: string;
}

export function dms_getEndpointRedisSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authUserName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "port", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "serverName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslSecurityProtocol",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authPassword",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "authType", "", () => [], true, false),
  ];
}
