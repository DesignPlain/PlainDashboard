import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_ListenerRuleActionFixedResponse,
  vpclattice_ListenerRuleActionFixedResponse_GetTypes,
} from "./vpclattice_ListenerRuleActionFixedResponse";
import {
  vpclattice_ListenerRuleActionForward,
  vpclattice_ListenerRuleActionForward_GetTypes,
} from "./vpclattice_ListenerRuleActionForward";

export interface vpclattice_ListenerRuleAction {
  // Describes the rule action that returns a custom HTTP response.
  fixedResponse?: vpclattice_ListenerRuleActionFixedResponse;

  // The forward action. Traffic that matches the rule is forwarded to the specified target groups.
  forward?: vpclattice_ListenerRuleActionForward;
}

export function vpclattice_ListenerRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fixedResponse",
      "Describes the rule action that returns a custom HTTP response.",
      vpclattice_ListenerRuleActionFixedResponse_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forward",
      "The forward action. Traffic that matches the rule is forwarded to the specified target groups.",
      vpclattice_ListenerRuleActionForward_GetTypes(),
      false,
      false,
    ),
  ];
}
