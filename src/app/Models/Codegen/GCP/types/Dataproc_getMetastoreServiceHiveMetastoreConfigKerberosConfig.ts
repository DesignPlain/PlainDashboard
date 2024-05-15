import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab,
  Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes,
} from "./Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab";

export interface Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig {
  // A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).
  Keytabs?: Array<Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab>;

  // A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
  Krb5ConfigGcsUri?: string;

  // A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  Principal?: string;
}

export function Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Principal",
      'A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Keytabs",
      "A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).",
      Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Krb5ConfigGcsUri",
      "A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.",
      [],
      true,
      false,
    ),
  ];
}
