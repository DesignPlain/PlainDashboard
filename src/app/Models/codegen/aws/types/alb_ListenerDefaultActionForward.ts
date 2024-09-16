import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  alb_ListenerDefaultActionForwardStickiness,
  alb_ListenerDefaultActionForwardStickiness_GetTypes,
} from './alb_ListenerDefaultActionForwardStickiness';
import {
  alb_ListenerDefaultActionForwardTargetGroup,
  alb_ListenerDefaultActionForwardTargetGroup_GetTypes,
} from './alb_ListenerDefaultActionForwardTargetGroup';

export interface alb_ListenerDefaultActionForward {
  // Configuration block for target group stickiness for the rule. Detailed below.
  stickiness?: alb_ListenerDefaultActionForwardStickiness;

  /*
Set of 1-5 target group blocks. Detailed below.

The following arguments are optional:
*/
  targetGroups?: Array<alb_ListenerDefaultActionForwardTargetGroup>;
}

export function alb_ListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'stickiness',
      'Configuration block for target group stickiness for the rule. Detailed below.',
      () => alb_ListenerDefaultActionForwardStickiness_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'targetGroups',
      'Set of 1-5 target group blocks. Detailed below.\n\nThe following arguments are optional:',
      () => alb_ListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
