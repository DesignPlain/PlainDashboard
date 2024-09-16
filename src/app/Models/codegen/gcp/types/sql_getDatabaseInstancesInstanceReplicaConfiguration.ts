import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceReplicaConfiguration {
  // PEM representation of the replica's x509 certificate.
  clientCertificate?: string;

  // PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  clientKey?: string;

  // Time in ms between replication heartbeats.
  masterHeartbeatPeriod?: number;

  // Password for the replication connection.
  password?: string;

  // Permissible ciphers for use in SSL encryption.
  sslCipher?: string;

  // Username for replication connection.
  username?: string;

  // PEM representation of the trusted CA's x509 certificate.
  caCertificate?: string;

  // The number of seconds between connect retries. MySQL's default is 60 seconds.
  connectRetryInterval?: number;

  // Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  dumpFilePath?: string;

  // Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres
  failoverTarget?: boolean;

  // True if the master's common name value is checked during the SSL handshake.
  verifyServerCertificate?: boolean;
}

export function sql_getDatabaseInstancesInstanceReplicaConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sslCipher',
      'Permissible ciphers for use in SSL encryption.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dumpFilePath',
      'Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'failoverTarget',
      'Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientKey',
      "PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'masterHeartbeatPeriod',
      'Time in ms between replication heartbeats.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'Password for the replication connection.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'Username for replication connection.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'caCertificate',
      "PEM representation of the trusted CA's x509 certificate.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'connectRetryInterval',
      "The number of seconds between connect retries. MySQL's default is 60 seconds.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'verifyServerCertificate',
      "True if the master's common name value is checked during the SSL handshake.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientCertificate',
      "PEM representation of the replica's x509 certificate.",
      () => [],
      true,
      false,
    ),
  ];
}
