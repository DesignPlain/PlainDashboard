import { getMetastoreServiceHiveMetastoreConfigKerberosConfig } from "./getMetastoreServiceHiveMetastoreConfigKerberosConfig";
import { getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion } from "./getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion";

export interface getMetastoreServiceHiveMetastoreConfig {
  /*
A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
The mappings override system defaults (some keys cannot be overridden)
*/
  ConfigOverrides?: Map<string, string>;

  // The protocol to use for the metastore service endpoint. If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]
  EndpointProtocol?: string;

  // Information used to configure the Hive metastore service as a service principal in a Kerberos realm.
  KerberosConfigs?: Array<getMetastoreServiceHiveMetastoreConfigKerberosConfig>;

  // The Hive metastore schema version.
  Version?: string;

  /*
A mapping of Hive metastore version to the auxiliary version configuration.
When specified, a secondary Hive metastore service is created along with the primary service.
All auxiliary versions must be less than the service's primary version.
The key is the auxiliary service name and it must match the regular expression a-z?.
This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.
*/
  AuxiliaryVersions?: Array<getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion>;
}
