import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface waf_GeoMatchSetGeoMatchConstraint {
  // The type of geographical area you want AWS WAF to search for. Currently Country is the only valid value.
  type?: string;

  /*
The country that you want AWS WAF to search for.
This is the two-letter country code, e.g., `US`, `CA`, `RU`, `CN`, etc.
See [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_GeoMatchConstraint.html) for all supported values.
*/
  value?: string;
}

export function waf_GeoMatchSetGeoMatchConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of geographical area you want AWS WAF to search for. Currently Country is the only valid value.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The country that you want AWS WAF to search for.\nThis is the two-letter country code, e.g., `US`, `CA`, `RU`, `CN`, etc.\nSee [docs](https://docs.aws.amazon.com/waf/latest/APIReference/API_GeoMatchConstraint.html) for all supported values.',
      () => [],
      true,
      false,
    ),
  ];
}
