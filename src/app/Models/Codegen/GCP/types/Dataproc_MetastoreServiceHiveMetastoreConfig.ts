import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig,
  Dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes,
} from "./Dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig";
import {
  Dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion,
  Dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes,
} from "./Dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion";

export interface Dataproc_MetastoreServiceHiveMetastoreConfig {
  /*
Information used to configure the Hive metastore service as a service principal in a Kerberos realm.
Structure is documented below.
*/
  KerberosConfig?: Dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig;

  // The Hive metastore schema version.
  Version?: string;

  /*
A mapping of Hive metastore version to the auxiliary version configuration.
When specified, a secondary Hive metastore service is created along with the primary service.
All auxiliary versions must be less than the service's primary version.
The key is the auxiliary service name and it must match the regular expression a-z?.
This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
Structure is documented below.
*/
  AuxiliaryVersions?: Array<Dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion>;

  /*
A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
*/
  ConfigOverrides?: Map<string, string>;

  /*
The protocol to use for the metastore service endpoint. If unspecified, defaults to `THRIFT`.
Default value is `THRIFT`.
Possible values are: `THRIFT`, `GRPC`.
*/
  EndpointProtocol?: string;
}

export function Dataproc_MetastoreServiceHiveMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KerberosConfig",
      "Information used to configure the Hive metastore service as a service principal in a Kerberos realm.\nStructure is documented below.",
      Dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Hive metastore schema version.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AuxiliaryVersions",
      "A mapping of Hive metastore version to the auxiliary version configuration.\nWhen specified, a secondary Hive metastore service is created along with the primary service.\nAll auxiliary versions must be less than the service's primary version.\nThe key is the auxiliary service name and it must match the regular expression a-z?.\nThis means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.\nStructure is documented below.",
      Dataproc_MetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ConfigOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).\nThe mappings override system defaults (some keys cannot be overridden)",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EndpointProtocol",
      "The protocol to use for the metastore service endpoint. If unspecified, defaults to `THRIFT`.\nDefault value is `THRIFT`.\nPossible values are: `THRIFT`, `GRPC`.",
      [],
      false,
      true,
    ),
  ];
}
