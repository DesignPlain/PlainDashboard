import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafregional_ByteMatchSetByteMatchTupleFieldToMatch,
  wafregional_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes,
} from "./wafregional_ByteMatchSetByteMatchTupleFieldToMatch";

export interface wafregional_ByteMatchSetByteMatchTuple {
  // Settings for the ByteMatchTuple. FieldToMatch documented below.
  fieldToMatch?: wafregional_ByteMatchSetByteMatchTupleFieldToMatch;

  // Within the portion of a web request that you want to search.
  positionalConstraint?: string;

  // The value that you want AWS WAF to search for. The maximum length of the value is 50 bytes.
  targetString?: string;

  /*
The formatting way for web request.

FieldToMatch(field_to_match) support following:
*/
  textTransformation?: string;
}

export function wafregional_ByteMatchSetByteMatchTuple_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fieldToMatch",
      "Settings for the ByteMatchTuple. FieldToMatch documented below.",
      wafregional_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "positionalConstraint",
      "Within the portion of a web request that you want to search.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetString",
      "The value that you want AWS WAF to search for. The maximum length of the value is 50 bytes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textTransformation",
      "The formatting way for web request.\n\nFieldToMatch(field_to_match) support following:",
      [],
      true,
      false,
    ),
  ];
}
