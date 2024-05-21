import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageTelephonyTransferCall {
  // Transfer the call to a phone number in E.164 format.
  phoneNumber?: string;
}

export function diagflow_CxPageFormParameterFillBehaviorRepromptEventHandlerTriggerFulfillmentMessageTelephonyTransferCall_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "phoneNumber",
      "Transfer the call to a phone number in E.164 format.",
      [],
      true,
      false,
    ),
  ];
}
