import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
  // The email HTML body.
  htmlBody?: string;

  // The email subject.
  subject?: string;

  // The email text body.
  textBody?: string;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "htmlBody",
      "The email HTML body.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subject",
      "The email subject.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textBody",
      "The email text body.",
      [],
      true,
      false,
    ),
  ];
}
