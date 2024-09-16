import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KeyArgs {
  // Public key data to create a service account key for given service account. The expected format for this field is a base64 encoded X509_PEM and it conflicts with `public_key_type` and `private_key_type`.
  publicKeyData?: string;

  // The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.
  publicKeyType?: string;

  /*
The Service account id of the Key. This can be a string in the format
`{ACCOUNT}` or `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. If the `{ACCOUNT}`-only syntax is used, either
the --full-- email address of the service account or its name can be specified as a value, in which case the project will
automatically be inferred from the account. Otherwise, if the `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`
syntax is used, the `{ACCOUNT}` specified can be the full email address of the service account or the service account's
unique id. Substituting `-` as a wildcard for the `{PROJECT_ID}` will infer the project from the account.
*/
  serviceAccountId?: string;

  // Arbitrary map of values that, when changed, will trigger a new key to be generated.
  keepers?: Map<string, string>;

  /*
The algorithm used to generate the key. KEY_ALG_RSA_2048 is the default algorithm.
Valid values are listed at
[ServiceAccountPrivateKeyType](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts.keys#ServiceAccountKeyAlgorithm)
(only used on create)
*/
  keyAlgorithm?: string;

  // The output format of the private key. TYPE_GOOGLE_CREDENTIALS_FILE is the default output format.
  privateKeyType?: string;
}
export class Key extends DS_Resource {
  /*
The algorithm used to generate the key. KEY_ALG_RSA_2048 is the default algorithm.
Valid values are listed at
[ServiceAccountPrivateKeyType](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts.keys#ServiceAccountKeyAlgorithm)
(only used on create)
*/
  public keyAlgorithm?: string;

  // The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.
  public publicKeyType?: string;

  /*
The Service account id of the Key. This can be a string in the format
`{ACCOUNT}` or `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. If the `{ACCOUNT}`-only syntax is used, either
the --full-- email address of the service account or its name can be specified as a value, in which case the project will
automatically be inferred from the account. Otherwise, if the `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`
syntax is used, the `{ACCOUNT}` specified can be the full email address of the service account or the service account's
unique id. Substituting `-` as a wildcard for the `{PROJECT_ID}` will infer the project from the account.
*/
  public serviceAccountId?: string;

  // Arbitrary map of values that, when changed, will trigger a new key to be generated.
  public keepers?: Map<string, string>;

  /*
The private key in JSON format, base64 encoded. This is what you normally get as a file when creating
service account keys through the CLI or web console. This is only populated when creating a new key.
*/
  public privateKey?: string;

  // The output format of the private key. TYPE_GOOGLE_CREDENTIALS_FILE is the default output format.
  public privateKeyType?: string;

  // The public key, base64 encoded
  public publicKey?: string;

  // Public key data to create a service account key for given service account. The expected format for this field is a base64 encoded X509_PEM and it conflicts with `public_key_type` and `private_key_type`.
  public publicKeyData?: string;

  // The key can be used after this timestamp. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  public validAfter?: string;

  /*
The key can be used before this timestamp.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
*/
  public validBefore?: string;

  // The name used for this key pair
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'publicKeyData',
        'Public key data to create a service account key for given service account. The expected format for this field is a base64 encoded X509_PEM and it conflicts with `public_key_type` and `private_key_type`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'publicKeyType',
        'The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceAccountId',
        "The Service account id of the Key. This can be a string in the format\n`{ACCOUNT}` or `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. If the `{ACCOUNT}`-only syntax is used, either\nthe **full** email address of the service account or its name can be specified as a value, in which case the project will\nautomatically be inferred from the account. Otherwise, if the `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`\nsyntax is used, the `{ACCOUNT}` specified can be the full email address of the service account or the service account's\nunique id. Substituting `-` as a wildcard for the `{PROJECT_ID}` will infer the project from the account.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'keepers',
        'Arbitrary map of values that, when changed, will trigger a new key to be generated.',
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyAlgorithm',
        'The algorithm used to generate the key. KEY_ALG_RSA_2048 is the default algorithm.\nValid values are listed at\n[ServiceAccountPrivateKeyType](https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts.keys#ServiceAccountKeyAlgorithm)\n(only used on create)',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateKeyType',
        'The output format of the private key. TYPE_GOOGLE_CREDENTIALS_FILE is the default output format.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
