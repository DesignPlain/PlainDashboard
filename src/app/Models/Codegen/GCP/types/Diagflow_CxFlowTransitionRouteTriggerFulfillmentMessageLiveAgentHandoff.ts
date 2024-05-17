import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxFlowTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff {
  // Custom metadata. Dialogflow doesn't impose any structure on this.
  Metadata?: string;
}

export function Diagflow_CxFlowTransitionRouteTriggerFulfillmentMessageLiveAgentHandoff_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Metadata",
      "Custom metadata. Dialogflow doesn't impose any structure on this.",
      [],
      false,
      false,
    ),
  ];
}
