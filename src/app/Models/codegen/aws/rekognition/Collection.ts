import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_CollectionTimeouts,
  rekognition_CollectionTimeouts_GetTypes,
} from "../types/rekognition_CollectionTimeouts";

export interface CollectionArgs {
  /*
The name of the collection

The following arguments are optional:
*/
  collectionId?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: rekognition_CollectionTimeouts;
}
export class Collection extends DS_Resource {
  /*
The name of the collection

The following arguments are optional:
*/
  public collectionId?: string;

  // The Face Model Version that the collection was initialized with
  public faceModelVersion?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: rekognition_CollectionTimeouts;

  // ARN of the Collection.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => rekognition_CollectionTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "collectionId",
        "The name of the collection\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
