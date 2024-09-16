import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafregional_RulePredicate {
  //
  type?: string;

  //
  dataId?: string;

  //
  negated?: boolean;
}

export function wafregional_RulePredicate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'negated', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'type', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'dataId', '', () => [], true, false),
  ];
}
