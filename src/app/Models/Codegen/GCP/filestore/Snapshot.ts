import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SnapshotArgs {
  // A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
  Description?: string;

  /*
The resource name of the filestore instance.


- - -
*/
  Instance?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  Location?: string;

  /*
The resource name of the snapshot. The name must be unique within the specified instance.
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
export class Snapshot extends Resource {
  // A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
  public Description?: string;

  /*
The resource name of the filestore instance.


- - -
*/
  public Instance?: string;

  // The snapshot state.
  public State?: string;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
  public Location?: string;

  /*
The resource name of the snapshot. The name must be unique within the specified instance.
The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The time when the snapshot was created in RFC3339 text format.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The amount of bytes needed to allocate a full copy of the snapshot content.
  public FilesystemUsedBytes?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The resource name of the filestore instance.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location of the instance. This can be a region for ENTERPRISE tier instances.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the snapshot. The name must be unique within the specified instance.\nThe name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
    ];
  }
}
