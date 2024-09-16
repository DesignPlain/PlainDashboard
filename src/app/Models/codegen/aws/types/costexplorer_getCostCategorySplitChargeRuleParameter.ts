import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface costexplorer_getCostCategorySplitChargeRuleParameter {
  // Parameter type.
  type?: string;

  // Parameter values.
  values?: Array<string>;
}

export function costexplorer_getCostCategorySplitChargeRuleParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Parameter type.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Parameter values.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
