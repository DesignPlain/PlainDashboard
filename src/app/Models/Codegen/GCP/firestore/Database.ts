import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DatabaseArgs {
  /*
The concurrency control mode to use for this database.
Possible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.
*/
  ConcurrencyMode?: string;

  /*
The ID to use for the database, which will become the final
component of the database's resource name. This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.
*/
  Name?: string;

  /*
The App Engine integration mode to use for this database.
Possible values are: `ENABLED`, `DISABLED`.
*/
  AppEngineIntegrationMode?: string;

  /*
State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The
default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
--Note:-- Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.
Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]
*/
  DeleteProtectionState?: string;

  /*
Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform
state but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be
removed from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also
'delete_protection'.
*/
  DeletionPolicy?: string;

  /*
The location of the database. Available locations are listed at
https://cloud.google.com/firestore/docs/locations.
*/
  LocationId?: string;

  /*
Whether to enable the PITR feature on this database.
If `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.
Default value is `POINT_IN_TIME_RECOVERY_DISABLED`.
Possible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.
*/
  PointInTimeRecoveryEnablement?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The type of the database.
See https://cloud.google.com/datastore/docs/firestore-or-datastore
for information about how to choose.
Possible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.


- - -
*/
  Type?: string;
}
export class Database extends Resource {
  /*
Output only. This checksum is computed by the server based on the value of other fields,
and may be sent on update and delete requests to ensure the client has an
up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
Output only. The keyPrefix for this database.
This keyPrefix is used, in combination with the project id ("~") to construct the application id
that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes.
This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).
*/
  public KeyPrefix?: string;

  /*
The location of the database. Available locations are listed at
https://cloud.google.com/firestore/docs/locations.
*/
  public LocationId?: string;

  /*
The ID to use for the database, which will become the final
component of the database's resource name. This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. The period during which past versions of data are retained in the database.
Any read or query can specify a readTime within this window, and will read the state of the database at that time.
If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
*/
  public VersionRetentionPeriod?: string;

  /*
Whether to enable the PITR feature on this database.
If `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.
Default value is `POINT_IN_TIME_RECOVERY_DISABLED`.
Possible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.
*/
  public PointInTimeRecoveryEnablement?: string;

  /*
The concurrency control mode to use for this database.
Possible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.
*/
  public ConcurrencyMode?: string;

  // Output only. The timestamp at which this database was created.
  public CreateTime?: string;

  /*
State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The
default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
--Note:-- Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.
Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]
*/
  public DeleteProtectionState?: string;

  /*
Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform
state but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be
removed from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also
'delete_protection'.
*/
  public DeletionPolicy?: string;

  // Output only. The system-generated UUID4 for this Database.
  public Uid?: string;

  // Output only. The timestamp at which this database was most recently updated.
  public UpdateTime?: string;

  /*
The App Engine integration mode to use for this database.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public AppEngineIntegrationMode?: string;

  /*
Output only. The earliest timestamp at which older versions of the data can be read from the database. See versionRetentionPeriod above; this field is populated with now - versionRetentionPeriod.
This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public EarliestVersionTime?: string;

  /*
The type of the database.
See https://cloud.google.com/datastore/docs/firestore-or-datastore
for information about how to choose.
Possible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.


- - -
*/
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AppEngineIntegrationMode",
        "The App Engine integration mode to use for this database.\nPossible values are: `ENABLED`, `DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LocationId",
        "The location of the database. Available locations are listed at\nhttps://cloud.google.com/firestore/docs/locations.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PointInTimeRecoveryEnablement",
        "Whether to enable the PITR feature on this database.\nIf `POINT_IN_TIME_RECOVERY_ENABLED` is selected, reads are supported on selected versions of the data from within the past 7 days.\nversionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour\nand reads against 1-minute snapshots beyond 1 hour and within 7 days.\nIf `POINT_IN_TIME_RECOVERY_DISABLED` is selected, reads are supported on any version of the data from within the past 1 hour.\nDefault value is `POINT_IN_TIME_RECOVERY_DISABLED`.\nPossible values are: `POINT_IN_TIME_RECOVERY_ENABLED`, `POINT_IN_TIME_RECOVERY_DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of the database.\nSee https://cloud.google.com/datastore/docs/firestore-or-datastore\nfor information about how to choose.\nPossible values are: `FIRESTORE_NATIVE`, `DATASTORE_MODE`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConcurrencyMode",
        "The concurrency control mode to use for this database.\nPossible values are: `OPTIMISTIC`, `PESSIMISTIC`, `OPTIMISTIC_WITH_ENTITY_GROUPS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The ID to use for the database, which will become the final\ncomponent of the database\'s resource name. This value should be 4-63\ncharacters. Valid characters are /[a-z][0-9]-/ with first character\na letter and the last a letter or a number. Must not be\nUUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.\n"(default)" database id is also valid.',
      ),
      new DynamicUIProps(
        InputType.String,
        "DeleteProtectionState",
        "State of delete protection for the database. When delete protection is enabled, this database cannot be deleted. The\ndefault value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.\n**Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'.\nPossible values: [\"DELETE_PROTECTION_STATE_UNSPECIFIED\", \"DELETE_PROTECTION_ENABLED\", \"DELETE_PROTECTION_DISABLED\"]",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "Deletion behavior for this database. If the deletion policy is 'ABANDON', the database will be removed from Terraform\nstate but not deleted from Google Cloud upon destruction. If the deletion policy is 'DELETE', the database will both be\nremoved from Terraform state and deleted from Google Cloud upon destruction. The default value is 'ABANDON'. See also\n'delete_protection'.",
      ),
    ];
  }
}
