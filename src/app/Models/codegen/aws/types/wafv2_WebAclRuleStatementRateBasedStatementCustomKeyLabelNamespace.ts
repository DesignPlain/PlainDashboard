import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace {
  // The namespace to use for aggregation
  namespace?: string;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'The namespace to use for aggregation',
      () => [],
      true,
      false,
    ),
  ];
}
