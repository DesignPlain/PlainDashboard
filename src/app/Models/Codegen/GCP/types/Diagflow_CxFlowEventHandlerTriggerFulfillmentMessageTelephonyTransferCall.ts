import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxFlowEventHandlerTriggerFulfillmentMessageTelephonyTransferCall {
  // Transfer the call to a phone number in E.164 format.
  PhoneNumber?: string;
}

export function Diagflow_CxFlowEventHandlerTriggerFulfillmentMessageTelephonyTransferCall_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PhoneNumber",
      "Transfer the call to a phone number in E.164 format.",
      [],
      true,
      false,
    ),
  ];
}
