import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration {
  // Regular expression that identifies the claim.
  claimRegex?: string;

  // The group attribute field.
  groupAttributeField?: string;

  // Issuer of the token.
  issuer?: string;

  // Location of the key. Valid values are `URL` or `SECRET_MANAGER`
  keyLocation?: string;

  // ARN of the secret.
  secretsManagerArn?: string;

  // Signing key URL.
  url?: string;

  // The user name attribute field.
  userNameAttributeField?: string;
}

export function kendra_getIndexUserTokenConfigurationJwtTokenTypeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "claimRegex",
      "Regular expression that identifies the claim.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupAttributeField",
      "The group attribute field.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "Issuer of the token.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyLocation",
      "Location of the key. Valid values are `URL` or `SECRET_MANAGER`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretsManagerArn",
      "ARN of the secret.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "Signing key URL.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userNameAttributeField",
      "The user name attribute field.",
      () => [],
      true,
      false,
    ),
  ];
}
