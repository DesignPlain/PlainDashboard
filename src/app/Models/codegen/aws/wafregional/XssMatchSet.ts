import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
export class XssMatchSet extends DS_Resource {
  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  public xssMatchTuples?: Array<wafregional_XssMatchSetXssMatchTuple>;

  // The name of the set
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the set",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "xssMatchTuples",
        "The parts of web requests that you want to inspect for cross-site scripting attacks.",
        () => wafregional_XssMatchSetXssMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
