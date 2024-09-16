import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getInstanceTemplateReservationAffinitySpecificReservation,
  compute_getInstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from './compute_getInstanceTemplateReservationAffinitySpecificReservation';

export interface compute_getInstanceTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  specificReservations?: Array<compute_getInstanceTemplateReservationAffinitySpecificReservation>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;
}

export function compute_getInstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'specificReservations',
      'Specifies the label selector for the reservation to use.',
      () =>
        compute_getInstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.',
      () => [],
      true,
      false,
    ),
  ];
}
