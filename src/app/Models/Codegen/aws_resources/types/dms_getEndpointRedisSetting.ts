import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dms_getEndpointRedisSetting {
  //
  serverName?: string;

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
}

export function dms_getEndpointRedisSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "serverName", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslSecurityProtocol",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "authPassword", "", [], true, false),
    new DynamicUIProps(InputType.String, "authType", "", [], true, false),
    new DynamicUIProps(InputType.String, "authUserName", "", [], true, false),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
  ];
}
