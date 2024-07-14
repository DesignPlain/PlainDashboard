import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BucketResourceAccessArgs {
  // The name of the bucket to grant access to.
  bucketName?: string;

  // The name of the resource to be granted bucket access.
  resourceName?: string;
}
export class BucketResourceAccess extends Resource {
  // The name of the bucket to grant access to.
  public bucketName?: string;

  // The name of the resource to be granted bucket access.
  public resourceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "The name of the bucket to grant access to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceName",
        "The name of the resource to be granted bucket access.",
        [],
        true,
        true,
      ),
    ];
  }
}
