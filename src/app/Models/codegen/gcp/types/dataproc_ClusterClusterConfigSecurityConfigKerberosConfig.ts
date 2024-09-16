import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_ClusterClusterConfigSecurityConfigKerberosConfig {
  // The lifetime of the ticket granting ticket, in hours.
  tgtLifetimeHours?: number;

  /*
The Cloud Storage URI of the truststore file used for
SSL encryption. If not provided, Dataproc will provide a self-signed certificate.

- - -
*/
  truststoreUri?: string;

  // Flag to indicate whether to Kerberize the cluster.
  enableKerberos?: boolean;

  /*
The name of the on-cluster Kerberos realm. If not specified, the
uppercased domain of hostnames will be the realm.
*/
  realm?: string;

  /*
The remote realm the Dataproc on-cluster KDC will
trust, should the user enable cross realm trust.
*/
  crossRealmTrustRealm?: string;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the master key of the KDC database.
*/
  kdcDbKeyUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided key. For the self-signed certificate, this password
is generated by Dataproc.
*/
  keyPasswordUri?: string;

  /*
The Cloud Storage URI of a KMS
encrypted file containing the shared password between the on-cluster Kerberos realm
and the remote trusted realm, in a cross realm trust relationship.
*/
  crossRealmTrustSharedPasswordUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificated, the password
is generated by Dataproc.
*/
  keystorePasswordUri?: string;

  /*
The Cloud Storage URI of the keystore file used for SSL encryption.
If not provided, Dataproc will provide a self-signed certificate.
*/
  keystoreUri?: string;

  // The URI of the KMS key used to encrypt various sensitive files.
  kmsKeyUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file
containing the root principal password.
*/
  rootPrincipalPasswordUri?: string;

  /*
The Cloud Storage URI of a KMS encrypted file
containing the password to the user provided truststore. For the self-signed
certificate, this password is generated by Dataproc.
*/
  truststorePasswordUri?: string;

  /*
The admin server (IP or hostname) for the
remote trusted realm in a cross realm trust relationship.
*/
  crossRealmTrustAdminServer?: string;

  /*
The KDC (IP or hostname) for the
remote trusted realm in a cross realm trust relationship.
*/
  crossRealmTrustKdc?: string;
}

export function dataproc_ClusterClusterConfigSecurityConfigKerberosConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'rootPrincipalPasswordUri',
      'The Cloud Storage URI of a KMS encrypted file\ncontaining the root principal password.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'crossRealmTrustKdc',
      'The KDC (IP or hostname) for the\nremote trusted realm in a cross realm trust relationship.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'crossRealmTrustRealm',
      'The remote realm the Dataproc on-cluster KDC will\ntrust, should the user enable cross realm trust.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyPasswordUri',
      'The Cloud Storage URI of a KMS encrypted file containing\nthe password to the user provided key. For the self-signed certificate, this password\nis generated by Dataproc.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keystorePasswordUri',
      'The Cloud Storage URI of a KMS encrypted file containing\nthe password to the user provided keystore. For the self-signed certificated, the password\nis generated by Dataproc.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'truststoreUri',
      'The Cloud Storage URI of the truststore file used for\nSSL encryption. If not provided, Dataproc will provide a self-signed certificate.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableKerberos',
      'Flag to indicate whether to Kerberize the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kdcDbKeyUri',
      'The Cloud Storage URI of a KMS encrypted file containing\nthe master key of the KDC database.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'crossRealmTrustSharedPasswordUri',
      'The Cloud Storage URI of a KMS\nencrypted file containing the shared password between the on-cluster Kerberos realm\nand the remote trusted realm, in a cross realm trust relationship.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'truststorePasswordUri',
      'The Cloud Storage URI of a KMS encrypted file\ncontaining the password to the user provided truststore. For the self-signed\ncertificate, this password is generated by Dataproc.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'tgtLifetimeHours',
      'The lifetime of the ticket granting ticket, in hours.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'realm',
      'The name of the on-cluster Kerberos realm. If not specified, the\nuppercased domain of hostnames will be the realm.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keystoreUri',
      'The Cloud Storage URI of the keystore file used for SSL encryption.\nIf not provided, Dataproc will provide a self-signed certificate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyUri',
      'The URI of the KMS key used to encrypt various sensitive files.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'crossRealmTrustAdminServer',
      'The admin server (IP or hostname) for the\nremote trusted realm in a cross realm trust relationship.',
      () => [],
      false,
      false,
    ),
  ];
}
