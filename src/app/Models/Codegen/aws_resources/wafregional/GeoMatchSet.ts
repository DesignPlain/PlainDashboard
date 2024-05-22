import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafregional_GeoMatchSetGeoMatchConstraint,
  wafregional_GeoMatchSetGeoMatchConstraint_GetTypes,
} from "../types/wafregional_GeoMatchSetGeoMatchConstraint";

export interface GeoMatchSetArgs {
  // The Geo Match Constraint objects which contain the country that you want AWS WAF to search for.
  geoMatchConstraints?: Array<wafregional_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the Geo Match Set.
  name?: string;
}
export class GeoMatchSet extends Resource {
  // The Geo Match Constraint objects which contain the country that you want AWS WAF to search for.
  public geoMatchConstraints?: Array<wafregional_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the Geo Match Set.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "geoMatchConstraints",
        "The Geo Match Constraint objects which contain the country that you want AWS WAF to search for.",
        wafregional_GeoMatchSetGeoMatchConstraint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Geo Match Set.",
        [],
        false,
        true,
      ),
    ];
  }
}
