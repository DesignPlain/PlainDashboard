import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccessKeyArgs {
  // Access key status to apply. Defaults to `Active`. Valid values are `Active` and `Inactive`.
  status?: string;

  // IAM user to associate with this access key.
  user?: string;

  // Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:some_person_that_exists`, for use in the `encrypted_secret` output attribute. If providing a base-64 encoded PGP public key, make sure to provide the "raw" version and not the "armored" one (e.g. avoid passing the `-a` option to `gpg --export`).
  pgpKey?: string;
}
export class AccessKey extends Resource {
  // Secret access key converted into an SES SMTP password by applying [AWS's documented Sigv4 conversion algorithm](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html#smtp-credentials-convert). This attribute is not available for imported resources. As SigV4 is region specific, valid Provider regions are `ap-south-1`, `ap-southeast-2`, `eu-central-1`, `eu-west-1`, `us-east-1` and `us-west-2`. See current [AWS SES regions](https://docs.aws.amazon.com/general/latest/gr/rande.html#ses_region).
  public sesSmtpPasswordV4?: string;

  // Access key status to apply. Defaults to `Active`. Valid values are `Active` and `Inactive`.
  public status?: string;

  // IAM user to associate with this access key.
  public user?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the access key was created.
  public createDate?: string;

  // Encrypted secret, base64 encoded, if `pgp_key` was specified. This attribute is not available for imported resources. The encrypted secret may be decrypted using the command line.
  public encryptedSecret?: string;

  // Encrypted SES SMTP password, base64 encoded, if `pgp_key` was specified. This attribute is not available for imported resources. The encrypted password may be decrypted using the command line.
  public encryptedSesSmtpPasswordV4?: string;

  // Fingerprint of the PGP key used to encrypt the secret. This attribute is not available for imported resources.
  public keyFingerprint?: string;

  // Secret access key. This attribute is not available for imported resources. Note that this will be written to the state file. If you use this, please protect your backend state file judiciously. Alternatively, you may supply a `pgp_key` instead, which will prevent the secret from being stored in plaintext, at the cost of preventing the use of the secret key in automation.
  public secret?: string;

  // Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:some_person_that_exists`, for use in the `encrypted_secret` output attribute. If providing a base-64 encoded PGP public key, make sure to provide the "raw" version and not the "armored" one (e.g. avoid passing the `-a` option to `gpg --export`).
  public pgpKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "status",
        "Access key status to apply. Defaults to `Active`. Valid values are `Active` and `Inactive`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "user",
        "IAM user to associate with this access key.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pgpKey",
        'Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:some_person_that_exists`, for use in the `encrypted_secret` output attribute. If providing a base-64 encoded PGP public key, make sure to provide the "raw" version and not the "armored" one (e.g. avoid passing the `-a` option to `gpg --export`).',
        [],
        false,
        true,
      ),
    ];
  }
}
