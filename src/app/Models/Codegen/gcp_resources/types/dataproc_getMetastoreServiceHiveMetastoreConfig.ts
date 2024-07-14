import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig,
  dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes,
} from "./dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig";
import {
  dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion,
  dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes,
} from "./dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion";

export interface dataproc_getMetastoreServiceHiveMetastoreConfig {
  // The protocol to use for the metastore service endpoint. If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]
  endpointProtocol?: string;

  // Information used to configure the Hive metastore service as a service principal in a Kerberos realm.
  kerberosConfigs?: Array<dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig>;

  // The Hive metastore schema version.
  version?: string;

  /*
A mapping of Hive metastore version to the auxiliary version configuration.
When specified, a secondary Hive metastore service is created along with the primary service.
All auxiliary versions must be less than the service's primary version.
The key is the auxiliary service name and it must match the regular expression a-z?.
This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
*/
  auxiliaryVersions?: Array<dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion>;

  /*
A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
*/
  configOverrides?: Map<string, string>;
}

export function dataproc_getMetastoreServiceHiveMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpointProtocol",
      'The protocol to use for the metastore service endpoint. If unspecified, defaults to \'THRIFT\'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "kerberosConfigs",
      "Information used to configure the Hive metastore service as a service principal in a Kerberos realm.",
      dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Hive metastore schema version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "auxiliaryVersions",
      "A mapping of Hive metastore version to the auxiliary version configuration.\nWhen specified, a secondary Hive metastore service is created along with the primary service.\nAll auxiliary versions must be less than the service's primary version.\nThe key is the auxiliary service name and it must match the regular expression a-z?.\nThis means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.",
      dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "configOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).\nThe mappings override system defaults (some keys cannot be overridden)",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
