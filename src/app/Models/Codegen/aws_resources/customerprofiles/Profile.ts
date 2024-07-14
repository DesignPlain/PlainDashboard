import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  customerprofiles_ProfileShippingAddress,
  customerprofiles_ProfileShippingAddress_GetTypes,
} from "../types/customerprofiles_ProfileShippingAddress";
import {
  customerprofiles_ProfileAddress,
  customerprofiles_ProfileAddress_GetTypes,
} from "../types/customerprofiles_ProfileAddress";
import {
  customerprofiles_ProfileBillingAddress,
  customerprofiles_ProfileBillingAddress_GetTypes,
} from "../types/customerprofiles_ProfileBillingAddress";
import {
  customerprofiles_ProfileMailingAddress,
  customerprofiles_ProfileMailingAddress_GetTypes,
} from "../types/customerprofiles_ProfileMailingAddress";

export interface ProfileArgs {
  // The customer’s last name.
  lastName?: string;

  // The type of profile used to describe the customer.
  partyTypeString?: string;

  // The customer’s phone number, which has not been specified as a mobile, home, or business number.
  phoneNumber?: string;

  // A unique account number that you have given to the customer.
  accountNumber?: string;

  // A key value pair of attributes of a customer profile.
  attributes?: Map<string, string>;

  // The name of the customer’s business.
  businessName?: string;

  // The gender with which the customer identifies.
  genderString?: string;

  /*
The name of your Customer Profile domain. It must be unique for your AWS account.

The following arguments are optional:
*/
  domainName?: string;

  // The customer’s home phone number.
  homePhoneNumber?: string;

  // A block that specifies the customer’s shipping address. Documented below.
  shippingAddress?: customerprofiles_ProfileShippingAddress;

  // A block that specifies a generic address associated with the customer that is not mailing, shipping, or billing. Documented below.
  address?: customerprofiles_ProfileAddress;

  // A block that specifies the customer’s billing address. Documented below.
  billingAddress?: customerprofiles_ProfileBillingAddress;

  // The customer’s birth date.
  birthDate?: string;

  // The customer’s business email address.
  businessEmailAddress?: string;

  // The customer’s business phone number.
  businessPhoneNumber?: string;

  // The customer’s mobile phone number.
  mobilePhoneNumber?: string;

  // The customer’s middle name.
  middleName?: string;

  // The customer’s personal email address.
  personalEmailAddress?: string;

  // Any additional information relevant to the customer’s profile.
  additionalInformation?: string;

  // The customer’s email address, which has not been specified as a personal or business address.
  emailAddress?: string;

  // The customer’s first name.
  firstName?: string;

  // A block that specifies the customer’s mailing address. Documented below.
  mailingAddress?: customerprofiles_ProfileMailingAddress;
}
export class Profile extends Resource {
  /*
The name of your Customer Profile domain. It must be unique for your AWS account.

The following arguments are optional:
*/
  public domainName?: string;

  // The customer’s last name.
  public lastName?: string;

  // A block that specifies the customer’s mailing address. Documented below.
  public mailingAddress?: customerprofiles_ProfileMailingAddress;

  // Any additional information relevant to the customer’s profile.
  public additionalInformation?: string;

  // A block that specifies the customer’s billing address. Documented below.
  public billingAddress?: customerprofiles_ProfileBillingAddress;

  // The customer’s birth date.
  public birthDate?: string;

  // A block that specifies the customer’s shipping address. Documented below.
  public shippingAddress?: customerprofiles_ProfileShippingAddress;

  // The customer’s business email address.
  public businessEmailAddress?: string;

  // The customer’s home phone number.
  public homePhoneNumber?: string;

  // The type of profile used to describe the customer.
  public partyTypeString?: string;

  // The name of the customer’s business.
  public businessName?: string;

  // The customer’s phone number, which has not been specified as a mobile, home, or business number.
  public phoneNumber?: string;

  // A unique account number that you have given to the customer.
  public accountNumber?: string;

  // A block that specifies a generic address associated with the customer that is not mailing, shipping, or billing. Documented below.
  public address?: customerprofiles_ProfileAddress;

  // A key value pair of attributes of a customer profile.
  public attributes?: Map<string, string>;

  // The gender with which the customer identifies.
  public genderString?: string;

  // The customer’s middle name.
  public middleName?: string;

  // The customer’s mobile phone number.
  public mobilePhoneNumber?: string;

  // The customer’s personal email address.
  public personalEmailAddress?: string;

  // The customer’s business phone number.
  public businessPhoneNumber?: string;

  // The customer’s email address, which has not been specified as a personal or business address.
  public emailAddress?: string;

  // The customer’s first name.
  public firstName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "mobilePhoneNumber",
        "The customer’s mobile phone number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "middleName",
        "The customer’s middle name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firstName",
        "The customer’s first name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "partyTypeString",
        "The type of profile used to describe the customer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "attributes",
        "A key value pair of attributes of a customer profile.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name of your Customer Profile domain. It must be unique for your AWS account.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "shippingAddress",
        "A block that specifies the customer’s shipping address. Documented below.",
        customerprofiles_ProfileShippingAddress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "billingAddress",
        "A block that specifies the customer’s billing address. Documented below.",
        customerprofiles_ProfileBillingAddress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mailingAddress",
        "A block that specifies the customer’s mailing address. Documented below.",
        customerprofiles_ProfileMailingAddress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lastName",
        "The customer’s last name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "businessName",
        "The name of the customer’s business.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "genderString",
        "The gender with which the customer identifies.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "businessEmailAddress",
        "The customer’s business email address.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "personalEmailAddress",
        "The customer’s personal email address.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "phoneNumber",
        "The customer’s phone number, which has not been specified as a mobile, home, or business number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "address",
        "A block that specifies a generic address associated with the customer that is not mailing, shipping, or billing. Documented below.",
        customerprofiles_ProfileAddress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "businessPhoneNumber",
        "The customer’s business phone number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountNumber",
        "A unique account number that you have given to the customer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "homePhoneNumber",
        "The customer’s home phone number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "birthDate",
        "The customer’s birth date.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "additionalInformation",
        "Any additional information relevant to the customer’s profile.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "emailAddress",
        "The customer’s email address, which has not been specified as a personal or business address.",
        [],
        false,
        false,
      ),
    ];
  }
}
