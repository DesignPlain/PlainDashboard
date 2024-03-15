export interface V2VmSchedulingConfig {
  // Defines whether the node is preemptible.
  Preemptible?: boolean;

  // Whether the node is created under a reservation.
  Reserved?: boolean;
}
