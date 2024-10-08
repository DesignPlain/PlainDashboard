import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_ListenerDefaultActionForwardTargetGroup,
  vpclattice_ListenerDefaultActionForwardTargetGroup_GetTypes,
} from './vpclattice_ListenerDefaultActionForwardTargetGroup';

export interface vpclattice_ListenerDefaultActionForward {
  // One or more target group blocks.
  targetGroups?: Array<vpclattice_ListenerDefaultActionForwardTargetGroup>;
}

export function vpclattice_ListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'targetGroups',
      'One or more target group blocks.',
      () => vpclattice_ListenerDefaultActionForwardTargetGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
