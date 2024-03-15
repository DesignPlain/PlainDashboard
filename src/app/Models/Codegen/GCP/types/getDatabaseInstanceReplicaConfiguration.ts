export interface getDatabaseInstanceReplicaConfiguration {
  // The number of seconds between connect retries. MySQL's default is 60 seconds.
  ConnectRetryInterval?: number;

  // Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  DumpFilePath?: string;

  // Time in ms between replication heartbeats.
  MasterHeartbeatPeriod?: number;

  // Permissible ciphers for use in SSL encryption.
  SslCipher?: string;

  // True if the master's common name value is checked during the SSL handshake.
  VerifyServerCertificate?: boolean;

  // PEM representation of the trusted CA's x509 certificate.
  CaCertificate?: string;

  // PEM representation of the replica's x509 certificate.
  ClientCertificate?: string;

  // PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  ClientKey?: string;

  // Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres
  FailoverTarget?: boolean;

  // Password for the replication connection.
  Password?: string;

  // Username for replication connection.
  Username?: string;
}
