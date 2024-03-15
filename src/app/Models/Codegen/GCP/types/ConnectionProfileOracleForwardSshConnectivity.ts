export interface ConnectionProfileOracleForwardSshConnectivity {
  /*
Input only. SSH password. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the SSH tunnel, default value is 22.
  Port?: number;

  /*
Input only. SSH private key. Only one of `password` and `private_key` can be configured.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PrivateKey?: string;

  // Required. Username for the SSH tunnel.
  Username?: string;

  // Required. Hostname for the SSH tunnel.
  Hostname?: string;
}
