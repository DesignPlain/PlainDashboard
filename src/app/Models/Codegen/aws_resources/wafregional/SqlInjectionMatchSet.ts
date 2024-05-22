import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple,
  wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes,
} from "../types/wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple";

export interface SqlInjectionMatchSetArgs {
  // The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
  sqlInjectionMatchTuples?: Array<wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple>;

  // The name or description of the SizeConstraintSet.
  name?: string;
}
export class SqlInjectionMatchSet extends Resource {
  // The name or description of the SizeConstraintSet.
  public name?: string;

  // The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
  public sqlInjectionMatchTuples?: Array<wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "sqlInjectionMatchTuples",
        "The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.",
        wafregional_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the SizeConstraintSet.",
        [],
        false,
        true,
      ),
    ];
  }
}
