import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface budgets_BudgetActionDefinitionSsmActionDefinition {
  // The EC2 and RDS instance IDs.
  instanceIds?: Array<string>;

  // The Region to run the SSM document.
  region?: string;

  // The action subType. Valid values are `STOP_EC2_INSTANCES` or `STOP_RDS_INSTANCES`.
  actionSubType?: string;
}

export function budgets_BudgetActionDefinitionSsmActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'actionSubType',
      'The action subType. Valid values are `STOP_EC2_INSTANCES` or `STOP_RDS_INSTANCES`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceIds',
      'The EC2 and RDS instance IDs.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'The Region to run the SSM document.',
      () => [],
      true,
      false,
    ),
  ];
}
