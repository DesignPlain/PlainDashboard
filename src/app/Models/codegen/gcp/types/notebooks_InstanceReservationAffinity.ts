import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface notebooks_InstanceReservationAffinity {
  /*
The type of Compute Reservation.
Possible values are: `NO_RESERVATION`, `ANY_RESERVATION`, `SPECIFIC_RESERVATION`.
*/
  consumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  key?: string;

  // Corresponds to the label values of reservation resource.
  values?: Array<string>;
}

export function notebooks_InstanceReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'consumeReservationType',
      'The type of Compute Reservation.\nPossible values are: `NO_RESERVATION`, `ANY_RESERVATION`, `SPECIFIC_RESERVATION`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Corresponds to the label key of reservation resource.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Corresponds to the label values of reservation resource.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
