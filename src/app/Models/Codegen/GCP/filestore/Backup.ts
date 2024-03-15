import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackupArgs {
  // Name of the file share in the source Cloud Filestore instance that the backup is created from.
  SourceFileShare?: string;

  // The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.
  SourceInstance?: string;

  // A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  Description?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The name of the location of the instance. This can be a region for ENTERPRISE tier instances.


- - -
*/
  Location?: string;

  /*
The resource name of the backup. The name must be unique within the specified instance.
The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Backup extends Resource {
  // The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.
  public SourceInstance?: string;

  // The amount of bytes needed to allocate a full copy of the snapshot content.
  public CapacityGb?: string;

  // The time when the snapshot was created in RFC3339 text format.
  public CreateTime?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The service tier of the source Cloud Filestore instance that this backup is created from.
  public SourceInstanceTier?: string;

  // The backup state.
  public State?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The name of the location of the instance. This can be a region for ENTERPRISE tier instances.


- - -
*/
  public Location?: string;

  /*
The resource name of the backup. The name must be unique within the specified instance.
The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  // Name of the file share in the source Cloud Filestore instance that the backup is created from.
  public SourceFileShare?: string;

  // Amount of bytes that will be downloaded if the backup is restored.
  public DownloadBytes?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.
  public StorageBytes?: string;

  // A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  public Description?: string;

  // KMS key name used for data encryption.
  public KmsKeyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SourceFileShare",
        "Name of the file share in the source Cloud Filestore instance that the backup is created from.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceInstance",
        "The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the backup. The name must be unique within the specified instance.\nThe name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
