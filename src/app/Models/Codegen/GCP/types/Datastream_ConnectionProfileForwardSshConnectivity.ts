import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datastream_ConnectionProfileForwardSshConnectivity {
  // Hostname for the SSH tunnel.
  Hostname?: string;

  /*
SSH password.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the SSH tunnel.
  Port?: number;

  /*
SSH private key.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PrivateKey?: string;

  // Username for the SSH tunnel.
  Username?: string;
}

export function Datastream_ConnectionProfileForwardSshConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port for the SSH tunnel.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateKey",
      "SSH private key.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for the SSH tunnel.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Hostname for the SSH tunnel.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "SSH password.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
  ];
}
