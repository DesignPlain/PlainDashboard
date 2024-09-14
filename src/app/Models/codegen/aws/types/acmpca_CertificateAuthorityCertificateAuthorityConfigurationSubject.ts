import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject {
  // Typically a shortened version of a longer `given_name`. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza. Must be less than or equal to 128 characters in length.
  pseudonym?: string;

  // Family name. In the US and the UK for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first. Must be less than or equal to 40 characters in length.
  surname?: string;

  // Title such as Mr. or Ms. which is pre-pended to the name to refer formally to the certificate subject. Must be less than or equal to 64 characters in length.
  title?: string;

  // Fully qualified domain name (FQDN) associated with the certificate subject. Must be less than or equal to 64 characters in length.
  commonName?: string;

  // Subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length.
  organizationalUnit?: string;

  // Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third. Must be less than or equal to 3 characters in length.
  generationQualifier?: string;

  // First name. Must be less than or equal to 16 characters in length.
  givenName?: string;

  // Concatenation that typically contains the first letter of the `given_name`, the first letter of the middle name if one exists, and the first letter of the `surname`. Must be less than or equal to 5 characters in length.
  initials?: string;

  // Locality (such as a city or town) in which the certificate subject is located. Must be less than or equal to 128 characters in length.
  locality?: string;

  // Legal name of the organization with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length.
  organization?: string;

  // State in which the subject of the certificate is located. Must be less than or equal to 128 characters in length.
  state?: string;

  // Two digit code that specifies the country in which the certificate subject located. Must be less than or equal to 2 characters in length.
  country?: string;

  // Disambiguating information for the certificate subject. Must be less than or equal to 64 characters in length.
  distinguishedNameQualifier?: string;
}

export function acmpca_CertificateAuthorityCertificateAuthorityConfigurationSubject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "surname",
      "Family name. In the US and the UK for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first. Must be less than or equal to 40 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "commonName",
      "Fully qualified domain name (FQDN) associated with the certificate subject. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationalUnit",
      "Subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "generationQualifier",
      "Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third. Must be less than or equal to 3 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "country",
      "Two digit code that specifies the country in which the certificate subject located. Must be less than or equal to 2 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "distinguishedNameQualifier",
      "Disambiguating information for the certificate subject. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "pseudonym",
      "Typically a shortened version of a longer `given_name`. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza. Must be less than or equal to 128 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "givenName",
      "First name. Must be less than or equal to 16 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "initials",
      "Concatenation that typically contains the first letter of the `given_name`, the first letter of the middle name if one exists, and the first letter of the `surname`. Must be less than or equal to 5 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "locality",
      "Locality (such as a city or town) in which the certificate subject is located. Must be less than or equal to 128 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "organization",
      "Legal name of the organization with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "State in which the subject of the certificate is located. Must be less than or equal to 128 characters in length.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Title such as Mr. or Ms. which is pre-pended to the name to refer formally to the certificate subject. Must be less than or equal to 64 characters in length.",
      () => [],
      false,
      true,
    ),
  ];
}
