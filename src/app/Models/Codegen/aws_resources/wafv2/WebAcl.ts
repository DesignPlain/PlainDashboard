import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclDefaultAction,
  wafv2_WebAclDefaultAction_GetTypes,
} from "../types/wafv2_WebAclDefaultAction";
import {
  wafv2_WebAclVisibilityConfig,
  wafv2_WebAclVisibilityConfig_GetTypes,
} from "../types/wafv2_WebAclVisibilityConfig";
import {
  wafv2_WebAclRule,
  wafv2_WebAclRule_GetTypes,
} from "../types/wafv2_WebAclRule";
import {
  wafv2_WebAclAssociationConfig,
  wafv2_WebAclAssociationConfig_GetTypes,
} from "../types/wafv2_WebAclAssociationConfig";
import {
  wafv2_WebAclCaptchaConfig,
  wafv2_WebAclCaptchaConfig_GetTypes,
} from "../types/wafv2_WebAclCaptchaConfig";
import {
  wafv2_WebAclChallengeConfig,
  wafv2_WebAclChallengeConfig_GetTypes,
} from "../types/wafv2_WebAclChallengeConfig";
import {
  wafv2_WebAclCustomResponseBody,
  wafv2_WebAclCustomResponseBody_GetTypes,
} from "../types/wafv2_WebAclCustomResponseBody";

export interface WebAclArgs {
  // Rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See `rule` below for details.
  rules?: Array<wafv2_WebAclRule>;

  // Map of key-value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the domains that AWS WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
  tokenDomains?: Array<string>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  scope?: string;

  // Specifies custom configurations for the associations between the web ACL and protected resources. See `association_config` below for details.
  associationConfig?: wafv2_WebAclAssociationConfig;

  // Specifies how AWS WAF should handle CAPTCHA evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `captcha_config` below for details.
  captchaConfig?: wafv2_WebAclCaptchaConfig;

  // Specifies how AWS WAF should handle Challenge evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `challenge_config` below for details.
  challengeConfig?: wafv2_WebAclChallengeConfig;

  // Defines custom response bodies that can be referenced by `custom_response` actions. See `custom_response_body` below for details.
  customResponseBodies?: Array<wafv2_WebAclCustomResponseBody>;

  // Action to perform if none of the `rules` contained in the WebACL match. See `default_action` below for details.
  defaultAction?: wafv2_WebAclDefaultAction;

  // Friendly description of the WebACL.
  description?: string;

  // Friendly name of the WebACL.
  name?: string;

  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See `visibility_config` below for details.
  visibilityConfig?: wafv2_WebAclVisibilityConfig;
}
export class WebAcl extends Resource {
  // Web ACL capacity units (WCUs) currently being used by this web ACL.
  public capacity?: number;

  // Friendly description of the WebACL.
  public description?: string;

  // Friendly name of the WebACL.
  public name?: string;

  // Map of key-value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the domains that AWS WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
  public tokenDomains?: Array<string>;

  // Specifies custom configurations for the associations between the web ACL and protected resources. See `association_config` below for details.
  public associationConfig?: wafv2_WebAclAssociationConfig;

  // Defines custom response bodies that can be referenced by `custom_response` actions. See `custom_response_body` below for details.
  public customResponseBodies?: Array<wafv2_WebAclCustomResponseBody>;

  // The Amazon Resource Name (ARN) of the IP Set that this statement references.
  public arn?: string;

  // Specifies how AWS WAF should handle CAPTCHA evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `captcha_config` below for details.
  public captchaConfig?: wafv2_WebAclCaptchaConfig;

  // Specifies how AWS WAF should handle Challenge evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `challenge_config` below for details.
  public challengeConfig?: wafv2_WebAclChallengeConfig;

  //
  public lockToken?: string;

  // Rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See `rule` below for details.
  public rules?: Array<wafv2_WebAclRule>;

  // Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are `CLOUDFRONT` or `REGIONAL`. To work with CloudFront, you must also specify the region `us-east-1` (N. Virginia) on the AWS provider.
  public scope?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The URL to use in SDK integrations with managed rule groups.
  public applicationIntegrationUrl?: string;

  // Defines and enables Amazon CloudWatch metrics and web request sample collection. See `visibility_config` below for details.
  public visibilityConfig?: wafv2_WebAclVisibilityConfig;

  // Action to perform if none of the `rules` contained in the WebACL match. See `default_action` below for details.
  public defaultAction?: wafv2_WebAclDefaultAction;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "captchaConfig",
        "Specifies how AWS WAF should handle CAPTCHA evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `captcha_config` below for details.",
        wafv2_WebAclCaptchaConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of key-value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tokenDomains",
        "Specifies the domains that AWS WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.",
        InputType_String_GetTypes(),
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
        InputType.Object,
        "associationConfig",
        "Specifies custom configurations for the associations between the web ACL and protected resources. See `association_config` below for details.",
        wafv2_WebAclAssociationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "challengeConfig",
        "Specifies how AWS WAF should handle Challenge evaluations on the ACL level (used by [AWS Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html)). See `challenge_config` below for details.",
        wafv2_WebAclChallengeConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "customResponseBodies",
        "Defines custom response bodies that can be referenced by `custom_response` actions. See `custom_response_body` below for details.",
        wafv2_WebAclCustomResponseBody_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultAction",
        "Action to perform if none of the `rules` contained in the WebACL match. See `default_action` below for details.",
        wafv2_WebAclDefaultAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Friendly description of the WebACL.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Rule blocks used to identify the web requests that you want to `allow`, `block`, or `count`. See `rule` below for details.",
        wafv2_WebAclRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "visibilityConfig",
        "Defines and enables Amazon CloudWatch metrics and web request sample collection. See `visibility_config` below for details.",
        wafv2_WebAclVisibilityConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Friendly name of the WebACL.",
        [],
        false,
        true,
      ),
    ];
  }
}
