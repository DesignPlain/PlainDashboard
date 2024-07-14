import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_ListenerRuleMatchHttpMatch,
  vpclattice_ListenerRuleMatchHttpMatch_GetTypes,
} from "./vpclattice_ListenerRuleMatchHttpMatch";

export interface vpclattice_ListenerRuleMatch {
  // The HTTP criteria that a rule must match.
  httpMatch?: vpclattice_ListenerRuleMatchHttpMatch;
}

export function vpclattice_ListenerRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpMatch",
      "The HTTP criteria that a rule must match.",
      vpclattice_ListenerRuleMatchHttpMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
