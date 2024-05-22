import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafregional_WebAclDefaultAction,
  wafregional_WebAclDefaultAction_GetTypes,
} from "../types/wafregional_WebAclDefaultAction";
import {
  wafregional_WebAclLoggingConfiguration,
  wafregional_WebAclLoggingConfiguration_GetTypes,
} from "../types/wafregional_WebAclLoggingConfiguration";
import {
  wafregional_WebAclRule,
  wafregional_WebAclRule_GetTypes,
} from "../types/wafregional_WebAclRule";

export interface WebAclArgs {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The action that you want AWS WAF Regional to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL.
  defaultAction?: wafregional_WebAclDefaultAction;

  // Configuration block to enable WAF logging. Detailed below.
  loggingConfiguration?: wafregional_WebAclLoggingConfiguration;

  // The name or description for the Amazon CloudWatch metric of this web ACL.
  metricName?: string;

  // The name or description of the web ACL.
  name?: string;

  // Set of configuration blocks containing rules for the web ACL. Detailed below.
  rules?: Array<wafregional_WebAclRule>;
}
export class WebAcl extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the WAF Regional WebACL.
  public arn?: string;

  // The action that you want AWS WAF Regional to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL.
  public defaultAction?: wafregional_WebAclDefaultAction;

  // Configuration block to enable WAF logging. Detailed below.
  public loggingConfiguration?: wafregional_WebAclLoggingConfiguration;

  // The name or description for the Amazon CloudWatch metric of this web ACL.
  public metricName?: string;

  // The name or description of the web ACL.
  public name?: string;

  // Set of configuration blocks containing rules for the web ACL. Detailed below.
  public rules?: Array<wafregional_WebAclRule>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "defaultAction",
        "The action that you want AWS WAF Regional to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL.",
        wafregional_WebAclDefaultAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfiguration",
        "Configuration block to enable WAF logging. Detailed below.",
        wafregional_WebAclLoggingConfiguration_GetTypes(),
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
        "Set of configuration blocks containing rules for the web ACL. Detailed below.",
        wafregional_WebAclRule_GetTypes(),
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
    ];
  }
}
