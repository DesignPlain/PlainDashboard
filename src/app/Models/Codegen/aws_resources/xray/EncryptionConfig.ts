import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EncryptionConfigArgs {
  // An AWS KMS customer master key (CMK) ARN.
  keyId?: string;

  // The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.
  type?: string;
}
export class EncryptionConfig extends Resource {
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
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption.",
        [],
        true,
        false,
      ),
    ];
  }
}
