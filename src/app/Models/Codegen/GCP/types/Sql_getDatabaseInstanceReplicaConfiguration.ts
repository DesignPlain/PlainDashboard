import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_getDatabaseInstanceReplicaConfiguration {
  // Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  DumpFilePath?: string;

  // Time in ms between replication heartbeats.
  MasterHeartbeatPeriod?: number;

  // Username for replication connection.
  Username?: string;

  // True if the master's common name value is checked during the SSL handshake.
  VerifyServerCertificate?: boolean;

  // PEM representation of the trusted CA's x509 certificate.
  CaCertificate?: string;

  // PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  ClientKey?: string;

  // The number of seconds between connect retries. MySQL's default is 60 seconds.
  ConnectRetryInterval?: number;

  // Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres
  FailoverTarget?: boolean;

  // Password for the replication connection.
  Password?: string;

  // Permissible ciphers for use in SSL encryption.
  SslCipher?: string;

  // PEM representation of the replica's x509 certificate.
  ClientCertificate?: string;
}

export function Sql_getDatabaseInstanceReplicaConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for replication connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "VerifyServerCertificate",
      "True if the master's common name value is checked during the SSL handshake.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SslCipher",
      "Permissible ciphers for use in SSL encryption.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DumpFilePath",
      "Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CaCertificate",
      "PEM representation of the trusted CA's x509 certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ConnectRetryInterval",
      "The number of seconds between connect retries. MySQL's default is 60 seconds.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "FailoverTarget",
      "Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for the replication connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "PEM representation of the replica's x509 certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MasterHeartbeatPeriod",
      "Time in ms between replication heartbeats.",
      [],
      true,
      false,
    ),
  ];
}
