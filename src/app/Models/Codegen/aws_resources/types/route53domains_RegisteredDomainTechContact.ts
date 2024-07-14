import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53domains_RegisteredDomainTechContact {
  // Email address of the contact.
  email?: string;

  // A key-value map of parameters required by certain top-level domains.
  extraParams?: Map<string, string>;

  // First name of contact.
  firstName?: string;

  // The zip or postal code of the contact's address.
  zipCode?: string;

  // Second line of contact's address, if any.
  addressLine2?: string;

  // Code for the country of the contact's address. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-CountryCode) for valid values.
  countryCode?: string;

  // Name of the organization for contact types other than `PERSON`.
  organizationName?: string;

  // The city of the contact's address.
  city?: string;

  // Indicates whether the contact is a person, company, association, or public organization. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-ContactType) for valid values.
  contactType?: string;

  // The state or province of the contact's city.
  state?: string;

  // Fax number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]".
  fax?: string;

  // The phone number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]".
  phoneNumber?: string;

  // First line of the contact's address.
  addressLine1?: string;

  // Last name of contact.
  lastName?: string;
}

export function route53domains_RegisteredDomainTechContact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "addressLine2",
      "Second line of contact's address, if any.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationName",
      "Name of the organization for contact types other than `PERSON`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The state or province of the contact's city.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fax",
      'Fax number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "addressLine1",
      "First line of the contact's address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zipCode",
      "The zip or postal code of the contact's address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "firstName",
      "First name of contact.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "countryCode",
      "Code for the country of the contact's address. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-CountryCode) for valid values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "extraParams",
      "A key-value map of parameters required by certain top-level domains.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "city",
      "The city of the contact's address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contactType",
      "Indicates whether the contact is a person, company, association, or public organization. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-ContactType) for valid values.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "phoneNumber",
      'The phone number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastName",
      "Last name of contact.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email address of the contact.",
      [],
      false,
      false,
    ),
  ];
}
