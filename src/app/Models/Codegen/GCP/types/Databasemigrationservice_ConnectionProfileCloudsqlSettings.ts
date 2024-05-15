import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig,
  Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig";

export interface Databasemigrationservice_ConnectionProfileCloudsqlSettings {
  /*
The database engine type and version.
Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion
*/
  DatabaseVersion?: string;

  // The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  StorageAutoResizeLimit?: string;

  /*
The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).
For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings
*/
  Tier?: string;

  // The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.
  UserLabels?: Map<string, string>;

  // The KMS key name used for the csql instance.
  CmekKeyName?: string;

  // The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.
  DataDiskSizeGb?: string;

  /*
The type of storage.
Possible values are: `PD_SSD`, `PD_HDD`.
*/
  DataDiskType?: string;

  // The database flags passed to the Cloud SQL instance at startup.
  DatabaseFlags?: Map<string, string>;

  // The Cloud SQL default instance level collation.
  Collation?: string;

  // The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID
  SourceId?: string;

  /*
The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'.
Possible values are: `ALWAYS`, `NEVER`.
*/
  ActivationPolicy?: string;

  /*
If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.
*/
  AutoStorageIncrease?: boolean;

  // The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.
  Zone?: string;

  /*
The edition of the given Cloud SQL instance.
Possible values are: `ENTERPRISE`, `ENTERPRISE_PLUS`.
*/
  Edition?: string;

  /*
The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled.
Structure is documented below.
*/
  IpConfig?: Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig;

  /*
Input only. Initial root password.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  RootPassword?: string;

  /*
(Output)
Output only. Indicates If this connection profile root password is stored.
*/
  RootPasswordSet?: boolean;
}

export function Databasemigrationservice_ConnectionProfileCloudsqlSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DataDiskSizeGb",
      "The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoStorageIncrease",
      "If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.\nIf the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IpConfig",
      "The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RootPassword",
      "Input only. Initial root password.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DataDiskType",
      "The type of storage.\nPossible values are: `PD_SSD`, `PD_HDD`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "DatabaseFlags",
      "The database flags passed to the Cloud SQL instance at startup.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ActivationPolicy",
      "The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'.\nPossible values are: `ALWAYS`, `NEVER`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Edition",
      "The edition of the given Cloud SQL instance.\nPossible values are: `ENTERPRISE`, `ENTERPRISE_PLUS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatabaseVersion",
      "The database engine type and version.\nCurrently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StorageAutoResizeLimit",
      "The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tier",
      "The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).\nFor more information, see https://cloud.google.com/sql/docs/mysql/instance-settings",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "UserLabels",
      "The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceId",
      "The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CmekKeyName",
      "The KMS key name used for the csql instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Collation",
      "The Cloud SQL default instance level collation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RootPasswordSet",
      "(Output)\nOutput only. Indicates If this connection profile root password is stored.",
      [],
      false,
      false,
    ),
  ];
}
