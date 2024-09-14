import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DatabaseArgs {
  /*
Whether to enable the PITR feature on this database.
If `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.
Default value is `POINT_IN_TIME_RECOVERY_DISABLED`.
Possible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.
*/
  pointInTimeRecoveryEnablement?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The type of the database.
See https://cloud.google.com/datastore/docs/firestore-or-datastore
for information about how to choose.
Possible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.


- - -
*/
  type?: string;

  /*
The App Engine integration mode to use for this database.
Possible values are: `ENABLED`, `DISABLED`.
*/
  appEngineIntegrationMode?: string;

  /*
The location of the database. Available locations are listed at
https://cloud.google.com/firestore/docs/locations.
*/
  locationId?: string;

  /*
Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform
state but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be
removed from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also
'delete_protection'.
*/
  deletionPolicy?: string;

  /*
The ID to use for the database, which will become the final
component of the database's resource name. This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.
*/
  name?: string;

  /*
The concurrency control mode to use for this database.
Possible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.
*/
  concurrencyMode?: string;

  /*
State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The
default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
--Note:-- Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.
Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]
*/
  deleteProtectionState?: string;
}
export class Database extends DS_Resource {
  /*
The concurrency control mode to use for this database.
Possible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.
*/
  public concurrencyMode?: string;

  // Output only. The timestamp at which this database was created.
  public createTime?: string;

  /*
State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The
default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
--Note:-- Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.
Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]
*/
  public deleteProtectionState?: string;

  /*
Output only. This checksum is computed by the server based on the value of other fields,
and may be sent on update and delete requests to ensure the client has an
up-to-date value before proceeding.
*/
  public etag?: string;

  /*
Whether to enable the PITR feature on this database.
If `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.
Default value is `POINT_IN_TIME_RECOVERY_DISABLED`.
Possible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.
*/
  public pointInTimeRecoveryEnablement?: string;

  /*
The App Engine integration mode to use for this database.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public appEngineIntegrationMode?: string;

  /*
Output only. The earliest timestamp at which older versions of the data can be read from the database. See versionRetentionPeriod above; this field is populated with now - versionRetentionPeriod.
This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public earliestVersionTime?: string;

  /*
The location of the database. Available locations are listed at
https://cloud.google.com/firestore/docs/locations.
*/
  public locationId?: string;

  /*
The type of the database.
See https://cloud.google.com/datastore/docs/firestore-or-datastore
for information about how to choose.
Possible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.


- - -
*/
  public type?: string;

  // Output only. The system-generated UUID4 for this Database.
  public uid?: string;

  /*
Output only. The period during which past versions of data are retained in the database.
Any read or query can specify a readTime within this window, and will read the state of the database at that time.
If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public versionRetentionPeriod?: string;

  /*
Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform
state but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be
removed from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also
'delete_protection'.
*/
  public deletionPolicy?: string;

  /*
Output only. The keyPrefix for this database.
This keyPrefix is used, in combination with the project id ("~") to construct the application id
that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes.
This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).
*/
  public keyPrefix?: string;

  /*
The ID to use for the database, which will become the final
component of the database's resource name. This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. The timestamp at which this database was most recently updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deleteProtectionState",
        "State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The\ndefault value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.\n**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.\nPossible values: [\"DELETE_PROTECTION_STATE_UNSPECIFIED\", \"DELETE_PROTECTION_ENABLED\", \"DELETE_PROTECTION_DISABLED\"]",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "concurrencyMode",
        "The concurrency control mode to use for this database.\nPossible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appEngineIntegrationMode",
        "The App Engine integration mode to use for this database.\nPossible values are: `ENABLED`, `DISABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "locationId",
        "The location of the database. Available locations are listed at\nhttps://cloud.google.com/firestore/docs/locations.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform\nstate but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be\nremoved from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also\n'delete_protection'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        'The ID to use for the database, which will become the final\ncomponent of the database\'s resource name. This value should be 4-63\ncharacters. Valid characters are /[a-z][0-9]-/ with first character\na letter and the last a letter or a number. Must not be\nUUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.\n"(default)" database id is also valid.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pointInTimeRecoveryEnablement",
        "Whether to enable the PITR feature on this database.\nIf `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.\nversionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour\nand reads against 1-minute snapshots beyond 1 hour and within 7 days.\nIf `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.\nDefault value is `POINT_IN_TIME_RECOVERY_DISABLED`.\nPossible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the database.\nSee https://cloud.google.com/datastore/docs/firestore-or-datastore\nfor information about how to choose.\nPossible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
    ];
  }
}
