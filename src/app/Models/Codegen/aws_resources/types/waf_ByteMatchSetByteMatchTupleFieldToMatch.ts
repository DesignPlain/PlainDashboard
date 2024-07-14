import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface waf_ByteMatchSetByteMatchTupleFieldToMatch {
  /*
When `type` is `HEADER`, enter the name of the header that you want to search, e.g., `User-Agent` or `Referer`.
If `type` is any other value, omit this field.
*/
  data?: string;

  /*
The part of the web request that you want AWS WAF to search for a specified string.
e.g., `HEADER`, `METHOD` or `BODY`.
See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_FieldToMatch.html)
for all supported values.
*/
  type?: string;
}

export function waf_ByteMatchSetByteMatchTupleFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "data",
      "When `type` is `HEADER`, enter the name of the header that you want to search, e.g., `User-Agent` or `Referer`.\nIf `type` is any other value, omit this field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The part of the web request that you want AWS WAF to search for a specified string.\ne.g., `HEADER`, `METHOD` or `BODY`.\nSee [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_FieldToMatch.html)\nfor all supported values.",
      [],
      true,
      false,
    ),
  ];
}
