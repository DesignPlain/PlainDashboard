import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  finspace_KxVolumeNas1Configuration,
  finspace_KxVolumeNas1Configuration_GetTypes,
} from '../types/finspace_KxVolumeNas1Configuration';
import {
  finspace_KxVolumeAttachedCluster,
  finspace_KxVolumeAttachedCluster_GetTypes,
} from '../types/finspace_KxVolumeAttachedCluster';

export interface KxVolumeArgs {
  // The type of file system volume. Currently, FinSpace only supports the `NAS_1` volume type. When you select the `NAS_1` volume type, you must also provide `nas1_configuration`.
  type?: string;

  /*
The identifier of the AWS Availability Zone IDs.

The following arguments are optional:
*/
  availabilityZones?: Array<string>;

  /*
The number of availability zones you want to assign per volume. Currently, Finspace only support SINGLE for volumes.
- `SINGLE` - Assigns one availability zone per volume.
*/
  azMode?: string;

  // Description of the volume.
  description?: string;

  // A unique identifier for the kdb environment, whose clusters can attach to the volume.
  environmentId?: string;

  // Unique name for the volumr that you want to create.
  name?: string;

  // Specifies the configuration for the Network attached storage (`NAS_1`) file system volume. This parameter is required when `volume_type` is `NAS_1`. See `nas1_configuration` Argument Reference below.
  nas1Configurations?: Array<finspace_KxVolumeNas1Configuration>;

  // A list of key-value pairs to label the volume. You can add up to 50 tags to a volume
  tags?: Map<string, string>;
}
export class KxVolume extends DS_Resource {
  // Amazon Resource Name (ARN) identifier of the KX volume.
  public arn?: string;

  /*
The number of availability zones you want to assign per volume. Currently, Finspace only support SINGLE for volumes.
- `SINGLE` - Assigns one availability zone per volume.
*/
  public azMode?: string;

  // Description of the volume.
  public description?: string;

  // The error message when a failed state occurs.
  public statusReason?: string;

  /*
The identifier of the AWS Availability Zone IDs.

The following arguments are optional:
*/
  public availabilityZones?: Array<string>;

  // The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
  public createdTimestamp?: string;

  // Unique name for the volumr that you want to create.
  public name?: string;

  // A list of key-value pairs to label the volume. You can add up to 50 tags to a volume
  public tags?: Map<string, string>;

  // The type of file system volume. Currently, FinSpace only supports the `NAS_1` volume type. When you select the `NAS_1` volume type, you must also provide `nas1_configuration`.
  public type?: string;

  //
  public tagsAll?: Map<string, string>;

  //
  public attachedClusters?: Array<finspace_KxVolumeAttachedCluster>;

  // A unique identifier for the kdb environment, whose clusters can attach to the volume.
  public environmentId?: string;

  // Last timestamp at which the volume was updated in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public lastModifiedTimestamp?: string;

  // Specifies the configuration for the Network attached storage (`NAS_1`) file system volume. This parameter is required when `volume_type` is `NAS_1`. See `nas1_configuration` Argument Reference below.
  public nas1Configurations?: Array<finspace_KxVolumeNas1Configuration>;

  /*
The status of volume creation.
- `CREATING` – The volume creation is in progress.
- `CREATE_FAILED` – The volume creation has failed.
- `ACTIVE` – The volume is active.
- `UPDATING` – The volume is in the process of being updated.
- `UPDATE_FAILED` – The update action failed.
- `UPDATED` – The volume is successfully updated.
- `DELETING` – The volume is in the process of being deleted.
- `DELETE_FAILED` – The system failed to delete the volume.
- `DELETED` – The volume is successfully deleted.
*/
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'environmentId',
        'A unique identifier for the kdb environment, whose clusters can attach to the volume.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for the volumr that you want to create.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'nas1Configurations',
        'Specifies the configuration for the Network attached storage (`NAS_1`) file system volume. This parameter is required when `volume_type` is `NAS_1`. See `nas1_configuration` Argument Reference below.',
        () => finspace_KxVolumeNas1Configuration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A list of key-value pairs to label the volume. You can add up to 50 tags to a volume',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of file system volume. Currently, FinSpace only supports the `NAS_1` volume type. When you select the `NAS_1` volume type, you must also provide `nas1_configuration`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'availabilityZones',
        'The identifier of the AWS Availability Zone IDs.\n\nThe following arguments are optional:',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'azMode',
        'The number of availability zones you want to assign per volume. Currently, Finspace only support SINGLE for volumes.\n* `SINGLE` - Assigns one availability zone per volume.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the volume.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
