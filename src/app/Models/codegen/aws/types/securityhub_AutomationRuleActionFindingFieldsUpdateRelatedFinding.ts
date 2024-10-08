import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding {
  // The product-generated identifier for a related finding.
  id?: string;

  // The ARN of the product that generated a related finding.
  productArn?: string;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdateRelatedFinding_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'The product-generated identifier for a related finding.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'productArn',
      'The ARN of the product that generated a related finding.',
      () => [],
      true,
      false,
    ),
  ];
}
