import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GeofenceCollectionArgs {
  // The optional description for the geofence collection.
  description?: string;

  // A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.
  kmsKeyId?: string;

  // Key-value tags for the geofence collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The name of the geofence collection.

The following arguments are optional:
*/
  collectionName?: string;
}
export class GeofenceCollection extends Resource {
  // A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.
  public kmsKeyId?: string;

  // Key-value tags for the geofence collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The timestamp for when the geofence collection resource was last updated in ISO 8601 format.
  public updateTime?: string;

  // The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all AWS.
  public collectionArn?: string;

  /*
The name of the geofence collection.

The following arguments are optional:
*/
  public collectionName?: string;

  // The timestamp for when the geofence collection resource was created in ISO 8601 format.
  public createTime?: string;

  // The optional description for the geofence collection.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "collectionName",
        "The name of the geofence collection.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The optional description for the geofence collection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the geofence collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
