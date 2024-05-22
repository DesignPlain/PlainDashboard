import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificateauthority_getAuthorityConfigX509ConfigCaOption {
  /*
When true, the "CA" in Basic Constraints extension will be set to false.
If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.
*/
  nonCa?: boolean;

  /*
When true, the "path length constraint" in Basic Constraints extension will be set to 0.
If both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.
*/
  zeroMaxIssuerPathLength?: boolean;

  // When true, the "CA" in Basic Constraints extension will be set to true.
  isCa?: boolean;

  /*
Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. Setting the value to 0
requires setting 'zero_max_issuer_path_length = true'.
*/
  maxIssuerPathLength?: number;
}

export function certificateauthority_getAuthorityConfigX509ConfigCaOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "nonCa",
      "When true, the \"CA\" in Basic Constraints extension will be set to false.\nIf both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "zeroMaxIssuerPathLength",
      "When true, the \"path length constraint\" in Basic Constraints extension will be set to 0.\nIf both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,\nthe max path length will be omitted from the CA certificate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isCa",
      'When true, the "CA" in Basic Constraints extension will be set to true.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxIssuerPathLength",
      "Refers to the \"path length constraint\" in Basic Constraints extension. For a CA certificate, this value describes the depth of\nsubordinate CA certificates that are allowed. If this value is less than 0, the request will fail. Setting the value to 0\nrequires setting 'zero_max_issuer_path_length = true'.",
      [],
      true,
      false,
    ),
  ];
}
