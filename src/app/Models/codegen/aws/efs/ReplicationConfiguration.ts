import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  efs_ReplicationConfigurationDestination,
  efs_ReplicationConfigurationDestination_GetTypes,
} from "../types/efs_ReplicationConfigurationDestination";

export interface ReplicationConfigurationArgs {
  // A destination configuration block (documented below).
  destination?: efs_ReplicationConfigurationDestination;

  // The ID of the file system that is to be replicated.
  sourceFileSystemId?: string;
}
export class ReplicationConfiguration extends DS_Resource {
  /*
When the replication configuration was created.
- `destination[0].file_system_id` - The fs ID of the replica.
- `destination[0].status` - The status of the replication.
*/
  public creationTime?: string;

  // A destination configuration block (documented below).
  public destination?: efs_ReplicationConfigurationDestination;

  // The Amazon Resource Name (ARN) of the original source Amazon EFS file system in the replication configuration.
  public originalSourceFileSystemArn?: string;

  // The Amazon Resource Name (ARN) of the current source file system in the replication configuration.
  public sourceFileSystemArn?: string;

  // The ID of the file system that is to be replicated.
  public sourceFileSystemId?: string;

  // The AWS Region in which the source Amazon EFS file system is located.
  public sourceFileSystemRegion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sourceFileSystemId",
        "The ID of the file system that is to be replicated.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destination",
        "A destination configuration block (documented below).",
        () => efs_ReplicationConfigurationDestination_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
