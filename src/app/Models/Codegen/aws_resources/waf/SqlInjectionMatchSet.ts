import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_SqlInjectionMatchSetSqlInjectionMatchTuple,
  waf_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes,
} from "../types/waf_SqlInjectionMatchSetSqlInjectionMatchTuple";

export interface SqlInjectionMatchSetArgs {
  // The name or description of the SQL Injection Match Set.
  name?: string;

  // The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
  sqlInjectionMatchTuples?: Array<waf_SqlInjectionMatchSetSqlInjectionMatchTuple>;
}
export class SqlInjectionMatchSet extends Resource {
  // The name or description of the SQL Injection Match Set.
  public name?: string;

  // The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
  public sqlInjectionMatchTuples?: Array<waf_SqlInjectionMatchSetSqlInjectionMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the SQL Injection Match Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sqlInjectionMatchTuples",
        "The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.",
        waf_SqlInjectionMatchSetSqlInjectionMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
