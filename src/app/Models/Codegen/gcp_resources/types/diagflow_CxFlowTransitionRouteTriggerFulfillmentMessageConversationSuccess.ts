import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxFlowTransitionRouteTriggerFulfillmentMessageConversationSuccess {
  // Custom metadata. Dialogflow doesn't impose any structure on this.
  metadata?: string;
}

export function diagflow_CxFlowTransitionRouteTriggerFulfillmentMessageConversationSuccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metadata",
      "Custom metadata. Dialogflow doesn't impose any structure on this.",
      [],
      false,
      false,
    ),
  ];
}
