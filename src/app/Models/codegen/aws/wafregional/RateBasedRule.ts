import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_RateBasedRulePredicate,
  wafregional_RateBasedRulePredicate_GetTypes,
} from '../types/wafregional_RateBasedRulePredicate';

export interface RateBasedRuleArgs {
  // The name or description of the rule.
  name?: string;

  // The objects to include in a rule (documented below).
  predicates?: Array<wafregional_RateBasedRulePredicate>;

  // Valid value is IP.
  rateKey?: string;

  // The maximum number of requests, which have an identical value in the field specified by the RateKey, allowed in a five-minute period. Minimum value is 100.
  rateLimit?: number;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name or description for the Amazon CloudWatch metric of this rule.
  metricName?: string;
}
export class RateBasedRule extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the WAF Regional Rate Based Rule.
  public arn?: string;

  // The name or description for the Amazon CloudWatch metric of this rule.
  public metricName?: string;

  // The name or description of the rule.
  public name?: string;

  // The objects to include in a rule (documented below).
  public predicates?: Array<wafregional_RateBasedRulePredicate>;

  // Valid value is IP.
  public rateKey?: string;

  // The maximum number of requests, which have an identical value in the field specified by the RateKey, allowed in a five-minute period. Minimum value is 100.
  public rateLimit?: number;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'rateLimit',
        'The maximum number of requests, which have an identical value in the field specified by the RateKey, allowed in a five-minute period. Minimum value is 100.',
        () => [],
        true,
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
      new DynamicUIProps(
        InputType.Array,
        'predicates',
        'The objects to include in a rule (documented below).',
        () => wafregional_RateBasedRulePredicate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'rateKey',
        'Valid value is IP.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
