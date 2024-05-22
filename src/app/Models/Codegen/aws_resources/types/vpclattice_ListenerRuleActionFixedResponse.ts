import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpclattice_ListenerRuleActionFixedResponse {
  // The HTTP response code.
  statusCode?: number;
}

export function vpclattice_ListenerRuleActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "statusCode",
      "The HTTP response code.",
      [],
      true,
      false,
    ),
  ];
}
