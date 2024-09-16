import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_RulePredicate,
  wafregional_RulePredicate_GetTypes,
} from '../types/wafregional_RulePredicate';

export interface RuleArgs {
  // The objects to include in a rule (documented below).
  predicates?: Array<wafregional_RulePredicate>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name or description for the Amazon CloudWatch metric of this rule.
  metricName?: string;

  // The name or description of the rule.
  name?: string;
}
export class Rule extends DS_Resource {
  // The name or description for the Amazon CloudWatch metric of this rule.
  public metricName?: string;

  // The name or description of the rule.
  public name?: string;

  // The objects to include in a rule (documented below).
  public predicates?: Array<wafregional_RulePredicate>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the WAF Regional Rule.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'predicates',
        'The objects to include in a rule (documented below).',
        () => wafregional_RulePredicate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'metricName',
        'The name or description for the Amazon CloudWatch metric of this rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name or description of the rule.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
