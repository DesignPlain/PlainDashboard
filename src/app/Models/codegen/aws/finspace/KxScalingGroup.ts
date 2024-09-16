import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KxScalingGroupArgs {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. You can add up to 50 tags to a scaling group.
  tags?: Map<string, string>;

  // The availability zone identifiers for the requested regions.
  availabilityZoneId?: string;

  // A unique identifier for the kdb environment, where you want to create the scaling group.
  environmentId?: string;

  /*
The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.

The following arguments are optional:
*/
  hostType?: string;

  // Unique name for the scaling group that you want to create.
  name?: string;
}
export class KxScalingGroup extends DS_Resource {
  // Last timestamp at which the scaling group was updated in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public lastModifiedTimestamp?: string;

  /*
The status of scaling group.
- `CREATING` – The scaling group creation is in progress.
- `CREATE_FAILED` – The scaling group creation has failed.
- `ACTIVE` – The scaling group is active.
- `UPDATING` – The scaling group is in the process of being updated.
- `UPDATE_FAILED` – The update action failed.
- `DELETING` – The scaling group is in the process of being deleted.
- `DELETE_FAILED` – The system failed to delete the scaling group.
- `DELETED` – The scaling group is successfully deleted.
*/
  public status?: string;

  // The error message when a failed state occurs.
  public statusReason?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) identifier of the KX Scaling Group.
  public arn?: string;

  // The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
  public createdTimestamp?: string;

  // A unique identifier for the kdb environment, where you want to create the scaling group.
  public environmentId?: string;

  // Unique name for the scaling group that you want to create.
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. You can add up to 50 tags to a scaling group.
  public tags?: Map<string, string>;

  // The availability zone identifiers for the requested regions.
  public availabilityZoneId?: string;

  // The list of Managed kdb clusters that are currently active in the given scaling group.
  public clusters?: Array<string>;

  /*
The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.

The following arguments are optional:
*/
  public hostType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. You can add up to 50 tags to a scaling group.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'availabilityZoneId',
        'The availability zone identifiers for the requested regions.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'environmentId',
        'A unique identifier for the kdb environment, where you want to create the scaling group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'hostType',
        'The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for the scaling group that you want to create.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
