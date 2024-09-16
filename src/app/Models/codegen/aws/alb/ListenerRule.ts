import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  alb_ListenerRuleAction,
  alb_ListenerRuleAction_GetTypes,
} from '../types/alb_ListenerRuleAction';
import {
  alb_ListenerRuleCondition,
  alb_ListenerRuleCondition_GetTypes,
} from '../types/alb_ListenerRuleCondition';

export interface ListenerRuleArgs {
  // An Action block. Action blocks are documented below.
  actions?: Array<alb_ListenerRuleAction>;

  // A Condition block. Multiple condition blocks of different types can be set and all must be satisfied for the rule to match. Condition blocks are documented below.
  conditions?: Array<alb_ListenerRuleCondition>;

  // The ARN of the listener to which to attach the rule.
  listenerArn?: string;

  // The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
  priority?: number;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ListenerRule extends DS_Resource {
  // The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
  public priority?: number;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // An Action block. Action blocks are documented below.
  public actions?: Array<alb_ListenerRuleAction>;

  // The ARN of the rule (matches `id`)
  public arn?: string;

  // A Condition block. Multiple condition blocks of different types can be set and all must be satisfied for the rule to match. Condition blocks are documented below.
  public conditions?: Array<alb_ListenerRuleCondition>;

  // The ARN of the listener to which to attach the rule.
  public listenerArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'actions',
        'An Action block. Action blocks are documented below.',
        () => alb_ListenerRuleAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'conditions',
        'A Condition block. Multiple condition blocks of different types can be set and all must be satisfied for the rule to match. Condition blocks are documented below.',
        () => alb_ListenerRuleCondition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'listenerArn',
        'The ARN of the listener to which to attach the rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'priority',
        "The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
