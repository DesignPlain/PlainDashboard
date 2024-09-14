import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TrackerAssociationArgs {
  // The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
  consumerArn?: string;

  // The name of the tracker resource to be associated with a geofence collection.
  trackerName?: string;
}
export class TrackerAssociation extends DS_Resource {
  // The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
  public consumerArn?: string;

  // The name of the tracker resource to be associated with a geofence collection.
  public trackerName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "consumerArn",
        "The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "trackerName",
        "The name of the tracker resource to be associated with a geofence collection.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
