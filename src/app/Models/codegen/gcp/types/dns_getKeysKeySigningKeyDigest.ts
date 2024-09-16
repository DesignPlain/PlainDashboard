import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dns_getKeysKeySigningKeyDigest {
  // Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`
  type?: string;

  // The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  digest?: string;
}

export function dns_getKeysKeySigningKeyDigest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'digest',
      'The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.',
      () => [],
      true,
      false,
    ),
  ];
}
