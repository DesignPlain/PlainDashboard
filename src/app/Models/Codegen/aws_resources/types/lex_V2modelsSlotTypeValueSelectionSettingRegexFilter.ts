import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsSlotTypeValueSelectionSettingRegexFilter {
  /*
Used to validate the value of a slot. Use a standard regular expression. Amazon Lex supports the following characters in the regular expression: A-Z, a-z, 0-9, Unicode characters ("\⁠u").
Represent Unicode characters with four digits, for example "\⁠u0041" or "\⁠u005A". The following regular expression operators are not supported: Infinite repeaters: -, +, or {x,} with no upper bound, wild card (.)
*/
  pattern?: string;
}

export function lex_V2modelsSlotTypeValueSelectionSettingRegexFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pattern",
      'Used to validate the value of a slot. Use a standard regular expression. Amazon Lex supports the following characters in the regular expression: A-Z, a-z, 0-9, Unicode characters ("\\\u2060u").\nRepresent Unicode characters with four digits, for example "\\\u2060u0041" or "\\\u2060u005A". The following regular expression operators are not supported: Infinite repeaters: *, +, or {x,} with no upper bound, wild card (.)',
      [],
      true,
      false,
    ),
  ];
}
