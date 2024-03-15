export interface ConnectionProfileForwardSshConnectivity {
  // Port for the SSH tunnel.
  Port?: number;

  /*
SSH private key.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PrivateKey?: string;

  // Username for the SSH tunnel.
  Username?: string;

  // Hostname for the SSH tunnel.
  Hostname?: string;

  /*
SSH password.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;
}
