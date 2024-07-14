import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_GeoMatchSetGeoMatchConstraint,
  waf_GeoMatchSetGeoMatchConstraint_GetTypes,
} from "../types/waf_GeoMatchSetGeoMatchConstraint";

export interface GeoMatchSetArgs {
  // The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.
  geoMatchConstraints?: Array<waf_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the GeoMatchSet.
  name?: string;
}
export class GeoMatchSet extends Resource {
  // The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.
  public geoMatchConstraints?: Array<waf_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the GeoMatchSet.
  public name?: string;

  // Amazon Resource Name (ARN)
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "geoMatchConstraints",
        "The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.",
        waf_GeoMatchSetGeoMatchConstraint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the GeoMatchSet.",
        [],
        false,
        true,
      ),
    ];
  }
}
