import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigquery_ReservationAutoscale {
  /*
(Output)
The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
*/
  currentSlots?: number;

  // Number of slots to be scaled when needed.
  maxSlots?: number;
}

export function bigquery_ReservationAutoscale_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxSlots",
      "Number of slots to be scaled when needed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "currentSlots",
      "(Output)\nThe slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].",
      () => [],
      false,
      false,
    ),
  ];
}
