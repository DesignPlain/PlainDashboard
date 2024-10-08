import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudformation_StackSetInstanceStackInstanceSummary {
  // Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.
  accountId?: string;

  // Organizational unit ID in which the stack is deployed.
  organizationalUnitId?: string;

  // Stack identifier.
  stackId?: string;
}

export function cloudformation_StackSetInstanceStackInstanceSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'organizationalUnitId',
      'Organizational unit ID in which the stack is deployed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stackId',
      'Stack identifier.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountId',
      'Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account.',
      () => [],
      false,
      false,
    ),
  ];
}
