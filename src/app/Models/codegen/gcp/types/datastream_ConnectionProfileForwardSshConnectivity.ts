import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datastream_ConnectionProfileForwardSshConnectivity {
  // Hostname for the SSH tunnel.
  hostname?: string;

  /*
SSH password.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Port for the SSH tunnel.
  port?: number;

  /*
SSH private key.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  privateKey?: string;

  // Username for the SSH tunnel.
  username?: string;
}

export function datastream_ConnectionProfileForwardSshConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostname',
      'Hostname for the SSH tunnel.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'SSH password.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Port for the SSH tunnel.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'privateKey',
      'SSH private key.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'Username for the SSH tunnel.',
      () => [],
      true,
      false,
    ),
  ];
}
