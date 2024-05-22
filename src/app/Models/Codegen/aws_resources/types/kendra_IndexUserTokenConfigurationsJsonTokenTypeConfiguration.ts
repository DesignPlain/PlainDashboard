import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration {
  // The group attribute field. Minimum length of 1. Maximum length of 2048.
  groupAttributeField?: string;

  // The user name attribute field. Minimum length of 1. Maximum length of 2048.
  userNameAttributeField?: string;
}

export function kendra_IndexUserTokenConfigurationsJsonTokenTypeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "groupAttributeField",
      "The group attribute field. Minimum length of 1. Maximum length of 2048.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userNameAttributeField",
      "The user name attribute field. Minimum length of 1. Maximum length of 2048.",
      [],
      true,
      false,
    ),
  ];
}
