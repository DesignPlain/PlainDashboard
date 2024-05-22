import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface identitystore_UserEmails {
  // The email address. This value must be unique across the identity store.
  value?: string;

  // When `true`, this is the primary email associated with the user.
  primary?: boolean;

  // The type of email.
  type?: string;
}

export function identitystore_UserEmails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "primary",
      "When `true`, this is the primary email associated with the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of email.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The email address. This value must be unique across the identity store.",
      [],
      false,
      false,
    ),
  ];
}
