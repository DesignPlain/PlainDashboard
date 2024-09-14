import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  waf_XssMatchSetXssMatchTuple,
  waf_XssMatchSetXssMatchTuple_GetTypes,
} from "../types/waf_XssMatchSetXssMatchTuple";

export interface XssMatchSetArgs {
  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  xssMatchTuples?: Array<waf_XssMatchSetXssMatchTuple>;

  // The name or description of the SizeConstraintSet.
  name?: string;
}
export class XssMatchSet extends DS_Resource {
  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  public xssMatchTuples?: Array<waf_XssMatchSetXssMatchTuple>;

  // Amazon Resource Name (ARN)
  public arn?: string;

  // The name or description of the SizeConstraintSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "xssMatchTuples",
        "The parts of web requests that you want to inspect for cross-site scripting attacks.",
        () => waf_XssMatchSetXssMatchTuple_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the SizeConstraintSet.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
