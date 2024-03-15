export interface KeyRingImportJobAttestation {
  /*
(Output)
The attestation data provided by the HSM when the key operation was performed.
A base64-encoded string.
*/
  Content?: string;

  /*
(Output)
The format of the attestation data.
*/
  Format?: string;
}
