import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface budgets_getBudgetCostType {
  // A boolean value whether to include other subscription costs in the cost budget. Defaults to `true`.
  includeOtherSubscription?: boolean;

  // A boolean value whether to include recurring costs in the cost budget. Defaults to `true`.
  includeRecurring?: boolean;

  // A boolean value whether to include subscriptions in the cost budget. Defaults to `true`.
  includeSubscription?: boolean;

  // A boolean value whether to include tax in the cost budget. Defaults to `true`.
  includeTax?: boolean;

  // A boolean value whether to include upfront costs in the cost budget. Defaults to `true`.
  includeUpfront?: boolean;

  // A boolean value whether to include credits in the cost budget. Defaults to `true`.
  includeCredit?: boolean;

  // A boolean value whether to include refunds in the cost budget. Defaults to `true`.
  includeRefund?: boolean;

  // A boolean value whether to include support costs in the cost budget. Defaults to `true`.
  includeSupport?: boolean;

  // Whether a budget uses the amortized rate. Defaults to `false`.
  useAmortized?: boolean;

  // A boolean value whether to use blended costs in the cost budget. Defaults to `false`.
  useBlended?: boolean;

  // Whether a budget includes discounts. Defaults to `true`.
  includeDiscount?: boolean;
}

export function budgets_getBudgetCostType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'includeRefund',
      'A boolean value whether to include refunds in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useAmortized',
      'Whether a budget uses the amortized rate. Defaults to `false`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useBlended',
      'A boolean value whether to use blended costs in the cost budget. Defaults to `false`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeDiscount',
      'Whether a budget includes discounts. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeOtherSubscription',
      'A boolean value whether to include other subscription costs in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeSubscription',
      'A boolean value whether to include subscriptions in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeTax',
      'A boolean value whether to include tax in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeCredit',
      'A boolean value whether to include credits in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeRecurring',
      'A boolean value whether to include recurring costs in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeUpfront',
      'A boolean value whether to include upfront costs in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeSupport',
      'A boolean value whether to include support costs in the cost budget. Defaults to `true`.',
      () => [],
      true,
      false,
    ),
  ];
}
