import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface transfer_getConnectorSftpConfig {
  // List of the public portions of the host keys that are used to identify the servers the connector is connected to.
  trustedHostKeys?: Array<string>;

  // Identifer for the secret in AWS Secrets Manager that contains the SFTP user's private key, and/or password.
  userSecretId?: string;
}

export function transfer_getConnectorSftpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userSecretId',
      "Identifer for the secret in AWS Secrets Manager that contains the SFTP user's private key, and/or password.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'trustedHostKeys',
      'List of the public portions of the host keys that are used to identify the servers the connector is connected to.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
