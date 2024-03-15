import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StorageBucketArgs {
  // Required. Immutable. The ID of the underlying Google Cloud Storage bucket
  BucketId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class StorageBucket extends Resource {
  // Required. Immutable. The ID of the underlying Google Cloud Storage bucket
  public BucketId?: string;

  // Resource name of the bucket in the format projects/PROJECT_IDENTIFIER/buckets/BUCKET_ID
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BucketId",
        "Required. Immutable. The ID of the underlying Google Cloud Storage bucket",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
