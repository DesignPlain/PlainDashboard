import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigee_TargetServerSSlInfoCommonName {
  // The TLS Common Name string of the certificate.
  value?: string;

  // Indicates whether the cert should be matched against as a wildcard cert.
  wildcardMatch?: boolean;
}

export function apigee_TargetServerSSlInfoCommonName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The TLS Common Name string of the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "wildcardMatch",
      "Indicates whether the cert should be matched against as a wildcard cert.",
      [],
      false,
      false,
    ),
  ];
}
