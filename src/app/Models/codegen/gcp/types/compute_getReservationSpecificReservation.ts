import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getReservationSpecificReservationInstanceProperty,
  compute_getReservationSpecificReservationInstanceProperty_GetTypes,
} from './compute_getReservationSpecificReservationInstanceProperty';

export interface compute_getReservationSpecificReservation {
  // The number of resources that are allocated.
  count?: number;

  // How many instances are in use.
  inUseCount?: number;

  // The instance properties for the reservation.
  instanceProperties?: Array<compute_getReservationSpecificReservationInstanceProperty>;
}

export function compute_getReservationSpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'count',
      'The number of resources that are allocated.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'inUseCount',
      'How many instances are in use.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceProperties',
      'The instance properties for the reservation.',
      () =>
        compute_getReservationSpecificReservationInstanceProperty_GetTypes(),
      true,
      false,
    ),
  ];
}
