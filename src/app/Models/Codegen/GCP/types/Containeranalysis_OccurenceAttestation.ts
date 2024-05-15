import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Containeranalysis_OccurenceAttestationSignature,
  Containeranalysis_OccurenceAttestationSignature_GetTypes,
} from "./Containeranalysis_OccurenceAttestationSignature";

export interface Containeranalysis_OccurenceAttestation {
  /*
One or more signatures over serializedPayload.
Verifier implementations should consider this attestation
message verified if at least one signature verifies
serializedPayload. See Signature in common.proto for more
details on signature structure and verification.
Structure is documented below.
*/
  Signatures?: Array<Containeranalysis_OccurenceAttestationSignature>;

  /*
The serialized payload that is verified by one or
more signatures. A base64-encoded string.
*/
  SerializedPayload?: string;
}

export function Containeranalysis_OccurenceAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Signatures",
      "One or more signatures over serializedPayload.\nVerifier implementations should consider this attestation\nmessage verified if at least one signature verifies\nserializedPayload. See Signature in common.proto for more\ndetails on signature structure and verification.\nStructure is documented below.",
      Containeranalysis_OccurenceAttestationSignature_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SerializedPayload",
      "The serialized payload that is verified by one or\nmore signatures. A base64-encoded string.",
      [],
      true,
      false,
    ),
  ];
}
