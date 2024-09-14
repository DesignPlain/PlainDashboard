import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface StorageBucketArgs {
  // Required. Immutable. The ID of the underlying Google Cloud Storage bucket
  bucketId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class StorageBucket extends DS_Resource {
  // Required. Immutable. The ID of the underlying Google Cloud Storage bucket
  public bucketId?: string;

  // Resource name of the bucket in the format projects/PROJECT_IDENTIFIER/buckets/BUCKET_ID
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucketId",
        "Required. Immutable. The ID of the underlying Google Cloud Storage bucket",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
