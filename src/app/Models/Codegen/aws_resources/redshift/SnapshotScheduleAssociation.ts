import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SnapshotScheduleAssociationArgs {
  // The snapshot schedule identifier.
  scheduleIdentifier?: string;

  // The cluster identifier.
  clusterIdentifier?: string;
}
export class SnapshotScheduleAssociation extends Resource {
  // The cluster identifier.
  public clusterIdentifier?: string;

  // The snapshot schedule identifier.
  public scheduleIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scheduleIdentifier",
        "The snapshot schedule identifier.",
        [],
        true,
        true,
      ),
    ];
  }
}
