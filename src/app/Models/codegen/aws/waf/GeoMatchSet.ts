import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  waf_GeoMatchSetGeoMatchConstraint,
  waf_GeoMatchSetGeoMatchConstraint_GetTypes,
} from '../types/waf_GeoMatchSetGeoMatchConstraint';

export interface GeoMatchSetArgs {
  // The name or description of the GeoMatchSet.
  name?: string;

  // The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.
  geoMatchConstraints?: Array<waf_GeoMatchSetGeoMatchConstraint>;
}
export class GeoMatchSet extends DS_Resource {
  // Amazon Resource Name (ARN)
  public arn?: string;

  // The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.
  public geoMatchConstraints?: Array<waf_GeoMatchSetGeoMatchConstraint>;

  // The name or description of the GeoMatchSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name or description of the GeoMatchSet.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'geoMatchConstraints',
        'The GeoMatchConstraint objects which contain the country that you want AWS WAF to search for.',
        () => waf_GeoMatchSetGeoMatchConstraint_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
