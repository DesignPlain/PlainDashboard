import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Pubsub_LiteTopicReservationConfig {
  // The Reservation to use for this topic's throughput capacity.
  ThroughputReservation?: string;
}

export function Pubsub_LiteTopicReservationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ThroughputReservation",
      "The Reservation to use for this topic's throughput capacity.",
      [],
      false,
      false,
    ),
  ];
}
