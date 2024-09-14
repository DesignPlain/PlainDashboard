import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity {
  // Required. Hostname for the SSH tunnel.
  hostname?: string;

  /*
Input only. SSH password. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  // Port for the SSH tunnel, default value is 22.
  port?: number;

  /*
Input only. SSH private key. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  privateKey?: string;

  // Required. Username for the SSH tunnel.
  username?: string;
}

export function databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostname",
      "Required. Hostname for the SSH tunnel.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Input only. SSH password. Only one of `password` and `private_key` can be configured.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port for the SSH tunnel, default value is 22.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateKey",
      "Input only. SSH private key. Only one of `password` and `private_key` can be configured.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "username",
      "Required. Username for the SSH tunnel.",
      () => [],
      true,
      false,
    ),
  ];
}
