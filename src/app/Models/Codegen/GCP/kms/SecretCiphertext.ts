import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecretCiphertextArgs {
  /*
The plaintext to be encrypted.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Plaintext?: string;

  /*
The additional authenticated data used for integrity checks during encryption and decryption.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  AdditionalAuthenticatedData?: string;

  /*
The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  CryptoKey?: string;
}
export class SecretCiphertext extends Resource {
  /*
The additional authenticated data used for integrity checks during encryption and decryption.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public AdditionalAuthenticatedData?: string;

  // Contains the result of encrypting the provided plaintext, encoded in base64.
  public Ciphertext?: string;

  /*
The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  public CryptoKey?: string;

  /*
The plaintext to be encrypted.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Plaintext?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Plaintext",
        "The plaintext to be encrypted.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AdditionalAuthenticatedData",
        "The additional authenticated data used for integrity checks during encryption and decryption.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CryptoKey",
        "The full name of the CryptoKey that will be used to encrypt the provided plaintext.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
