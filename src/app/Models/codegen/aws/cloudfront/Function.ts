import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface FunctionArgs {
  // Source code of the function
  code?: string;

  // Comment.
  comment?: string;

  // List of `aws.cloudfront.KeyValueStore` ARNs to be associated to the function. AWS limits associations to on key value store per function.
  keyValueStoreAssociations?: Array<string>;

  // Unique name for your CloudFront Function.
  name?: string;

  // Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.
  publish?: boolean;

  /*
Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.

The following arguments are optional:
*/
  runtime?: string;
}
export class Function extends DS_Resource {
  // Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.
  public publish?: boolean;

  // Status of the function. Can be `UNPUBLISHED`, `UNASSOCIATED` or `ASSOCIATED`.
  public status?: string;

  // ETag hash of the function. This is the value for the `DEVELOPMENT` stage of the function.
  public etag?: string;

  // List of `aws.cloudfront.KeyValueStore` ARNs to be associated to the function. AWS limits associations to on key value store per function.
  public keyValueStoreAssociations?: Array<string>;

  // Comment.
  public comment?: string;

  // ETag hash of any `LIVE` stage of the function.
  public liveStageEtag?: string;

  // Unique name for your CloudFront Function.
  public name?: string;

  /*
Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.

The following arguments are optional:
*/
  public runtime?: string;

  // Amazon Resource Name (ARN) identifying your CloudFront Function.
  public arn?: string;

  // Source code of the function
  public code?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for your CloudFront Function.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publish",
        "Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "runtime",
        "Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "code",
        "Source code of the function",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "comment",
        "Comment.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "keyValueStoreAssociations",
        "List of `aws.cloudfront.KeyValueStore` ARNs to be associated to the function. AWS limits associations to on key value store per function.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
