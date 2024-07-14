import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface FunctionArgs {
  // Unique name for your CloudFront Function.
  name?: string;

  // Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.
  publish?: boolean;

  /*
Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.

The following arguments are optional:
*/
  runtime?: string;

  // Source code of the function
  code?: string;

  // Comment.
  comment?: string;
}
export class Function extends Resource {
  /*
Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.

The following arguments are optional:
*/
  public runtime?: string;

  // ETag hash of the function. This is the value for the `DEVELOPMENT` stage of the function.
  public etag?: string;

  // Source code of the function
  public code?: string;

  // Comment.
  public comment?: string;

  // ETag hash of any `LIVE` stage of the function.
  public liveStageEtag?: string;

  // Unique name for your CloudFront Function.
  public name?: string;

  // Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.
  public publish?: boolean;

  // Status of the function. Can be `UNPUBLISHED`, `UNASSOCIATED` or `ASSOCIATED`.
  public status?: string;

  // Amazon Resource Name (ARN) identifying your CloudFront Function.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "runtime",
        "Identifier of the function's runtime. Valid values are `cloudfront-js-1.0` and `cloudfront-js-2.0`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "code",
        "Source code of the function",
        [],
        true,
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
        "Unique name for your CloudFront Function.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publish",
        "Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
