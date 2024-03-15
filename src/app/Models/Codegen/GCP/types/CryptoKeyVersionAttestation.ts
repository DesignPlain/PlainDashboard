import { CryptoKeyVersionAttestationCertChains } from "./CryptoKeyVersionAttestationCertChains";
import { CryptoKeyVersionAttestationExternalProtectionLevelOptions } from "./CryptoKeyVersionAttestationExternalProtectionLevelOptions";

export interface CryptoKeyVersionAttestation {
  /*
The certificate chains needed to validate the attestation
Structure is documented below.
*/
  CertChains?: CryptoKeyVersionAttestationCertChains;

  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
*/
  Content?: string;

  /*
ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
Structure is documented below.
*/
  ExternalProtectionLevelOptions?: CryptoKeyVersionAttestationExternalProtectionLevelOptions;

  /*
(Output)
The format of the attestation data.
*/
  Format?: string;
}
