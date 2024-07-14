import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface identityplatform_ConfigQuotaSignUpQuotaConfig {
  // A sign up APIs quota that customers can override temporarily.
  quota?: number;

  // How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".
  quotaDuration?: string;

  // When this quota will take affect.
  startTime?: string;
}

export function identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "quotaDuration",
      'How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "When this quota will take affect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "quota",
      "A sign up APIs quota that customers can override temporarily.",
      [],
      false,
      false,
    ),
  ];
}
