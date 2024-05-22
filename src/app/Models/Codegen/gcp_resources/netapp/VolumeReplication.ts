import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  netapp_VolumeReplicationDestinationVolumeParameters,
  netapp_VolumeReplicationDestinationVolumeParameters_GetTypes,
} from "../types/netapp_VolumeReplicationDestinationVolumeParameters";
import {
  netapp_VolumeReplicationTransferStat,
  netapp_VolumeReplicationTransferStat_GetTypes,
} from "../types/netapp_VolumeReplicationTransferStat";

export interface VolumeReplicationArgs {
  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  deleteDestinationVolume?: boolean;

  /*
Destination volume parameters.
Structure is documented below.
*/
  destinationVolumeParameters?: netapp_VolumeReplicationDestinationVolumeParameters;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  location?: string;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  replicationEnabled?: boolean;

  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  replicationSchedule?: string;

  // The name of the existing source volume.
  volumeName?: string;

  // An description of this resource.
  description?: string;

  /*
Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.
*/
  forceStopping?: boolean;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  waitForMirror?: boolean;
}
export class VolumeReplication extends Resource {
  // An description of this resource.
  public description?: string;

  /*
Condition of the relationship. Can be one of the following:
- true: The replication relationship is healthy. It has not missed the most recent scheduled transfer.
- false: The replication relationship is not healthy. It has missed the most recent scheduled transfer.
*/
  public healthy?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // State details of the replication resource.
  public stateDetails?: string;

  // Create time of the active directory. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
  public createTime?: string;

  /*
Destination volume parameters.
Structure is documented below.
*/
  public destinationVolumeParameters?: netapp_VolumeReplicationDestinationVolumeParameters;

  /*
Indicates the state of the mirror between source and destination volumes. Depending on the amount of data
in your source volume, PREPARING phase can take hours or days. mirrorState = MIRRORED indicates your baseline
transfer ended and destination volume became accessible read-only. TRANSFERRING means a MIRRORED volume
currently receives an update. Updated every 5 minutes.
*/
  public mirrorState?: string;

  /*
Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to
reach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this
parameter to true. Default is false.
*/
  public waitForMirror?: boolean;

  // Full resource name of source volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public sourceVolume?: string;

  /*
A destination volume is created as part of replication creation. The destination volume will not became under Terraform
management unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter
to true will delete the -current- destination volume when destroying the replication. If you reversed the replication
direction, this will be your former source volume! For production use, it is recommended to keep this parameter false to
avoid accidental volume deletion. Handle with care. Default is false.
*/
  public deleteDestinationVolume?: boolean;

  /*
Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.
*/
  public forceStopping?: boolean;

  // Name of region for this resource. The resource needs to be created in the region of the destination volume.
  public location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.
*/
  public replicationEnabled?: boolean;

  /*
Specifies the replication interval.
Possible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.
*/
  public replicationSchedule?: string;

  /*
Reverting a replication can swap source and destination volume roles. This field indicates if the `location` hosts
the source or destination volume. For resume and revert and resume operations it is critical to understand
which volume is the source volume, since it will overwrite changes done to the destination volume.
*/
  public role?: string;

  // Indicates the state of replication resource. State of the mirror itself is indicated in mirrorState.
  public state?: string;

  /*
Replication transfer statistics. All statistics are updated every 5 minutes.
Structure is documented below.
*/
  public transferStats?: Array<netapp_VolumeReplicationTransferStat>;

  // Full resource name of destination volume with format: `projects/{{project}}/locations/{{location}}/volumes/{{volumeId}}`
  public destinationVolume?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The name of the replication. Needs to be unique per location.


- - -
*/
  public name?: string;

  // The name of the existing source volume.
  public volumeName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "deleteDestinationVolume",
        "A destination volume is created as part of replication creation. The destination volume will not became under Terraform\nmanagement unless you import it manually. If you delete the replication, this volume will remain. Setting this parameter\nto true will delete the *current* destination volume when destroying the replication. If you reversed the replication\ndirection, this will be your former source volume! For production use, it is recommended to keep this parameter false to\navoid accidental volume deletion. Handle with care. Default is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "replicationEnabled",
        "Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write\nand act independently from the source volume.\nSet to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes\ndone to the destination volume with the content of the source volume.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeName",
        "The name of the existing source volume.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destinationVolumeParameters",
        "Destination volume parameters.\nStructure is documented below.",
        netapp_VolumeReplicationDestinationVolumeParameters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Name of region for this resource. The resource needs to be created in the region of the destination volume.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationSchedule",
        "Specifies the replication interval.\nPossible values are: `EVERY_10_MINUTES`, `HOURLY`, `DAILY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceStopping",
        "Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING\ncurrently receives an update and stopping the update might be undesirable. Set this parameter to true\nto stop anyway. All data transferred to the destination will be discarded and content of destination\nvolume will remain at the state of the last successful update. Default is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the replication. Needs to be unique per location.\n\n\n- - -",
        [],
        false,
        true,
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
        InputType.Bool,
        "waitForMirror",
        "Replication resource state is independent of mirror_state. With enough data, it can take many hours for mirror_state to\nreach MIRRORED. If you want Terraform to wait for the mirror to finish on create/stop/resume operations, set this\nparameter to true. Default is false.",
        [],
        false,
        false,
      ),
    ];
  }
}
