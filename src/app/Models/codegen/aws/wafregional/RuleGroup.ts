import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_RuleGroupActivatedRule,
  wafregional_RuleGroupActivatedRule_GetTypes,
} from '../types/wafregional_RuleGroupActivatedRule';

export interface RuleGroupArgs {
  // A friendly name for the metrics from the rule group
  metricName?: string;

  // A friendly name of the rule group
  name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of activated rules, see below
  activatedRules?: Array<wafregional_RuleGroupActivatedRule>;
}
export class RuleGroup extends DS_Resource {
  // A friendly name for the metrics from the rule group
  public metricName?: string;

  // A friendly name of the rule group
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of activated rules, see below
  public activatedRules?: Array<wafregional_RuleGroupActivatedRule>;

  // The ARN of the WAF Regional Rule Group.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'activatedRules',
        'A list of activated rules, see below',
        () => wafregional_RuleGroupActivatedRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'metricName',
        'A friendly name for the metrics from the rule group',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A friendly name of the rule group',
        () => [],
        false,
        true,
      ),
    ];
  }
}
