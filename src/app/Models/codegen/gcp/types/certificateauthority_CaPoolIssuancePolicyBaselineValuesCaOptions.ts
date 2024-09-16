import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions {
  /*
When true, the "path length constraint" in Basic Constraints extension will be set to 0.
if both `max_issuer_path_length` and `zero_max_issuer_path_length` are unset,
the max path length will be omitted from the CA certificate.
*/
  zeroMaxIssuerPathLength?: boolean;

  // When true, the "CA" in Basic Constraints extension will be set to true.
  isCa?: boolean;

  /*
Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
*/
  maxIssuerPathLength?: number;

  /*
When true, the "CA" in Basic Constraints extension will be set to false.
If both `is_ca` and `non_ca` are unset, the extension will be omitted from the CA certificate.
*/
  nonCa?: boolean;
}

export function certificateauthority_CaPoolIssuancePolicyBaselineValuesCaOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'zeroMaxIssuerPathLength',
      'When true, the "path length constraint" in Basic Constraints extension will be set to 0.\nif both `max_issuer_path_length` and `zero_max_issuer_path_length` are unset,\nthe max path length will be omitted from the CA certificate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isCa',
      'When true, the "CA" in Basic Constraints extension will be set to true.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxIssuerPathLength',
      'Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of\nsubordinate CA certificates that are allowed. If this value is less than 0, the request will fail.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'nonCa',
      'When true, the "CA" in Basic Constraints extension will be set to false.\nIf both `is_ca` and `non_ca` are unset, the extension will be omitted from the CA certificate.',
      () => [],
      false,
      false,
    ),
  ];
}
