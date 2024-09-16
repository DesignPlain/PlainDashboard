import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_ListenerRuleActionForwardTargetGroup,
  vpclattice_ListenerRuleActionForwardTargetGroup_GetTypes,
} from './vpclattice_ListenerRuleActionForwardTargetGroup';

export interface vpclattice_ListenerRuleActionForward {
  /*
The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic.

The default value is 1 with maximum number of 2. If only one target group is provided, there is no need to set the weight; 100%!o(MISSING)f traffic will go to that target group.
*/
  targetGroups?: Array<vpclattice_ListenerRuleActionForwardTargetGroup>;
}

export function vpclattice_ListenerRuleActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'targetGroups',
      'The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic.\n\nThe default value is 1 with maximum number of 2. If only one target group is provided, there is no need to set the weight; 100% of traffic will go to that target group.',
      () => vpclattice_ListenerRuleActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
