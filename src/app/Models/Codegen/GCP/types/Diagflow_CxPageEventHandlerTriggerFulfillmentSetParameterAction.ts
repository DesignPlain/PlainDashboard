import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface diagflow_CxPageEventHandlerTriggerFulfillmentSetParameterAction {
  // Display name of the parameter.
  parameter?: string;

  // The new JSON-encoded value of the parameter. A null value clears the parameter.
  value?: string;
}

export function diagflow_CxPageEventHandlerTriggerFulfillmentSetParameterAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "parameter",
      "Display name of the parameter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The new JSON-encoded value of the parameter. A null value clears the parameter.",
      [],
      false,
      false,
    ),
  ];
}
