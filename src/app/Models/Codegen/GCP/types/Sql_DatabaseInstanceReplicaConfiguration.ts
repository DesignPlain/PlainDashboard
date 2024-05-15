import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceReplicaConfiguration {
  // Password for the replication connection.
  Password?: string;

  /*
True if the master's common name
value is checked during the SSL handshake.
*/
  VerifyServerCertificate?: boolean;

  /*
PEM representation of the trusted CA's x509
certificate.
*/
  CaCertificate?: string;

  /*
PEM representation of the replica's private key. The
corresponding public key in encoded in the `client_certificate`.
*/
  ClientKey?: string;

  /*
Path to a SQL file in GCS from which replica
instances are created. Format is `gs://bucket/filename`.
*/
  DumpFilePath?: string;

  /*
Specifies if the replica is the failover target.
If the field is set to true the replica will be designated as a failover replica.
If the master instance fails, the replica instance will be promoted as
the new master instance.
> --NOTE:-- Not supported for Postgres database.
*/
  FailoverTarget?: boolean;

  // Username for replication connection.
  Username?: string;

  /*
PEM representation of the replica's x509
certificate.
*/
  ClientCertificate?: string;

  /*
The number of seconds
between connect retries. MySQL's default is 60 seconds.
*/
  ConnectRetryInterval?: number;

  /*
Time in ms between replication
heartbeats.
*/
  MasterHeartbeatPeriod?: number;

  // Permissible ciphers for use in SSL encryption.
  SslCipher?: string;
}

export function Sql_DatabaseInstanceReplicaConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MasterHeartbeatPeriod",
      "Time in ms between replication\nheartbeats.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SslCipher",
      "Permissible ciphers for use in SSL encryption.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Password",
      "Password for the replication connection.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "PEM representation of the replica's private key. The\ncorresponding public key in encoded in the `client_certificate`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Username",
      "Username for replication connection.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "FailoverTarget",
      "Specifies if the replica is the failover target.\nIf the field is set to true the replica will be designated as a failover replica.\nIf the master instance fails, the replica instance will be promoted as\nthe new master instance.\n> **NOTE:** Not supported for Postgres database.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "PEM representation of the replica's x509\ncertificate.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ConnectRetryInterval",
      "The number of seconds\nbetween connect retries. MySQL's default is 60 seconds.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "VerifyServerCertificate",
      "True if the master's common name\nvalue is checked during the SSL handshake.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CaCertificate",
      "PEM representation of the trusted CA's x509\ncertificate.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DumpFilePath",
      "Path to a SQL file in GCS from which replica\ninstances are created. Format is `gs://bucket/filename`.",
      [],
      false,
      true,
    ),
  ];
}
