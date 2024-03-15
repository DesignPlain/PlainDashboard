import { InstanceClientConnectionConfigSslConfig } from "./InstanceClientConnectionConfigSslConfig";

export interface InstanceClientConnectionConfig {
  // Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
  RequireConnectors?: boolean;

  /*
SSL config option for this instance.
Structure is documented below.
*/
  SslConfig?: InstanceClientConnectionConfigSslConfig;
}
