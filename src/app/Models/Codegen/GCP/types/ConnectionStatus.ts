export interface ConnectionStatus {
  // An arbitrary description for the Conection.
  Description?: string;

  /*
(Output)
State of the Eventing
*/
  State?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  Status?: string;
}
