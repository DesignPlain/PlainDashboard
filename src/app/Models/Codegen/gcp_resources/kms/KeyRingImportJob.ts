import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kms_KeyRingImportJobAttestation,
  kms_KeyRingImportJobAttestation_GetTypes,
} from "../types/kms_KeyRingImportJobAttestation";
import {
  kms_KeyRingImportJobPublicKey,
  kms_KeyRingImportJobPublicKey_GetTypes,
} from "../types/kms_KeyRingImportJobPublicKey";

export interface KeyRingImportJobArgs {
  /*
It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}


- - -
*/
  importJobId?: string;

  /*
The wrapping method to be used for incoming key material.
Possible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.
*/
  importMethod?: string;

  /*
The KeyRing that this import job belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.
*/
  keyRing?: string;

  /*
The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into.
Possible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.
*/
  protectionLevel?: string;
}
export class KeyRingImportJob extends Resource {
  /*
The public key with which to wrap key material prior to import. Only returned if state is `ACTIVE`.
Structure is documented below.
*/
  public publicKeys?: Array<kms_KeyRingImportJobPublicKey>;

  // The current state of the ImportJob, indicating if it can be used.
  public state?: string;

  /*
It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}


- - -
*/
  public importJobId?: string;

  /*
The KeyRing that this import job belongs to.
Format: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.
*/
  public keyRing?: string;

  // The resource name for this ImportJob in the format projects/-/locations/-/keyRings/-/importJobs/-.
  public name?: string;

  /*
The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into.
Possible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.
*/
  public protectionLevel?: string;

  /*
Statement that was generated and signed by the key creator (for example, an HSM) at key creation time.
Use this statement to verify attributes of the key as stored on the HSM, independently of Google.
Only present if the chosen ImportMethod is one with a protection level of HSM.
Structure is documented below.
*/
  public attestations?: Array<kms_KeyRingImportJobAttestation>;

  /*
The time at which this resource is scheduled for expiration and can no longer be used.
This is in RFC3339 text format.
*/
  public expireTime?: string;

  /*
The wrapping method to be used for incoming key material.
Possible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.
*/
  public importMethod?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "importJobId",
        "It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "importMethod",
        "The wrapping method to be used for incoming key material.\nPossible values are: `RSA_OAEP_3072_SHA1_AES_256`, `RSA_OAEP_4096_SHA1_AES_256`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyRing",
        "The KeyRing that this import job belongs to.\nFormat: `'projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}'`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "protectionLevel",
        "The protection level of the ImportJob. This must match the protectionLevel of the\nversionTemplate on the CryptoKey you attempt to import into.\nPossible values are: `SOFTWARE`, `HSM`, `EXTERNAL`.",
        [],
        true,
        true,
      ),
    ];
  }
}
