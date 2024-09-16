import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_getServiceStatusCondition {
  // Type of domain mapping condition.
  type?: string;

  // Human readable message indicating details about the current status.
  message?: string;

  // One-word CamelCase reason for the condition's current status.
  reason?: string;

  // Status of the condition, one of True, False, Unknown.
  status?: string;
}

export function cloudrun_getServiceStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'Status of the condition, one of True, False, Unknown.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of domain mapping condition.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      'Human readable message indicating details about the current status.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'reason',
      "One-word CamelCase reason for the condition's current status.",
      () => [],
      true,
      false,
    ),
  ];
}
