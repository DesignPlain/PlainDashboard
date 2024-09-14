import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface wafregional_ByteMatchSetByteMatchTupleFieldToMatch {
  // The part of the web request that you want AWS WAF to search for a specified string.
  type?: string;

  // When the value of Type is HEADER, enter the name of the header that you want AWS WAF to search, for example, User-Agent or Referer. If the value of Type is any other value, omit Data.
  data?: string;
}

export function wafregional_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The part of the web request that you want AWS WAF to search for a specified string.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "data",
      "When the value of Type is HEADER, enter the name of the header that you want AWS WAF to search, for example, User-Agent or Referer. If the value of Type is any other value, omit Data.",
      () => [],
      false,
      false,
    ),
  ];
}
