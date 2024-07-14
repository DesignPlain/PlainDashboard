import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_KeyValueStoreTimeouts,
  cloudfront_KeyValueStoreTimeouts_GetTypes,
} from "../types/cloudfront_KeyValueStoreTimeouts";

export interface KeyValueStoreArgs {
  // Comment.
  comment?: string;

  /*
Unique name for your CloudFront KeyValueStore.

The following arguments are optional:
*/
  name?: string;

  //
  timeouts?: cloudfront_KeyValueStoreTimeouts;
}
export class KeyValueStore extends Resource {
  //
  public lastModifiedTime?: string;

  /*
Unique name for your CloudFront KeyValueStore.

The following arguments are optional:
*/
  public name?: string;

  //
  public timeouts?: cloudfront_KeyValueStoreTimeouts;

  // Amazon Resource Name (ARN) identifying your CloudFront KeyValueStore.
  public arn?: string;

  // Comment.
  public comment?: string;

  // ETag hash of the KeyValueStore.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        cloudfront_KeyValueStoreTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Comment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for your CloudFront KeyValueStore.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
    ];
  }
}
