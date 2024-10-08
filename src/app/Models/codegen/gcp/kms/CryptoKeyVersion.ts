import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kms_CryptoKeyVersionAttestation,
  kms_CryptoKeyVersionAttestation_GetTypes,
} from '../types/kms_CryptoKeyVersionAttestation';

export interface CryptoKeyVersionArgs {
  /*
The current state of the CryptoKeyVersion.
Possible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.
*/
  state?: string;

  /*
The name of the cryptoKey associated with the CryptoKeyVersions.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  cryptoKey?: string;
}
export class CryptoKeyVersion extends DS_Resource {
  /*
The name of the cryptoKey associated with the CryptoKeyVersions.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  public cryptoKey?: string;

  // The time this CryptoKeyVersion key material was generated
  public generateTime?: string;

  // The resource name for this CryptoKeyVersion.
  public name?: string;

  // The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
  public protectionLevel?: string;

  /*
The current state of the CryptoKeyVersion.
Possible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.
*/
  public state?: string;

  // The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
  public algorithm?: string;

  /*
Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
Only provided for key versions with protectionLevel HSM.
Structure is documented below.
*/
  public attestations?: Array<kms_CryptoKeyVersionAttestation>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'state',
        'The current state of the CryptoKeyVersion.\nPossible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cryptoKey',
        "The name of the cryptoKey associated with the CryptoKeyVersions.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
