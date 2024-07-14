import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_WebAclLoggingConfiguration,
  waf_WebAclLoggingConfiguration_GetTypes,
} from "../types/waf_WebAclLoggingConfiguration";
import {
  waf_WebAclRule,
  waf_WebAclRule_GetTypes,
} from "../types/waf_WebAclRule";
import {
  waf_WebAclDefaultAction,
  waf_WebAclDefaultAction_GetTypes,
} from "../types/waf_WebAclDefaultAction";

export interface WebAclArgs {
  // Configuration block to enable WAF logging. Detailed below.
  loggingConfiguration?: waf_WebAclLoggingConfiguration;

  // The name or description for the Amazon CloudWatch metric of this web ACL.
  metricName?: string;

  // The name or description of the web ACL.
  name?: string;

  // Configuration blocks containing rules to associate with the web ACL and the settings for each rule. Detailed below.
  rules?: Array<waf_WebAclRule>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block with action that you want AWS WAF to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL. Detailed below.
  defaultAction?: waf_WebAclDefaultAction;
}
export class WebAcl extends Resource {
  // Configuration blocks containing rules to associate with the web ACL and the settings for each rule. Detailed below.
  public rules?: Array<waf_WebAclRule>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the WAF WebACL.
  public arn?: string;

  // Configuration block with action that you want AWS WAF to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL. Detailed below.
  public defaultAction?: waf_WebAclDefaultAction;

  // Configuration block to enable WAF logging. Detailed below.
  public loggingConfiguration?: waf_WebAclLoggingConfiguration;

  // The name or description for the Amazon CloudWatch metric of this web ACL.
  public metricName?: string;

  // The name or description of the web ACL.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "loggingConfiguration",
        "Configuration block to enable WAF logging. Detailed below.",
        waf_WebAclLoggingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "metricName",
        "The name or description for the Amazon CloudWatch metric of this web ACL.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the web ACL.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Configuration blocks containing rules to associate with the web ACL and the settings for each rule. Detailed below.",
        waf_WebAclRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultAction",
        "Configuration block with action that you want AWS WAF to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL. Detailed below.",
        waf_WebAclDefaultAction_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
