import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface billing_BudgetThresholdRule {
  /*
The type of basis used to determine if spend has passed
the threshold.
Default value is `CURRENT_SPEND`.
Possible values are: `CURRENT_SPEND`, `FORECASTED_SPEND`.
*/
  spendBasis?: string;

  /*
Send an alert when this threshold is exceeded. This is a
1.0-based percentage, so 0.5 = 50%!!(MISSING) (MISSING)Must be >= 0.
*/
  thresholdPercent?: number;
}

export function billing_BudgetThresholdRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'spendBasis',
      'The type of basis used to determine if spend has passed\nthe threshold.\nDefault value is `CURRENT_SPEND`.\nPossible values are: `CURRENT_SPEND`, `FORECASTED_SPEND`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'thresholdPercent',
      'Send an alert when this threshold is exceeded. This is a\n1.0-based percentage, so 0.5 = 50%! (MISSING)Must be >= 0.',
      () => [],
      true,
      false,
    ),
  ];
}
