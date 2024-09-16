import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataplex_DatascanDataQualitySpecRuleTableConditionExpectation {
  // The SQL expression.
  sqlExpression?: string;
}

export function dataplex_DatascanDataQualitySpecRuleTableConditionExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sqlExpression',
      'The SQL expression.',
      () => [],
      true,
      false,
    ),
  ];
}
