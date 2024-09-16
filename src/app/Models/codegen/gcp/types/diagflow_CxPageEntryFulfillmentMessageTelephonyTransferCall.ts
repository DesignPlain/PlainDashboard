import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_CxPageEntryFulfillmentMessageTelephonyTransferCall {
  // Transfer the call to a phone number in E.164 format.
  phoneNumber?: string;
}

export function diagflow_CxPageEntryFulfillmentMessageTelephonyTransferCall_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'phoneNumber',
      'Transfer the call to a phone number in E.164 format.',
      () => [],
      true,
      false,
    ),
  ];
}
