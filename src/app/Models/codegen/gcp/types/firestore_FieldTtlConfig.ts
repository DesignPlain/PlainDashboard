import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firestore_FieldTtlConfig {
  /*
(Output)
The state of TTL (time-to-live) configuration for documents that have this Field set.
*/
  state?: string;
}

export function firestore_FieldTtlConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nThe state of TTL (time-to-live) configuration for documents that have this Field set.',
      () => [],
      false,
      false,
    ),
  ];
}
