import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafregional_XssMatchSetXssMatchTuple,
  wafregional_XssMatchSetXssMatchTuple_GetTypes,
} from "../types/wafregional_XssMatchSetXssMatchTuple";

export interface XssMatchSetArgs {
  // The name of the set
  name?: string;

  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  xssMatchTuples?: Array<wafregional_XssMatchSetXssMatchTuple>;
}
export class XssMatchSet extends Resource {
  // The name of the set
  public name?: string;

  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  public xssMatchTuples?: Array<wafregional_XssMatchSetXssMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the set",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "xssMatchTuples",
        "The parts of web requests that you want to inspect for cross-site scripting attacks.",
        wafregional_XssMatchSetXssMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
