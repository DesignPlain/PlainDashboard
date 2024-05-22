import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alloydb_BackupEncryptionConfig,
  alloydb_BackupEncryptionConfig_GetTypes,
} from "../types/alloydb_BackupEncryptionConfig";
import {
  alloydb_BackupExpiryQuantity,
  alloydb_BackupExpiryQuantity_GetTypes,
} from "../types/alloydb_BackupExpiryQuantity";
import {
  alloydb_BackupEncryptionInfo,
  alloydb_BackupEncryptionInfo_GetTypes,
} from "../types/alloydb_BackupEncryptionInfo";

export interface BackupArgs {
  // User-settable and human-readable display name for the Backup.
  displayName?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  encryptionConfig?: alloydb_BackupEncryptionConfig;

  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location where the alloydb backup should reside.


- - -
*/
  location?: string;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  type?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // The ID of the alloydb backup.
  backupId?: string;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  clusterName?: string;

  // User-provided description of the backup.
  description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Backup extends Resource {
  // Output only. The size of the backup in bytes.
  public sizeBytes?: string;

  // Output only. The current state of the backup.
  public state?: string;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  public clusterName?: string;

  // User-provided description of the backup.
  public description?: string;

  /*
Output only. The QuantityBasedExpiry of the backup, specified by the backup's retention policy.
Once the expiry quantity is over retention, the backup is eligible to be garbage collected.
Structure is documented below.
*/
  public expiryQuantities?: Array<alloydb_BackupExpiryQuantity>;

  /*
The location where the alloydb backup should reside.


- - -
*/
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
  public uid?: string;

  // Output only. The system-generated UID of the cluster which was used to create this resource.
  public clusterUid?: string;

  /*
Output only. Create time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  public encryptionConfig?: alloydb_BackupEncryptionConfig;

  // Output only. The name of the backup resource with the format: - projects/{project}/locations/{region}/backups/{backupId}
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource.
This can happen due to user-triggered updates or system actions like failover or maintenance.
*/
  public reconciling?: boolean;

  // User-settable and human-readable display name for the Backup.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // For Resource freshness validation (https://google.aip.dev/154)
  public etag?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
EncryptionInfo describes the encryption information of a cluster or a backup.
Structure is documented below.
*/
  public encryptionInfos?: Array<alloydb_BackupEncryptionInfo>;

  /*
Output only. The time at which after the backup is eligible to be garbage collected.
It is the duration specified by the backup's retention policy, added to the backup's createTime.
*/
  public expiryTime?: string;

  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  public type?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // The ID of the alloydb backup.
  public backupId?: string;

  /*
Output only. Delete time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public deleteTime?: string;

  /*
Output only. Update time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        'Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description of the backup.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfig",
        "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
        alloydb_BackupEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the alloydb backup should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The backup type, which suggests the trigger for the backup.\nPossible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupId",
        "The ID of the alloydb backup.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterName",
        "The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User-settable and human-readable display name for the Backup.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
