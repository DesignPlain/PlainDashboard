import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface UserLoginProfileArgs {
  // Whether the user should be forced to reset the generated password on resource creation. Only applies on resource creation.
  passwordResetRequired?: boolean;

  // Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:username`. Only applies on resource creation. Drift detection is not possible with this argument.
  pgpKey?: string;

  // The IAM user's name.
  user?: string;

  // The length of the generated password on resource creation. Only applies on resource creation. Drift detection is not possible with this argument. Default value is `20`.
  passwordLength?: number;
}
export class UserLoginProfile extends Resource {
  // The plain text password, only available when `pgp_key` is not provided.
  public password?: string;

  // The length of the generated password on resource creation. Only applies on resource creation. Drift detection is not possible with this argument. Default value is `20`.
  public passwordLength?: number;

  // Whether the user should be forced to reset the generated password on resource creation. Only applies on resource creation.
  public passwordResetRequired?: boolean;

  // Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:username`. Only applies on resource creation. Drift detection is not possible with this argument.
  public pgpKey?: string;

  // The IAM user's name.
  public user?: string;

  // The encrypted password, base64 encoded. Only available if password was handled on resource creation, not import.
  public encryptedPassword?: string;

  // The fingerprint of the PGP key used to encrypt the password. Only available if password was handled on this provider resource creation, not import.
  public keyFingerprint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "user",
        "The IAM user's name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "passwordLength",
        "The length of the generated password on resource creation. Only applies on resource creation. Drift detection is not possible with this argument. Default value is `20`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "passwordResetRequired",
        "Whether the user should be forced to reset the generated password on resource creation. Only applies on resource creation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pgpKey",
        "Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:username`. Only applies on resource creation. Drift detection is not possible with this argument.",
        [],
        false,
        true,
      ),
    ];
  }
}
