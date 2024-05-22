import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_RegexPatternSetRegularExpression,
  wafv2_RegexPatternSetRegularExpression_GetTypes,
} from "../types/wafv2_RegexPatternSetRegularExpression";

export interface RegexPatternSetArgs {
  // A friendly description of the regular expression pattern set.
  description?: string;

  // A friendly name of the regular expression pattern set.
  name?: string;

  // One or more blocks of regular expression patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. See Regular Expression below for details. A maximum of 10 `regular_expression` blocks may be specified.
  regularExpressions?: Array<wafv2_RegexPatternSetRegularExpression>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  scope?: string;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class RegexPatternSet extends Resource {
  // A friendly name of the regular expression pattern set.
  public name?: string;

  // One or more blocks of regular expression patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. See Regular Expression below for details. A maximum of 10 `regular_expression` blocks may be specified.
  public regularExpressions?: Array<wafv2_RegexPatternSetRegularExpression>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  public scope?: string;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) that identifies the cluster.
  public arn?: string;

  // A friendly description of the regular expression pattern set.
  public description?: string;

  //
  public lockToken?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the regular expression pattern set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the regular expression pattern set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "regularExpressions",
        "One or more blocks of regular expression patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. See Regular Expression below for details. A maximum of 10 `regular_expression` blocks may be specified.",
        wafv2_RegexPatternSetRegularExpression_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
