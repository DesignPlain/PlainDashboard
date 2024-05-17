import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_BackupEncryptionConfig,
  Alloydb_BackupEncryptionConfig_GetTypes,
} from "../types/Alloydb_BackupEncryptionConfig";
import {
  Alloydb_BackupExpiryQuantity,
  Alloydb_BackupExpiryQuantity_GetTypes,
} from "../types/Alloydb_BackupExpiryQuantity";
import {
  Alloydb_BackupEncryptionInfo,
  Alloydb_BackupEncryptionInfo_GetTypes,
} from "../types/Alloydb_BackupEncryptionInfo";

export interface BackupArgs {
  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The ID of the alloydb backup.
  BackupId?: string;

  // User-settable and human-readable display name for the Backup.
  DisplayName?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: Alloydb_BackupEncryptionConfig;

  /*
The location where the alloydb backup should reside.


- - -
*/
  Location?: string;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  Type?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  ClusterName?: string;

  // User-provided description of the backup.
  Description?: string;
}
export class Backup extends Resource {
  // The ID of the alloydb backup.
  public BackupId?: string;

  /*
Output only. The QuantityBasedExpiry of the backup, specified by the backup's retention policy.
Once the expiry quantity is over retention, the backup is eligible to be garbage collected.
Structure is documented below.
*/
  public ExpiryQuantities?: Array<Alloydb_BackupExpiryQuantity>;

  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource.
This can happen due to user-triggered updates or system actions like failover or maintenance.
*/
  public Reconciling?: boolean;

  // Output only. The current state of the backup.
  public State?: string;

  // Output only. The system-generated UID of the cluster which was used to create this resource.
  public ClusterUid?: string;

  /*
Output only. Create time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  /*
Output only. The time at which after the backup is eligible to be garbage collected.
It is the duration specified by the backup's retention policy, added to the backup's createTime.
*/
  public ExpiryTime?: string;

  /*
The location where the alloydb backup should reside.


- - -
*/
  public Location?: string;

  // Output only. The name of the backup resource with the format: - projects/{project}/locations/{region}/backups/{backupId}
  public Name?: string;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  public Type?: string;

  /*
Output only. Update time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // Output only. The size of the backup in bytes.
  public SizeBytes?: string;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  public ClusterName?: string;

  /*
Output only. Delete time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public DeleteTime?: string;

  // User-provided description of the backup.
  public Description?: string;

  // User-settable and human-readable display name for the Backup.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  public EncryptionConfig?: Alloydb_BackupEncryptionConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
  public Uid?: string;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
EncryptionInfo describes the encryption information of a cluster or a backup.
Structure is documented below.
*/
  public EncryptionInfos?: Array<Alloydb_BackupEncryptionInfo>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BackupId",
        "The ID of the alloydb backup.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-settable and human-readable display name for the Backup.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The backup type, which suggests the trigger for the backup.\nPossible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        'Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionConfig",
        "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
        Alloydb_BackupEncryptionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the alloydb backup should reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterName",
        "The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of the backup.",
        [],
        false,
        false,
      ),
    ];
  }
}
