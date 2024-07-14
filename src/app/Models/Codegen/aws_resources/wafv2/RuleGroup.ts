import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRule,
  wafv2_RuleGroupRule_GetTypes,
} from "../types/wafv2_RuleGroupRule";
import {
  wafv2_RuleGroupVisibilityConfig,
  wafv2_RuleGroupVisibilityConfig_GetTypes,
} from "../types/wafv2_RuleGroupVisibilityConfig";
import {
  wafv2_RuleGroupCustomResponseBody,
  wafv2_RuleGroupCustomResponseBody_GetTypes,
} from "../types/wafv2_RuleGroupCustomResponseBody";

export interface RuleGroupArgs {
  // A friendly description of the rule group.
  description?: string;

  // A friendly name of the rule group.
  name?: string;

  //
  namePrefix?: string;

  // The rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See Rules below for details.
  rules?: Array<wafv2_RuleGroupRule>;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See Visibility Configuration below for details.
  visibilityConfig?: wafv2_RuleGroupVisibilityConfig;

  // The web ACL capacity units (WCUs) required for this rule group. See [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html#API_CreateRuleGroup_RequestSyntax) for general information and [here](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statements-list.html) for capacity specific information.
  capacity?: number;

  // Defines custom response bodies that can be referenced by `custom_response` actions. See Custom Response Body below for details.
  customResponseBodies?: Array<wafv2_RuleGroupCustomResponseBody>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  scope?: string;
}
export class RuleGroup extends Resource {
  // A friendly description of the rule group.
  public description?: string;

  //
  public lockToken?: string;

  // The rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See Rules below for details.
  public rules?: Array<wafv2_RuleGroupRule>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  public scope?: string;

  // An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The web ACL capacity units (WCUs) required for this rule group. See [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html#API_CreateRuleGroup_RequestSyntax) for general information and [here](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statements-list.html) for capacity specific information.
  public capacity?: number;

  // Defines custom response bodies that can be referenced by `custom_response` actions. See Custom Response Body below for details.
  public customResponseBodies?: Array<wafv2_RuleGroupCustomResponseBody>;

  //
  public namePrefix?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See Visibility Configuration below for details.
  public visibilityConfig?: wafv2_RuleGroupVisibilityConfig;

  // The Amazon Resource Name (ARN) of the IP Set that this statement references.
  public arn?: string;

  // A friendly name of the rule group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "scope",
        "Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the rule group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "The rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See Rules below for details.",
        wafv2_RuleGroupRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "visibilityConfig",
        "Defines and enables Amazon CloudWatch metrics and web request sample collection. See Visibility Configuration below for details.",
        wafv2_RuleGroupVisibilityConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customResponseBodies",
        "Defines custom response bodies that can be referenced by `custom_response` actions. See Custom Response Body below for details.",
        wafv2_RuleGroupCustomResponseBody_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the rule group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "namePrefix", "", [], false, true),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "An array of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "capacity",
        "The web ACL capacity units (WCUs) required for this rule group. See [here](https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html#API_CreateRuleGroup_RequestSyntax) for general information and [here](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statements-list.html) for capacity specific information.",
        [],
        true,
        true,
      ),
    ];
  }
}
