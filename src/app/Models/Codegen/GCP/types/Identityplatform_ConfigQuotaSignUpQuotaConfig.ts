import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigQuotaSignUpQuotaConfig {
  // A sign up APIs quota that customers can override temporarily.
  Quota?: number;

  // How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".
  QuotaDuration?: string;

  // When this quota will take affect.
  StartTime?: string;
}

export function Identityplatform_ConfigQuotaSignUpQuotaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Quota",
      "A sign up APIs quota that customers can override temporarily.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "QuotaDuration",
      'How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "When this quota will take affect.",
      [],
      false,
      false,
    ),
  ];
}
