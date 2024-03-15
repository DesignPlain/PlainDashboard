import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BackupEncryptionConfig } from "../types/BackupEncryptionConfig";
import { BackupExpiryQuantity } from "../types/BackupExpiryQuantity";
import { BackupEncryptionInfo } from "../types/BackupEncryptionInfo";

export interface BackupArgs {
  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // The ID of the alloydb backup.
  BackupId?: string;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  ClusterName?: string;

  // User-settable and human-readable display name for the Backup.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  Type?: string;

  // User-provided description of the backup.
  Description?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  EncryptionConfig?: BackupEncryptionConfig;

  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location where the alloydb backup should reside.


- - -
*/
  Location?: string;
}
export class Backup extends Resource {
  /*
User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
  public Uid?: string;

  // The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).
  public ClusterName?: string;

  // Output only. The system-generated UID of the cluster which was used to create this resource.
  public ClusterUid?: string;

  /*
Output only. Delete time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public DeleteTime?: string;

  /*
EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).
Structure is documented below.
*/
  public EncryptionConfig?: BackupEncryptionConfig;

  /*
Output only. The QuantityBasedExpiry of the backup, specified by the backup's retention policy.
Once the expiry quantity is over retention, the backup is eligible to be garbage collected.
Structure is documented below.
*/
  public ExpiryQuantities?: Array<BackupExpiryQuantity>;

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

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  /*
Output only. Create time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // User-provided description of the backup.
  public Description?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  // Output only. The size of the backup in bytes.
  public SizeBytes?: string;

  // Output only. The current state of the backup.
  public State?: string;

  /*
Output only. Update time stamp. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // User-settable and human-readable display name for the Backup.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The backup type, which suggests the trigger for the backup.
Possible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.
*/
  public Type?: string;

  // The ID of the alloydb backup.
  public BackupId?: string;

  /*
EncryptionInfo describes the encryption information of a cluster or a backup.
Structure is documented below.
*/
  public EncryptionInfos?: Array<BackupEncryptionInfo>;

  // Output only. The name of the backup resource with the format: - projects/{project}/locations/{region}/backups/{backupId}
  public Name?: string;

  /*
Output only. Reconciling (https://google.aip.dev/128#reconciliation), if true, indicates that the service is actively updating the resource.
This can happen due to user-triggered updates or system actions like failover or maintenance.
*/
  public Reconciling?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The backup type, which suggests the trigger for the backup.\nPossible values are: `TYPE_UNSPECIFIED`, `ON_DEMAND`, `AUTOMATED`, `CONTINUOUS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of the backup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EncryptionConfig",
        "EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'User-defined labels for the alloydb backup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the alloydb backup should reside.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        'Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "BackupId",
        "The ID of the alloydb backup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterName",
        "The full resource name of the backup source cluster (e.g., projects/{project}/locations/{location}/clusters/{clusterId}).",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-settable and human-readable display name for the Backup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
