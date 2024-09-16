import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ses_ReceiptRuleAddHeaderAction {
  // The name of the header to add
  headerName?: string;

  // The value of the header to add
  headerValue?: string;

  // The position of the action in the receipt rule
  position?: number;
}

export function ses_ReceiptRuleAddHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'headerName',
      'The name of the header to add',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'headerValue',
      'The value of the header to add',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'position',
      'The position of the action in the receipt rule',
      () => [],
      true,
      false,
    ),
  ];
}
