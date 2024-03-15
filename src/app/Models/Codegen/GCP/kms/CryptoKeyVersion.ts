import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CryptoKeyVersionAttestation } from "../types/CryptoKeyVersionAttestation";

export interface CryptoKeyVersionArgs {
  /*
The name of the cryptoKey associated with the CryptoKeyVersions.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  CryptoKey?: string;

  /*
The current state of the CryptoKeyVersion.
Possible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.
*/
  State?: string;
}
export class CryptoKeyVersion extends Resource {
  // The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
  public Algorithm?: string;

  /*
Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
Only provided for key versions with protectionLevel HSM.
Structure is documented below.
*/
  public Attestations?: Array<CryptoKeyVersionAttestation>;

  /*
The name of the cryptoKey associated with the CryptoKeyVersions.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`


- - -
*/
  public CryptoKey?: string;

  // The time this CryptoKeyVersion key material was generated
  public GenerateTime?: string;

  // The resource name for this CryptoKeyVersion.
  public Name?: string;

  // The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
  public ProtectionLevel?: string;

  /*
The current state of the CryptoKeyVersion.
Possible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.
*/
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "CryptoKey",
        "The name of the cryptoKey associated with the CryptoKeyVersions.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}'`\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "State",
        "The current state of the CryptoKeyVersion.\nPossible values are: `PENDING_GENERATION`, `ENABLED`, `DISABLED`, `DESTROYED`, `DESTROY_SCHEDULED`, `PENDING_IMPORT`, `IMPORT_FAILED`.",
      ),
    ];
  }
}
