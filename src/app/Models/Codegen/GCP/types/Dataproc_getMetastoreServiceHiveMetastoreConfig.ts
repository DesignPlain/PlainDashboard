import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion,
  Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes,
} from "./Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion";
import {
  Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig,
  Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes,
} from "./Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig";

export interface Dataproc_getMetastoreServiceHiveMetastoreConfig {
  /*
A mapping of Hive metastore version to the auxiliary version configuration.
When specified, a secondary Hive metastore service is created along with the primary service.
All auxiliary versions must be less than the service's primary version.
The key is the auxiliary service name and it must match the regular expression a-z?.
This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
*/
  AuxiliaryVersions?: Array<Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion>;

  /*
A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
*/
  ConfigOverrides?: Map<string, string>;

  // The protocol to use for the metastore service endpoint. If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]
  EndpointProtocol?: string;

  // Information used to configure the Hive metastore service as a service principal in a Kerberos realm.
  KerberosConfigs?: Array<Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig>;

  // The Hive metastore schema version.
  Version?: string;
}

export function Dataproc_getMetastoreServiceHiveMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AuxiliaryVersions",
      "A mapping of Hive metastore version to the auxiliary version configuration.\nWhen specified, a secondary Hive metastore service is created along with the primary service.\nAll auxiliary versions must be less than the service's primary version.\nThe key is the auxiliary service name and it must match the regular expression a-z?.\nThis means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.",
      Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ConfigOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).\nThe mappings override system defaults (some keys cannot be overridden)",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EndpointProtocol",
      'The protocol to use for the metastore service endpoint. If unspecified, defaults to \'THRIFT\'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "KerberosConfigs",
      "Information used to configure the Hive metastore service as a service principal in a Kerberos realm.",
      Dataproc_getMetastoreServiceHiveMetastoreConfigKerberosConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Hive metastore schema version.",
      [],
      true,
      false,
    ),
  ];
}
