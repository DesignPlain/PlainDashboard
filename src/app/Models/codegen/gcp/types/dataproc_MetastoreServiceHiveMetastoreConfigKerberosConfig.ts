import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab,
  dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes,
} from './dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab';

export interface dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig {
  // A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
  krb5ConfigGcsUri?: string;

  // A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  principal?: string;

  /*
A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).
Structure is documented below.
*/
  keytab?: dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
}

export function dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'krb5ConfigGcsUri',
      'A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'principal',
      'A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'keytab',
      'A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).\nStructure is documented below.',
      () =>
        dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes(),
      true,
      false,
    ),
  ];
}
