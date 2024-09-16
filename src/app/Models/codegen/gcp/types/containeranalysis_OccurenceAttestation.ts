import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  containeranalysis_OccurenceAttestationSignature,
  containeranalysis_OccurenceAttestationSignature_GetTypes,
} from './containeranalysis_OccurenceAttestationSignature';

export interface containeranalysis_OccurenceAttestation {
  /*
The serialized payload that is verified by one or
more signatures. A base64-encoded string.
*/
  serializedPayload?: string;

  /*
One or more signatures over serializedPayload.
Verifier implementations should consider this attestation
message verified if at least one signature verifies
serializedPayload. See Signature in common.proto for more
details on signature structure and verification.
Structure is documented below.
*/
  signatures?: Array<containeranalysis_OccurenceAttestationSignature>;
}

export function containeranalysis_OccurenceAttestation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'serializedPayload',
      'The serialized payload that is verified by one or\nmore signatures. A base64-encoded string.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'signatures',
      'One or more signatures over serializedPayload.\nVerifier implementations should consider this attestation\nmessage verified if at least one signature verifies\nserializedPayload. See Signature in common.proto for more\ndetails on signature structure and verification.\nStructure is documented below.',
      () => containeranalysis_OccurenceAttestationSignature_GetTypes(),
      true,
      false,
    ),
  ];
}
