import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CertificateConfigSubjectConfigSubject {
  // The organization of the subject.
  Organization?: string;

  // The organizational unit of the subject.
  OrganizationalUnit?: string;

  // The postal code of the subject.
  PostalCode?: string;

  // The province, territory, or regional state of the subject.
  Province?: string;

  // The street address of the subject.
  StreetAddress?: string;

  // The common name of the distinguished name.
  CommonName?: string;

  // The country code of the subject.
  CountryCode?: string;

  // The locality or city of the subject.
  Locality?: string;
}

export function Certificateauthority_CertificateConfigSubjectConfigSubject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CountryCode",
      "The country code of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Locality",
      "The locality or city of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Organization",
      "The organization of the subject.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "OrganizationalUnit",
      "The organizational unit of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PostalCode",
      "The postal code of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Province",
      "The province, territory, or regional state of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StreetAddress",
      "The street address of the subject.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CommonName",
      "The common name of the distinguished name.",
      [],
      true,
      true,
    ),
  ];
}
