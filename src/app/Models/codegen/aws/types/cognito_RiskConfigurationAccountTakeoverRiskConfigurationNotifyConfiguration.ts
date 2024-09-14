import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail";
import {
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail,
  cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail_GetTypes,
} from "./cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail";

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration {
  // Email template used when a detected risk event is blocked. See notify email type below.
  blockEmail?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;

  // The email address that is sending the email. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.
  from?: string;

  // The multi-factor authentication (MFA) email template used when MFA is challenged as part of a detected risk. See notify email type below.
  mfaEmail?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;

  // The email template used when a detected risk event is allowed. See notify email type below.
  noActionEmail?: cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;

  // The destination to which the receiver of an email should reply to.
  replyTo?: string;

  // The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the From parameter.
  sourceArn?: string;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "blockEmail",
      "Email template used when a detected risk event is blocked. See notify email type below.",
      () =>
        cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "from",
      "The email address that is sending the email. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mfaEmail",
      "The multi-factor authentication (MFA) email template used when MFA is challenged as part of a detected risk. See notify email type below.",
      () =>
        cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "noActionEmail",
      "The email template used when a detected risk event is allowed. See notify email type below.",
      () =>
        cognito_RiskConfigurationAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "replyTo",
      "The destination to which the receiver of an email should reply to.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceArn",
      "The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the From parameter.",
      () => [],
      true,
      false,
    ),
  ];
}
