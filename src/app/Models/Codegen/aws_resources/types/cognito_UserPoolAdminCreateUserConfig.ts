import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate,
  cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes,
} from "./cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate";

export interface cognito_UserPoolAdminCreateUserConfig {
  // Set to True if only the administrator is allowed to create user profiles. Set to False if users can sign themselves up via an app.
  allowAdminCreateUserOnly?: boolean;

  // Invite message template structure. Detailed below.
  inviteMessageTemplate?: cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate;
}

export function cognito_UserPoolAdminCreateUserConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowAdminCreateUserOnly",
      "Set to True if only the administrator is allowed to create user profiles. Set to False if users can sign themselves up via an app.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inviteMessageTemplate",
      "Invite message template structure. Detailed below.",
      cognito_UserPoolAdminCreateUserConfigInviteMessageTemplate_GetTypes(),
      false,
      false,
    ),
  ];
}
