import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_ProxyAuth {
  // The type of authentication that the proxy uses for connections from the proxy to the underlying database. One of `SECRETS`.
  authScheme?: string;

  // The type of authentication the proxy uses for connections from clients. Valid values are `MYSQL_NATIVE_PASSWORD`, `POSTGRES_SCRAM_SHA_256`, `POSTGRES_MD5`, and `SQL_SERVER_AUTHENTICATION`.
  clientPasswordAuthType?: string;

  // A user-specified description about the authentication used by a proxy to log in as a specific database user.
  description?: string;

  // Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy. One of `DISABLED`, `REQUIRED`.
  iamAuth?: string;

  // The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
  secretArn?: string;

  // The name of the database user to which the proxy connects.
  username?: string;
}

export function rds_ProxyAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'authScheme',
      'The type of authentication that the proxy uses for connections from the proxy to the underlying database. One of `SECRETS`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientPasswordAuthType',
      'The type of authentication the proxy uses for connections from clients. Valid values are `MYSQL_NATIVE_PASSWORD`, `POSTGRES_SCRAM_SHA_256`, `POSTGRES_MD5`, and `SQL_SERVER_AUTHENTICATION`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'A user-specified description about the authentication used by a proxy to log in as a specific database user.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'iamAuth',
      'Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy. One of `DISABLED`, `REQUIRED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretArn',
      'The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'The name of the database user to which the proxy connects.',
      () => [],
      false,
      false,
    ),
  ];
}
