import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch,
  vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch_GetTypes,
} from './vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch';

export interface vpclattice_ListenerRuleMatchHttpMatchPathMatch {
  // Indicates whether the match is case sensitive. Defaults to false.
  caseSensitive?: boolean;

  // The header match type.
  match?: vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch;
}

export function vpclattice_ListenerRuleMatchHttpMatchPathMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'caseSensitive',
      'Indicates whether the match is case sensitive. Defaults to false.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'match',
      'The header match type.',
      () => vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
