import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EncryptionConfigArgs {
  // An AWS KMS customer master key (CMK) ARN.
  keyId?: string;

  // The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.
  type?: string;
}
export class EncryptionConfig extends DS_Resource {
  // An AWS KMS customer master key (CMK) ARN.
  public keyId?: string;

  // The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "keyId",
        "An AWS KMS customer master key (CMK) ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
