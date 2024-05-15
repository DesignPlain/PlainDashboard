import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Netapp_VolumeReplicationDestinationVolumeParameters,
  Netapp_VolumeReplicationDestinationVolumeParameters_GetTypes,
} from "../types/Netapp_VolumeReplicationDestinationVolumeParameters";
import {
  Netapp_VolumeReplicationTransferStat,
  Netapp_VolumeReplicationTransferStat_GetTypes,
} from "../types/Netapp_VolumeReplicationTransferStat";

export interface VolumeReplicationArgs {
  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  ReplicationSchedule?: string;

  // The name of the existing source volume.
  VolumeName?: string;

  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  DeleteDestinationVolume?: boolean;

  // An description of this resource.
  Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  Location?: string;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  Name?: string;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  ReplicationEnabled?: boolean;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  WaitForMirror?: boolean;

  /*
Destination volume parameters.
Structure is documented below.
*/
  DestinationVolumeParameters?: Netapp_VolumeReplicationDestinationVolumeParameters;

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
}
export class VolumeReplication extends Resource {
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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  public ReplicationEnabled?: boolean;

  // State details of the replication resource.
  public StateDetails?: string;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public CreateTime?: string;

  // An description of this resource.
  public Description?: string;

  /*
Destination volume parameters.
Structure is documented below.
*/
  public DestinationVolumeParameters?: Netapp_VolumeReplicationDestinationVolumeParameters;

  /*
Replication transfer statistics. All statistics are updated every 5 minutes.
Structure is documented below.
*/
  public TransferStats?: Array<Netapp_VolumeReplicationTransferStat>;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  public Name?: string;

  // Full resource name of source volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public SourceVolume?: string;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  public WaitForMirror?: boolean;

  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  public DeleteDestinationVolume?: boolean;

  // Full resource name of destination volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public DestinationVolume?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Indicates the state of replication resource. State of the mirror itself is indicated in mirrorState.
  public State?: string;

  // The name of the existing source volume.
  public VolumeName?: string;

  /*
Condition of the relationship. Can be one of the following:
- true: The replication relationship is healthy. It has not missed the most recent scheduled transfer.
- false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.
*/
  public Healthy?: boolean;

  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  public ReplicationSchedule?: string;

  /*
Reverting a replication can swap source and destination volume roles. This field indicates if the `location` hosts
the source or destination volume. For resume and revert and resume operations it is critical to understand
which volume is the source volume, since it will overwrite changes done to the destination volume.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "VolumeName",
        "The name of the existing source volume.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An description of this resource.",
        [],
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
        InputType.Bool,
        "ReplicationEnabled",
        "Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write\nand act independently from the source volume.\nSet to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes\ndone to the destination volume with the content of the source volume.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "WaitForMirror",
        "Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to\nreach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this\nparameter to true. Default is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DestinationVolumeParameters",
        "Destination volume parameters.\nStructure is documented below.",
        Netapp_VolumeReplicationDestinationVolumeParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ReplicationSchedule",
        "Specifies the replication interval.\nPossible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of region for this resource. The resource needs to be created in the region of the destination volume.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the replication. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceStopping",
        "Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING\ncurrently receives an update and stopping the update might be undesirable. Set this parameter to true\nto stop anyway. All data transferred to the destination will be discarded and content of destination\nvolume will remain at the state of the last successful update. Default is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DeleteDestinationVolume",
        "A destination volume is created as part of replication creation. The destination volume will not became under Terraform\nmanagement unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter\nto true will delete the *current* destination volume when destroying the replication. If you reversed the replication\ndirection, this will be your former source volume! For production use, it is recommended to keep this parameter false to\navoid accidental volume deletion. Handle with care. Default is false.",
        [],
        false,
        false,
      ),
    ];
  }
}
