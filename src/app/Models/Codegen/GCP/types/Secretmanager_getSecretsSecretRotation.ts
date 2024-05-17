import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Secretmanager_getSecretsSecretRotation {
  // Timestamp in UTC at which the Secret is scheduled to rotate.
  NextRotationTime?: string;

  // The Duration between rotation notifications.
  RotationPeriod?: string;
}

export function Secretmanager_getSecretsSecretRotation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RotationPeriod",
      "The Duration between rotation notifications.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextRotationTime",
      "Timestamp in UTC at which the Secret is scheduled to rotate.",
      [],
      true,
      false,
    ),
  ];
}
