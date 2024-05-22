import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_CaCertificateRegistrationConfig {
  // The name of the provisioning template.
  templateName?: string;

  // The ARN of the role.
  roleArn?: string;

  // The template body.
  templateBody?: string;
}

export function iot_CaCertificateRegistrationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "templateName",
      "The name of the provisioning template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "templateBody",
      "The template body.",
      [],
      false,
      false,
    ),
  ];
}
