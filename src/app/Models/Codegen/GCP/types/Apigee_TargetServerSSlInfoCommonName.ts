import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_TargetServerSSlInfoCommonName {
  // The TLS Common Name string of the certificate.
  Value?: string;

  // Indicates whether the cert should be matched against as a wildcard cert.
  WildcardMatch?: boolean;
}

export function Apigee_TargetServerSSlInfoCommonName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The TLS Common Name string of the certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "WildcardMatch",
      "Indicates whether the cert should be matched against as a wildcard cert.",
      [],
      false,
      false,
    ),
  ];
}
