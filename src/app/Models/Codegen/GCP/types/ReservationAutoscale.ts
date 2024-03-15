export interface ReservationAutoscale {
  /*
(Output)
The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots].
*/
  CurrentSlots?: number;

  // Number of slots to be scaled when needed.
  MaxSlots?: number;
}
