import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrun_DomainMappingStatusCondition {
  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  status?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  type?: string;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  message?: string;

  /*
(Output)
One-word CamelCase reason for the condition's current status.
*/
  reason?: string;
}

export function cloudrun_DomainMappingStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      '(Output)\nStatus of the condition, one of True, False, Unknown.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Resource record type. Example: `AAAA`.\nPossible values are: `A`, `AAAA`, `CNAME`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      '(Output)\nHuman readable message indicating details about the current status.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'reason',
      "(Output)\nOne-word CamelCase reason for the condition's current status.",
      () => [],
      false,
      false,
    ),
  ];
}
