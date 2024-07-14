import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CiphertextArgs {
  // Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.
  plaintext?: string;

  // An optional mapping that makes up the encryption context.
  context?: Map<string, string>;

  // Globally unique key ID for the customer master key.
  keyId?: string;
}
export class Ciphertext extends Resource {
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
        "keyId",
        "Globally unique key ID for the customer master key.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "plaintext",
        "Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "context",
        "An optional mapping that makes up the encryption context.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
