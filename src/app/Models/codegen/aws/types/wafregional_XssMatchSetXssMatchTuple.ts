import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafregional_XssMatchSetXssMatchTupleFieldToMatch,
  wafregional_XssMatchSetXssMatchTupleFieldToMatch_GetTypes,
} from "./wafregional_XssMatchSetXssMatchTupleFieldToMatch";

export interface wafregional_XssMatchSetXssMatchTuple {
  // Specifies where in a web request to look for cross-site scripting attacks.
  fieldToMatch?: wafregional_XssMatchSetXssMatchTupleFieldToMatch;

  // Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.
  textTransformation?: string;
}

export function wafregional_XssMatchSetXssMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Specifies where in a web request to look for cross-site scripting attacks.",
      () => wafregional_XssMatchSetXssMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.",
      () => [],
      true,
      false,
    ),
  ];
}
