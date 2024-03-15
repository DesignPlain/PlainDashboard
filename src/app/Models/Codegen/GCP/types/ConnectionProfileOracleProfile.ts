export interface ConnectionProfileOracleProfile {
  // Hostname for the Oracle connection.
  Hostname?: string;

  /*
Password for the Oracle connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // Port for the Oracle connection.
  Port?: number;

  // Username for the Oracle connection.
  Username?: string;

  // Connection string attributes
  ConnectionAttributes?: Map<string, string>;

  // Database for the Oracle connection.
  DatabaseService?: string;
}
