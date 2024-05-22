import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccountPasswordPolicyArgs {
  // The number of days that an user password is valid.
  maxPasswordAge?: number;

  // Minimum length to require for user passwords.
  minimumPasswordLength?: number;

  // The number of previous passwords that users are prevented from reusing.
  passwordReusePrevention?: number;

  // Whether to require lowercase characters for user passwords.
  requireLowercaseCharacters?: boolean;

  // Whether to require uppercase characters for user passwords.
  requireUppercaseCharacters?: boolean;

  // Whether to allow users to change their own password
  allowUsersToChangePassword?: boolean;

  // Whether users are prevented from setting a new password after their password has expired (i.e., require administrator reset)
  hardExpiry?: boolean;

  // Whether to require numbers for user passwords.
  requireNumbers?: boolean;

  // Whether to require symbols for user passwords.
  requireSymbols?: boolean;
}
export class AccountPasswordPolicy extends Resource {
  // Whether to allow users to change their own password
  public allowUsersToChangePassword?: boolean;

  // Indicates whether passwords in the account expire. Returns `true` if `max_password_age` contains a value greater than `0`. Returns `false` if it is `0` or _not present_.
  public expirePasswords?: boolean;

  // Whether to require lowercase characters for user passwords.
  public requireLowercaseCharacters?: boolean;

  // Whether to require symbols for user passwords.
  public requireSymbols?: boolean;

  // Whether users are prevented from setting a new password after their password has expired (i.e., require administrator reset)
  public hardExpiry?: boolean;

  // The number of days that an user password is valid.
  public maxPasswordAge?: number;

  // Minimum length to require for user passwords.
  public minimumPasswordLength?: number;

  // The number of previous passwords that users are prevented from reusing.
  public passwordReusePrevention?: number;

  // Whether to require numbers for user passwords.
  public requireNumbers?: boolean;

  // Whether to require uppercase characters for user passwords.
  public requireUppercaseCharacters?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "minimumPasswordLength",
        "Minimum length to require for user passwords.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "passwordReusePrevention",
        "The number of previous passwords that users are prevented from reusing.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireLowercaseCharacters",
        "Whether to require lowercase characters for user passwords.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireUppercaseCharacters",
        "Whether to require uppercase characters for user passwords.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireNumbers",
        "Whether to require numbers for user passwords.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireSymbols",
        "Whether to require symbols for user passwords.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxPasswordAge",
        "The number of days that an user password is valid.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "hardExpiry",
        "Whether users are prevented from setting a new password after their password has expired (i.e., require administrator reset)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowUsersToChangePassword",
        "Whether to allow users to change their own password",
        [],
        false,
        false,
      ),
    ];
  }
}
