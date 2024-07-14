import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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

  // A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: rekognition_CollectionTimeouts;
}
export class Collection extends Resource {
  //
  public timeouts?: rekognition_CollectionTimeouts;

  // ARN of the Collection.
  public arn?: string;

  /*
The name of the collection

The following arguments are optional:
*/
  public collectionId?: string;

  // The Face Model Version that the collection was initialized with
  public faceModelVersion?: string;

  // A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "collectionId",
        "The name of the collection\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        rekognition_CollectionTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
