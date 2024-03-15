import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { VolumeReplicationDestinationVolumeParameters } from "../types/VolumeReplicationDestinationVolumeParameters";
import { VolumeReplicationTransferStat } from "../types/VolumeReplicationTransferStat";

export interface VolumeReplicationArgs {
  // An description of this resource.
  Description?: string;

  /*
Destination volume parameters.
Structure is documented below.
*/
  DestinationVolumeParameters?: VolumeReplicationDestinationVolumeParameters;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  Location?: string;

  // The name of the existing source volume.
  VolumeName?: string;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  ReplicationEnabled?: boolean;

  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  ReplicationSchedule?: string;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  WaitForMirror?: boolean;

  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  DeleteDestinationVolume?: boolean;

  /*
Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.
*/
  ForceStopping?: boolean;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class VolumeReplication extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  // Full resource name of destination volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public DestinationVolume?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  public Name?: string;

  /*
Reverting a replication can swap source and destination volume roles. This field indicates if the `location` hosts
the source or destination volume. For resume and revert and resume operations it is critical to understand
which volume is the source volume, since it will overwrite changes done to the destination volume.
*/
  public Role?: string;

  // Full resource name of source volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public SourceVolume?: string;

  // State details of the replication resource.
  public StateDetails?: string;

  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  public DeleteDestinationVolume?: boolean;

  // An description of this resource.
  public Description?: string;

  /*
Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.
*/
  public ForceStopping?: boolean;

  /*
Indicates the state of the mirror between source and destination volumes. Depending on the amount of data
in your source volume, PREPARING phase can take hours or days. mirrorState = MIRRORED indicates your baseline
transfer ended and destination volume became accessible read-only. TRANSFERRING means a MIRRORED volume
currently receives an update. Updated every 5 minutes.
*/
  public MirrorState?: string;

  // The name of the existing source volume.
  public VolumeName?: string;

  /*
Destination volume parameters.
Structure is documented below.
*/
  public DestinationVolumeParameters?: VolumeReplicationDestinationVolumeParameters;

  /*
Condition of the relationship. Can be one of the following:
- true: The replication relationship is healthy. It has not missed the most recent scheduled transfer.
- false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.
*/
  public Healthy?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  public ReplicationEnabled?: boolean;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  public WaitForMirror?: boolean;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  public Location?: string;

  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  public ReplicationSchedule?: string;

  // Indicates the state of replication resource. State of the mirror itself is indicated in mirrorState.
  public State?: string;

  /*
Replication transfer statistics. All statistics are updated every 5 minutes.
Structure is documented below.
*/
  public TransferStats?: Array<VolumeReplicationTransferStat>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DestinationVolumeParameters",
        "Destination volume parameters.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of region for this resource. The resource needs to be created in the region of the destination volume.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ReplicationEnabled",
        "Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write\nand act independently from the source volume.\nSet to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes\ndone to the destination volume with the content of the source volume.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReplicationSchedule",
        "Specifies the replication interval.\nPossible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeleteDestinationVolume",
        "A destination volume is created as part of replication creation. The destination volume will not became under Terraform\nmanagement unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter\nto true will delete the *current* destination volume when destroying the replication. If you reversed the replication\ndirection, this will be your former source volume! For production use, it is recommended to keep this parameter false to\navoid accidental volume deletion. Handle with care. Default is false.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceStopping",
        "Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING\ncurrently receives an update and stopping the update might be undesirable. Set this parameter to true\nto stop anyway. All data transferred to the destination will be discarded and content of destination\nvolume will remain at the state of the last successful update. Default is false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VolumeName",
        "The name of the existing source volume.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "WaitForMirror",
        "Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to\nreach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this\nparameter to true. Default is false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the replication. Needs to be unique per location.\n\n\n- - -",
      ),
    ];
  }
}
