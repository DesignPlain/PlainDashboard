import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface waf_SizeConstraintSetSizeConstraintFieldToMatch {
  // When the `type` is `HEADER`, specify the name of the header that you want to search using the `data` field, for example, `User-Agent` or `Referer`. If the `type` is any other value, you can omit this field.
  data?: string;

  // Part of the web request that you want AWS WAF to search for a specified string. For example, `HEADER`, `METHOD`, or `BODY`. See the [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_FieldToMatch.html) for all supported values.
  type?: string;
}

export function waf_SizeConstraintSetSizeConstraintFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "data",
      "When the `type` is `HEADER`, specify the name of the header that you want to search using the `data` field, for example, `User-Agent` or `Referer`. If the `type` is any other value, you can omit this field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Part of the web request that you want AWS WAF to search for a specified string. For example, `HEADER`, `METHOD`, or `BODY`. See the [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_FieldToMatch.html) for all supported values.",
      [],
      true,
      false,
    ),
  ];
}
