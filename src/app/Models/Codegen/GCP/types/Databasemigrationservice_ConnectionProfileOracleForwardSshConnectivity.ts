import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity {
  // Required. Hostname for the SSH tunnel.
  Hostname?: string;

  /*
Input only. SSH password. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the SSH tunnel, default value is 22.
  Port?: number;

  /*
Input only. SSH private key. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PrivateKey?: string;

  // Required. Username for the SSH tunnel.
  Username?: string;
}

export function Databasemigrationservice_ConnectionProfileOracleForwardSshConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Input only. SSH password. Only one of `password` and `private_key` can be configured.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port for the SSH tunnel, default value is 22.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateKey",
      "Input only. SSH private key. Only one of `password` and `private_key` can be configured.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Required. Username for the SSH tunnel.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Required. Hostname for the SSH tunnel.",
      [],
      true,
      false,
    ),
  ];
}
