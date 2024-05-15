import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames {
  // Subject Alternative Name
  SubjectAlternativeName?: string;
}

export function Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SubjectAlternativeName",
      "Subject Alternative Name",
      [],
      false,
      true,
    ),
  ];
}
