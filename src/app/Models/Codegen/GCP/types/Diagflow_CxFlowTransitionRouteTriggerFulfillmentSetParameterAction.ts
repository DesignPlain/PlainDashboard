import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction {
  // The new JSON-encoded value of the parameter. A null value clears the parameter.
  Value?: string;

  // Display name of the parameter.
  Parameter?: string;
}

export function Diagflow_CxFlowTransitionRouteTriggerFulfillmentSetParameterAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The new JSON-encoded value of the parameter. A null value clears the parameter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Parameter",
      "Display name of the parameter.",
      [],
      false,
      false,
    ),
  ];
}
