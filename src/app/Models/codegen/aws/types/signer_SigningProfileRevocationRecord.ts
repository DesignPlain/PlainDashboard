import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface signer_SigningProfileRevocationRecord {
  // The time when revocation becomes effective.
  revocationEffectiveFrom?: string;

  // The time when the signing profile was revoked.
  revokedAt?: string;

  // The identity of the revoker.
  revokedBy?: string;
}

export function signer_SigningProfileRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'revocationEffectiveFrom',
      'The time when revocation becomes effective.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'revokedAt',
      'The time when the signing profile was revoked.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'revokedBy',
      'The identity of the revoker.',
      () => [],
      false,
      false,
    ),
  ];
}
