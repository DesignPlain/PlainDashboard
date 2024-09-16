import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface signer_getSigningJobRevocationRecord {
  //
  revokedBy?: string;

  //
  reason?: string;

  //
  revokedAt?: string;
}

export function signer_getSigningJobRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'reason', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'revokedAt',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'revokedBy',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
