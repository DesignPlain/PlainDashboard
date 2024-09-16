import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface customerprofiles_DomainMatchingAutoMergingConsolidation {
  // A list of matching criteria.
  matchingAttributesLists?: Array<Array<string>>;
}

export function customerprofiles_DomainMatchingAutoMergingConsolidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matchingAttributesLists',
      'A list of matching criteria.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
