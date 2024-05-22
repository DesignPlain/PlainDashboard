import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  waf_SizeConstraintSetSizeConstraint,
  waf_SizeConstraintSetSizeConstraint_GetTypes,
} from "../types/waf_SizeConstraintSetSizeConstraint";

export interface SizeConstraintSetArgs {
  // Name or description of the Size Constraint Set.
  name?: string;

  // Parts of web requests that you want to inspect the size of.
  sizeConstraints?: Array<waf_SizeConstraintSetSizeConstraint>;
}
export class SizeConstraintSet extends Resource {
  // Amazon Resource Name (ARN).
  public arn?: string;

  // Name or description of the Size Constraint Set.
  public name?: string;

  // Parts of web requests that you want to inspect the size of.
  public sizeConstraints?: Array<waf_SizeConstraintSetSizeConstraint>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name or description of the Size Constraint Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sizeConstraints",
        "Parts of web requests that you want to inspect the size of.",
        waf_SizeConstraintSetSizeConstraint_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
