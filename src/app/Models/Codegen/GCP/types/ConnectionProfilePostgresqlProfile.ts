export interface ConnectionProfilePostgresqlProfile {
  // Port for the PostgreSQL connection.
  Port?: number;

  // Username for the PostgreSQL connection.
  Username?: string;

  // Database for the PostgreSQL connection.
  Database?: string;

  // Hostname for the PostgreSQL connection.
  Hostname?: string;

  /*
Password for the PostgreSQL connection.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;
}
