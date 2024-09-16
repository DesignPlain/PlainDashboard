import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionBackendServiceSubsetting {
  /*
The algorithm used for subsetting.
Possible values are: `CONSISTENT_HASH_SUBSETTING`.
*/
  policy?: string;
}

export function compute_RegionBackendServiceSubsetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'policy',
      'The algorithm used for subsetting.\nPossible values are: `CONSISTENT_HASH_SUBSETTING`.',
      () => [],
      true,
      false,
    ),
  ];
}
