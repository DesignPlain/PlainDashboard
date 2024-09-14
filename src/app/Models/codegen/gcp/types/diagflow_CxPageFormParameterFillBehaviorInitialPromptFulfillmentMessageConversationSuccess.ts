import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageConversationSuccess {
  // Custom metadata. Dialogflow doesn't impose any structure on this.
  metadata?: string;
}

export function diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageConversationSuccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "metadata",
      "Custom metadata. Dialogflow doesn't impose any structure on this.",
      () => [],
      false,
      false,
    ),
  ];
}
