import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafregional_SizeConstraintSetSizeConstraint,
  wafregional_SizeConstraintSetSizeConstraint_GetTypes,
} from "../types/wafregional_SizeConstraintSetSizeConstraint";

export interface SizeConstraintSetArgs {
  // The name or description of the Size Constraint Set.
  name?: string;

  // Specifies the parts of web requests that you want to inspect the size of.
  sizeConstraints?: Array<wafregional_SizeConstraintSetSizeConstraint>;
}
export class SizeConstraintSet extends Resource {
  // The name or description of the Size Constraint Set.
  public name?: string;

  // Specifies the parts of web requests that you want to inspect the size of.
  public sizeConstraints?: Array<wafregional_SizeConstraintSetSizeConstraint>;

  //
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Size Constraint Set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sizeConstraints",
        "Specifies the parts of web requests that you want to inspect the size of.",
        wafregional_SizeConstraintSetSizeConstraint_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
