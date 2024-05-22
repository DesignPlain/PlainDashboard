import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointRedisSettings {
  // Transmission Control Protocol (TCP) port for the endpoint.
  port?: number;

  // Fully qualified domain name of the endpoint.
  serverName?: string;

  // The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
  sslCaCertificateArn?: string;

  // The plaintext option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database. Options include `plaintext`, `ssl-encryption`. The default is `ssl-encryption`.
  sslSecurityProtocol?: string;

  // The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.
  authPassword?: string;

  // The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `auth_password` value to be provided. The `auth-role` option requires `auth_user_name` and `auth_password` values to be provided.
  authType?: string;

  // The username provided with the `auth-role` option of the AuthType setting for a Redis target endpoint.
  authUserName?: string;
}

export function dms_EndpointRedisSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Transmission Control Protocol (TCP) port for the endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serverName",
      "Fully qualified domain name of the endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslSecurityProtocol",
      "The plaintext option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database. Options include `plaintext`, `ssl-encryption`. The default is `ssl-encryption`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authPassword",
      "The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authType",
      "The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `auth_password` value to be provided. The `auth-role` option requires `auth_user_name` and `auth_password` values to be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authUserName",
      "The username provided with the `auth-role` option of the AuthType setting for a Redis target endpoint.",
      [],
      false,
      false,
    ),
  ];
}
