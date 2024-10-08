import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SecretCiphertextArgs {
  /*
The additional authenticated data used for integrity checks during encryption and decryption.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  additionalAuthenticatedData?: string;

  /*
The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  cryptoKey?: string;

  /*
The plaintext to be encrypted.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  plaintext?: string;
}
export class SecretCiphertext extends DS_Resource {
  /*
The additional authenticated data used for integrity checks during encryption and decryption.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public additionalAuthenticatedData?: string;

  // Contains the result of encrypting the provided plaintext, encoded in base64.
  public ciphertext?: string;

  /*
The full name of the CryptoKey that will be used to encrypt the provided plaintext.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  public cryptoKey?: string;

  /*
The plaintext to be encrypted.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public plaintext?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'cryptoKey',
        "The full name of the CryptoKey that will be used to encrypt the provided plaintext.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}'`\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'plaintext',
        'The plaintext to be encrypted.\n**Note**: This property is sensitive and will not be displayed in the plan.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'additionalAuthenticatedData',
        'The additional authenticated data used for integrity checks during encryption and decryption.\n**Note**: This property is sensitive and will not be displayed in the plan.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
