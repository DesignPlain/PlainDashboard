import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig,
  dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes,
} from "./dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig";
import {
  dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion,
  dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes,
} from "./dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion";

export interface dataproc_MetastoreServiceHiveMetastoreConfig {
  /*
A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
*/
  configOverrides?: Map<string, string>;

  /*
The protocol to use for the metastore service endpoint. If unspecified, defaults to `THRIFT`.
Default value is `THRIFT`.
Possible values are: `THRIFT`, `GRPC`.
*/
  endpointProtocol?: string;

  /*
Information used to configure the Hive metastore service as a service principal in a Kerberos realm.
Structure is documented below.
*/
  kerberosConfig?: dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig;

  // The Hive metastore schema version.
  version?: string;

  /*
A mapping of Hive metastore version to the auxiliary version configuration.
When specified, a secondary Hive metastore service is created along with the primary service.
All auxiliary versions must be less than the service's primary version.
The key is the auxiliary service name and it must match the regular expression a-z?.
This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
Structure is documented below.
*/
  auxiliaryVersions?: Array<dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion>;
}

export function dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kerberosConfig",
      "Information used to configure the Hive metastore service as a service principal in a Kerberos realm.\nStructure is documented below.",
      () =>
        dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Hive metastore schema version.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "auxiliaryVersions",
      "A mapping of Hive metastore version to the auxiliary version configuration.\nWhen specified, a secondary Hive metastore service is created along with the primary service.\nAll auxiliary versions must be less than the service's primary version.\nThe key is the auxiliary service name and it must match the regular expression a-z?.\nThis means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.\nStructure is documented below.",
      () =>
        dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "configOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).\nThe mappings override system defaults (some keys cannot be overridden)",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointProtocol",
      "The protocol to use for the metastore service endpoint. If unspecified, defaults to `THRIFT`.\nDefault value is `THRIFT`.\nPossible values are: `THRIFT`, `GRPC`.",
      () => [],
      false,
      true,
    ),
  ];
}
