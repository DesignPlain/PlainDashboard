import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface CiphertextArgs {
  // An optional mapping that makes up the encryption context.
  context?: Map<string, string>;

  // Globally unique key ID for the customer master key.
  keyId?: string;

  // Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.
  plaintext?: string;
}
export class Ciphertext extends DS_Resource {
  // Base64 encoded ciphertext
  public ciphertextBlob?: string;

  // An optional mapping that makes up the encryption context.
  public context?: Map<string, string>;

  // Globally unique key ID for the customer master key.
  public keyId?: string;

  // Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.
  public plaintext?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "plaintext",
        "Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "context",
        "An optional mapping that makes up the encryption context.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyId",
        "Globally unique key ID for the customer master key.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
