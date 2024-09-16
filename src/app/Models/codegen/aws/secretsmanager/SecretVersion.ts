import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SecretVersionArgs {
  // Specifies binary data that you want to encrypt and store in this version of the secret. This is required if `secret_string` is not set. Needs to be encoded to base64.
  secretBinary?: string;

  // Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
  secretId?: string;

  // Specifies text data that you want to encrypt and store in this version of the secret. This is required if `secret_binary` is not set.
  secretString?: string;

  /*
Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.

> --NOTE:-- If `version_stages` is configured, you must include the `AWSCURRENT` staging label if this secret version is the only version or if the label is currently present on this secret version, otherwise this provider will show a perpetual difference.
*/
  versionStages?: Array<string>;
}
export class SecretVersion extends DS_Resource {
  // The ARN of the secret.
  public arn?: string;

  // Specifies binary data that you want to encrypt and store in this version of the secret. This is required if `secret_string` is not set. Needs to be encoded to base64.
  public secretBinary?: string;

  // Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
  public secretId?: string;

  // Specifies text data that you want to encrypt and store in this version of the secret. This is required if `secret_binary` is not set.
  public secretString?: string;

  // The unique identifier of the version of the secret.
  public versionId?: string;

  /*
Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.

> --NOTE:-- If `version_stages` is configured, you must include the `AWSCURRENT` staging label if this secret version is the only version or if the label is currently present on this secret version, otherwise this provider will show a perpetual difference.
*/
  public versionStages?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'secretBinary',
        'Specifies binary data that you want to encrypt and store in this version of the secret. This is required if `secret_string` is not set. Needs to be encoded to base64.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secretId',
        'Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'secretString',
        'Specifies text data that you want to encrypt and store in this version of the secret. This is required if `secret_binary` is not set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'versionStages',
        "Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.\n\n> **NOTE:** If `version_stages` is configured, you must include the `AWSCURRENT` staging label if this secret version is the only version or if the label is currently present on this secret version, otherwise this provider will show a perpetual difference.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
