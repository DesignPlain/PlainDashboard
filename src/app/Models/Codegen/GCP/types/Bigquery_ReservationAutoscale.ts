import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_ReservationAutoscale {
  /*
(Output)
The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
*/
  CurrentSlots?: number;

  // Number of slots to be scaled when needed.
  MaxSlots?: number;
}

export function Bigquery_ReservationAutoscale_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "CurrentSlots",
      "(Output)\nThe slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxSlots",
      "Number of slots to be scaled when needed.",
      [],
      false,
      false,
    ),
  ];
}
