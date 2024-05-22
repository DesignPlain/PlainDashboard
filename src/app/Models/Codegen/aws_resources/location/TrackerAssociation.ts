import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TrackerAssociationArgs {
  // The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
  consumerArn?: string;

  // The name of the tracker resource to be associated with a geofence collection.
  trackerName?: string;
}
export class TrackerAssociation extends Resource {
  // The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
  public consumerArn?: string;

  // The name of the tracker resource to be associated with a geofence collection.
  public trackerName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "trackerName",
        "The name of the tracker resource to be associated with a geofence collection.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerArn",
        "The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.",
        [],
        true,
        true,
      ),
    ];
  }
}
