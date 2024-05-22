import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_ExperienceConfigurationUserIdentityConfiguration {
  // The AWS SSO field name that contains the identifiers of your users, such as their emails.
  identityAttributeName?: string;
}

export function kendra_ExperienceConfigurationUserIdentityConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identityAttributeName",
      "The AWS SSO field name that contains the identifiers of your users, such as their emails.",
      [],
      true,
      false,
    ),
  ];
}
