import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
export class KeyValueStore extends DS_Resource {
  // ETag hash of the KeyValueStore.
  public etag?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Comment.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for your CloudFront KeyValueStore.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => cloudfront_KeyValueStoreTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
