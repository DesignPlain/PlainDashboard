import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ApplicationSnapshotArgs {
  // The name of an existing  Kinesis Analytics v2 Application. Note that the application must be running for a snapshot to be created.
  applicationName?: string;

  // The name of the application snapshot.
  snapshotName?: string;
}
export class ApplicationSnapshot extends Resource {
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
        "applicationName",
        "The name of an existing  Kinesis Analytics v2 Application. Note that the application must be running for a snapshot to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotName",
        "The name of the application snapshot.",
        [],
        true,
        true,
      ),
    ];
  }
}
