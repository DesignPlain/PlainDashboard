import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint {
  /*
Contains the permitted email addresses. The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. `.example.com`) to indicate
all email addresses in that domain.
*/
  PermittedEmailAddresses?: Array<string>;

  // Indicates whether or not the name constraints are marked critical.
  Critical?: boolean;

  /*
Contains excluded DNS names. Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, `example.com`, `www.example.com`, `www.sub.example.com`
would satisfy `example.com` while `example1.com` does not.
*/
  ExcludedDnsNames?: Array<string>;

  /*
Contains the excluded URIs that apply to the host part of the name.
The value can be a hostname or a domain with a
leading period (like `.example.com`)
*/
  ExcludedUris?: Array<string>;

  /*
Contains permitted DNS names. Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, `example.com`, `www.example.com`, `www.sub.example.com`
would satisfy `example.com` while `example1.com` does not.
*/
  PermittedDnsNames?: Array<string>;

  /*
Contains the permitted IP ranges. For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.
*/
  PermittedIpRanges?: Array<string>;

  /*
Contains the permitted URIs that apply to the host part of the name.
The value can be a hostname or a domain with a
leading period (like `.example.com`)
*/
  PermittedUris?: Array<string>;

  /*
Contains the excluded email addresses. The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. `.example.com`) to indicate
all email addresses in that domain.
*/
  ExcludedEmailAddresses?: Array<string>;

  /*
Contains the excluded IP ranges. For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.
*/
  ExcludedIpRanges?: Array<string>;
}

export function Certificateauthority_CertificateCertificateDescriptionX509DescriptionNameConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not the name constraints are marked critical.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PermittedIpRanges",
      "Contains the permitted IP ranges. For IPv4 addresses, the ranges\nare expressed using CIDR notation as specified in RFC 4632.\nFor IPv6 addresses, the ranges are expressed in similar encoding as IPv4\naddresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PermittedUris",
      "Contains the permitted URIs that apply to the host part of the name.\nThe value can be a hostname or a domain with a\nleading period (like `.example.com`)",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedIpRanges",
      "Contains the excluded IP ranges. For IPv4 addresses, the ranges\nare expressed using CIDR notation as specified in RFC 4632.\nFor IPv6 addresses, the ranges are expressed in similar encoding as IPv4\naddresses.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PermittedEmailAddresses",
      "Contains the permitted email addresses. The value can be a particular\nemail address, a hostname to indicate all email addresses on that host or\na domain with a leading period (e.g. `.example.com`) to indicate\nall email addresses in that domain.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedUris",
      "Contains the excluded URIs that apply to the host part of the name.\nThe value can be a hostname or a domain with a\nleading period (like `.example.com`)",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PermittedDnsNames",
      "Contains permitted DNS names. Any DNS name that can be\nconstructed by simply adding zero or more labels to\nthe left-hand side of the name satisfies the name constraint.\nFor example, `example.com`, `www.example.com`, `www.sub.example.com`\nwould satisfy `example.com` while `example1.com` does not.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedEmailAddresses",
      "Contains the excluded email addresses. The value can be a particular\nemail address, a hostname to indicate all email addresses on that host or\na domain with a leading period (e.g. `.example.com`) to indicate\nall email addresses in that domain.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ExcludedDnsNames",
      "Contains excluded DNS names. Any DNS name that can be\nconstructed by simply adding zero or more labels to\nthe left-hand side of the name satisfies the name constraint.\nFor example, `example.com`, `www.example.com`, `www.sub.example.com`\nwould satisfy `example.com` while `example1.com` does not.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
