export interface NetworkPolicyInternetAccess {
  // True if the service is enabled; false otherwise.
  Enabled?: boolean;

  /*
(Output)
State of the service. New values may be added to this enum when appropriate.
*/
  State?: string;
}
