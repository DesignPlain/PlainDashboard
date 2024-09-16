import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pubsub_LiteTopicReservationConfig {
  // The Reservation to use for this topic's throughput capacity.
  throughputReservation?: string;
}

export function pubsub_LiteTopicReservationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'throughputReservation',
      "The Reservation to use for this topic's throughput capacity.",
      () => [],
      false,
      false,
    ),
  ];
}
