import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VolumeSnapshotArgs {
  // The name of the volume to create the snapshot in.
  VolumeName?: string;

  // Description for the snapshot.
  Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.
  Location?: string;

  /*
The name of the snapshot.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class VolumeSnapshot extends Resource {
  // Description for the snapshot.
  public Description?: string;

  // Storage used to store blocks unique to this snapshot.
  public UsedBytes?: number;

  /*
The name of the snapshot.


- - -
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

  // The name of the volume to create the snapshot in.
  public VolumeName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the snapshot.\n\n\n- - -",
        [],
        false,
        true,
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
        InputType.String,
        "VolumeName",
        "The name of the volume to create the snapshot in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description for the snapshot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
