import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackupArgs {
  /*
The resource name of the backup. The name must be unique within the specified instance.
The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Name of the file share in the source Cloud Filestore instance that the backup is created from.
  sourceFileShare?: string;

  // The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.
  sourceInstance?: string;

  // A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  description?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The name of the location of the instance. This can be a region for ENTERPRISE tier instances.


- - -
*/
  location?: string;
}
export class Backup extends Resource {
  // A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The backup state.
  public state?: string;

  // The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.
  public storageBytes?: string;

  // Name of the file share in the source Cloud Filestore instance that the backup is created from.
  public sourceFileShare?: string;

  // The amount of bytes needed to allocate a full copy of the snapshot content.
  public capacityGb?: string;

  // KMS key name used for data encryption.
  public kmsKeyName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.
  public sourceInstance?: string;

  // The service tier of the source Cloud Filestore instance that this backup is created from.
  public sourceInstanceTier?: string;

  // The time when the snapshot was created in RFC3339 text format.
  public createTime?: string;

  // Amount of bytes that will be downloaded if the backup is restored.
  public downloadBytes?: string;

  /*
The name of the location of the instance. This can be a region for ENTERPRISE tier instances.


- - -
*/
  public location?: string;

  /*
The resource name of the backup. The name must be unique within the specified instance.
The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceFileShare",
        "Name of the file share in the source Cloud Filestore instance that the backup is created from.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceInstance",
        "The resource name of the source Cloud Filestore instance, in the format projects/{projectId}/locations/{locationId}/instances/{instanceId}, used to create this backup.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the backup. The name must be unique within the specified instance.\nThe name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
    ];
  }
}
