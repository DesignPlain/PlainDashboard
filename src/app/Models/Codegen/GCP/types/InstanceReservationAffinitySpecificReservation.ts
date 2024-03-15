export interface InstanceReservationAffinitySpecificReservation {
  // Corresponds to the label values of a reservation resource.
  Values?: Array<string>;

  // Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  Key?: string;
}
