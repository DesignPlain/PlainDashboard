import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
export class GeoMatchSet extends DS_Resource {
  // The Geo Match Constraint objects which contain the country that you want AWS WAF to search for.
  public geoMatchConstraints?: Array<wafregional_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the Geo Match Set.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the Geo Match Set.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "geoMatchConstraints",
        "The Geo Match Constraint objects which contain the country that you want AWS WAF to search for.",
        () => wafregional_GeoMatchSetGeoMatchConstraint_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
