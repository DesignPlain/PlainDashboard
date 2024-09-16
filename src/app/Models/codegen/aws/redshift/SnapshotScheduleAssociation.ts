import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SnapshotScheduleAssociationArgs {
  // The cluster identifier.
  clusterIdentifier?: string;

  // The snapshot schedule identifier.
  scheduleIdentifier?: string;
}
export class SnapshotScheduleAssociation extends DS_Resource {
  // The cluster identifier.
  public clusterIdentifier?: string;

  // The snapshot schedule identifier.
  public scheduleIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifier',
        'The cluster identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'scheduleIdentifier',
        'The snapshot schedule identifier.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
