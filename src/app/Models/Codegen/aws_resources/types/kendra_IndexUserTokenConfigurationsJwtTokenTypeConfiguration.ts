import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration {
  // The issuer of the token. Minimum length of 1. Maximum length of 65.
  issuer?: string;

  // The location of the key. Valid values are `URL` or `SECRET_MANAGER`
  keyLocation?: string;

  // The Amazon Resource Name (ARN) of the secret.
  secretsManagerArn?: string;

  // The signing key URL. Valid pattern is `^(https?|ftp|file):\/\/([^\s]-)`
  url?: string;

  // The user name attribute field. Minimum length of 1. Maximum length of 100.
  userNameAttributeField?: string;

  // The regular expression that identifies the claim. Minimum length of 1. Maximum length of 100.
  claimRegex?: string;

  // The group attribute field. Minimum length of 1. Maximum length of 100.
  groupAttributeField?: string;
}

export function kendra_IndexUserTokenConfigurationsJwtTokenTypeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "The issuer of the token. Minimum length of 1. Maximum length of 65.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyLocation",
      "The location of the key. Valid values are `URL` or `SECRET_MANAGER`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretsManagerArn",
      "The Amazon Resource Name (ARN) of the secret.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The signing key URL. Valid pattern is `^(https?|ftp|file):\\/\\/([^\\s]*)`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userNameAttributeField",
      "The user name attribute field. Minimum length of 1. Maximum length of 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "claimRegex",
      "The regular expression that identifies the claim. Minimum length of 1. Maximum length of 100.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupAttributeField",
      "The group attribute field. Minimum length of 1. Maximum length of 100.",
      [],
      false,
      false,
    ),
  ];
}
