import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionLockConfig {
  // Indicates whether or not the connection is locked.
  Locked?: boolean;

  // Describes why a connection is locked.
  Reason?: string;
}

export function Integrationconnectors_ConnectionLockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Locked",
      "Indicates whether or not the connection is locked.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "Describes why a connection is locked.",
      [],
      false,
      false,
    ),
  ];
}
