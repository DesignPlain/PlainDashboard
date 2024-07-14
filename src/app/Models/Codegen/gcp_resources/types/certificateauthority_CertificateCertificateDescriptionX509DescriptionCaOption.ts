import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption {
  /*
Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
*/
  maxIssuerPathLength?: number;

  // When true, the "CA" in Basic Constraints extension will be set to true.
  isCa?: boolean;
}

export function certificateauthority_CertificateCertificateDescriptionX509DescriptionCaOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxIssuerPathLength",
      'Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of\nsubordinate CA certificates that are allowed. If this value is less than 0, the request will fail.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isCa",
      'When true, the "CA" in Basic Constraints extension will be set to true.',
      [],
      false,
      false,
    ),
  ];
}
