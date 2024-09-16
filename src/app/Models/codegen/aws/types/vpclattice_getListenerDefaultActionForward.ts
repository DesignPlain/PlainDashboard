import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_getListenerDefaultActionForwardTargetGroup,
  vpclattice_getListenerDefaultActionForwardTargetGroup_GetTypes,
} from './vpclattice_getListenerDefaultActionForwardTargetGroup';

export interface vpclattice_getListenerDefaultActionForward {
  //
  targetGroups?: Array<vpclattice_getListenerDefaultActionForwardTargetGroup>;
}

export function vpclattice_getListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'targetGroups',
      '',
      () => vpclattice_getListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
