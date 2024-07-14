import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageLiveAgentHandoff {
  // Custom metadata. Dialogflow doesn't impose any structure on this.
  metadata?: string;
}

export function diagflow_CxPageFormParameterFillBehaviorInitialPromptFulfillmentMessageLiveAgentHandoff_GetTypes(): DynamicUIProps[] {
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
