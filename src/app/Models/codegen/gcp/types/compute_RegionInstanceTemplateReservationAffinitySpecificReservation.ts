import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionInstanceTemplateReservationAffinitySpecificReservation {
  // Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  key?: string;

  // Corresponds to the label values of a reservation resource.
  values?: Array<string>;
}

export function compute_RegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Corresponds to the label values of a reservation resource.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
