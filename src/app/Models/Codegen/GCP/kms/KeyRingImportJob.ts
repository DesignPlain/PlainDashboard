import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { KeyRingImportJobAttestation } from "../types/KeyRingImportJobAttestation";
import { KeyRingImportJobPublicKey } from "../types/KeyRingImportJobPublicKey";

export interface KeyRingImportJobArgs {
  /*
The wrapping method to be used for incoming key material.
Possible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.
*/
  ImportMethod?: string;

  /*
The KeyRing that this import job belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.
*/
  KeyRing?: string;

  /*
The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into.
Possible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.
*/
  ProtectionLevel?: string;

  /*
It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}


- - -
*/
  ImportJobId?: string;
}
export class KeyRingImportJob extends Resource {
  /*
Statement that was generated and signed by the key creator (for example, an HSM) at key creation time.
Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
Only present if the chosen ImportMethod is one with a protection level of HSM.
Structure is documented below.
*/
  public Attestations?: Array<KeyRingImportJobAttestation>;

  /*
The wrapping method to be used for incoming key material.
Possible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.
*/
  public ImportMethod?: string;

  // The current state of the ImportJob, indicating if it can be used.
  public State?: string;

  /*
The time at which this resource is scheduled for expiration and can no longer be used.
This is in RFC3339 text format.
*/
  public ExpireTime?: string;

  /*
It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}


- - -
*/
  public ImportJobId?: string;

  /*
The KeyRing that this import job belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.
*/
  public KeyRing?: string;

  // The resource name for this ImportJob in the format projects/-/locations/-/keyRings/-/importJobs/-.
  public Name?: string;

  /*
The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into.
Possible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.
*/
  public ProtectionLevel?: string;

  /*
The public key with which to wrap key material prior to import. Only returned if state is `ACTIVE`.
Structure is documented below.
*/
  public PublicKeys?: Array<KeyRingImportJobPublicKey>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ImportJobId",
        "It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ImportMethod",
        "The wrapping method to be used for incoming key material.\nPossible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KeyRing",
        "The KeyRing that this import job belongs to.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProtectionLevel",
        "The protection level of the ImportJob. This must match the protectionLevel of the\nversionTemplate on the CryptoKey you attempt to import into.\nPossible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.",
      ),
    ];
  }
}
