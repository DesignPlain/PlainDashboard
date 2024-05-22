import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BucketAccessKeyArgs {
  // The name of the bucket that the new access key will belong to, and grant access to.
  bucketName?: string;
}
export class BucketAccessKey extends Resource {
  // The ID of the access key.
  public accessKeyId?: string;

  // The name of the bucket that the new access key will belong to, and grant access to.
  public bucketName?: string;

  // The timestamp when the access key was created.
  public createdAt?: string;

  // The secret access key used to sign requests. This attribute is not available for imported resources. Note that this will be written to the state file.
  public secretAccessKey?: string;

  // The status of the access key.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "The name of the bucket that the new access key will belong to, and grant access to.",
        [],
        true,
        true,
      ),
    ];
  }
}
