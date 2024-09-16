import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodeConfigReservationAffinity {
  // Corresponds to the type of reservation consumption.
  consumeReservationType?: string;

  // The label key of a reservation resource.
  key?: string;

  // The label values of the reservation resource.
  values?: Array<string>;
}

export function container_getClusterNodeConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'values',
      'The label values of the reservation resource.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'consumeReservationType',
      'Corresponds to the type of reservation consumption.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'The label key of a reservation resource.',
      () => [],
      true,
      false,
    ),
  ];
}
