import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface customerprofiles_DomainRuleBasedMatchingMatchingRule {
  // A single rule level of the `match_rules`. Configures how the rule-based matching process should match profiles.
  rules?: Array<string>;
}

export function customerprofiles_DomainRuleBasedMatchingMatchingRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'rules',
      'A single rule level of the `match_rules`. Configures how the rule-based matching process should match profiles.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
