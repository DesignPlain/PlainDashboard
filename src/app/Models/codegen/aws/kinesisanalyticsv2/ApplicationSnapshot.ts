import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApplicationSnapshotArgs {
  // The name of an existing  Kinesis Analytics v2 Application. Note that the application must be running for a snapshot to be created.
  applicationName?: string;

  // The name of the application snapshot.
  snapshotName?: string;
}
export class ApplicationSnapshot extends DS_Resource {
  // The name of the application snapshot.
  public snapshotName?: string;

  // The name of an existing  Kinesis Analytics v2 Application. Note that the application must be running for a snapshot to be created.
  public applicationName?: string;

  // The current application version ID when the snapshot was created.
  public applicationVersionId?: number;

  // The timestamp of the application snapshot.
  public snapshotCreationTimestamp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'applicationName',
        'The name of an existing  Kinesis Analytics v2 Application. Note that the application must be running for a snapshot to be created.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'snapshotName',
        'The name of the application snapshot.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
