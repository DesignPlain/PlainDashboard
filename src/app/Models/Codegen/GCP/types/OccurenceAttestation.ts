import { OccurenceAttestationSignature } from "./OccurenceAttestationSignature";

export interface OccurenceAttestation {
  /*
The serialized payload that is verified by one or
more signatures. A base64-encoded string.
*/
  SerializedPayload?: string;

  /*
One or more signatures over serializedPayload.
Verifier implementations should consider this attestation
message verified if at least one signature verifies
serializedPayload. See Signature in common.proto for more
details on signature structure and verification.
Structure is documented below.
*/
  Signatures?: Array<OccurenceAttestationSignature>;
}
