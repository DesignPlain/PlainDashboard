import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_XssMatchSetXssMatchTuple,
  waf_XssMatchSetXssMatchTuple_GetTypes,
} from "../types/waf_XssMatchSetXssMatchTuple";

export interface XssMatchSetArgs {
  // The name or description of the SizeConstraintSet.
  name?: string;

  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  xssMatchTuples?: Array<waf_XssMatchSetXssMatchTuple>;
}
export class XssMatchSet extends Resource {
  // Amazon Resource Name (ARN)
  public arn?: string;

  // The name or description of the SizeConstraintSet.
  public name?: string;

  // The parts of web requests that you want to inspect for cross-site scripting attacks.
  public xssMatchTuples?: Array<waf_XssMatchSetXssMatchTuple>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the SizeConstraintSet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "xssMatchTuples",
        "The parts of web requests that you want to inspect for cross-site scripting attacks.",
        waf_XssMatchSetXssMatchTuple_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
