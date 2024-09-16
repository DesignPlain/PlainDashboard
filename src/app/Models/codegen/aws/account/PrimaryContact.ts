import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PrimaryContactArgs {
  // The full name of the primary contact address.
  fullName?: string;

  // The postal code of the primary contact address.
  postalCode?: string;

  // The ID of the target account when managing member accounts. Will manage current user's account by default if omitted.
  accountId?: string;

  // The first line of the primary contact address.
  addressLine1?: string;

  // The second line of the primary contact address, if any.
  addressLine2?: string;

  // The city of the primary contact address.
  city?: string;

  // The name of the company associated with the primary contact information, if any.
  companyName?: string;

  // The ISO-3166 two-letter country code for the primary contact address.
  countryCode?: string;

  // The state or region of the primary contact address. This field is required in selected countries.
  stateOrRegion?: string;

  // The third line of the primary contact address, if any.
  addressLine3?: string;

  // The district or county of the primary contact address, if any.
  districtOrCounty?: string;

  // The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.
  phoneNumber?: string;

  // The URL of the website associated with the primary contact information, if any.
  websiteUrl?: string;
}
export class PrimaryContact extends DS_Resource {
  // The first line of the primary contact address.
  public addressLine1?: string;

  // The city of the primary contact address.
  public city?: string;

  // The district or county of the primary contact address, if any.
  public districtOrCounty?: string;

  // The URL of the website associated with the primary contact information, if any.
  public websiteUrl?: string;

  // The ISO-3166 two-letter country code for the primary contact address.
  public countryCode?: string;

  // The full name of the primary contact address.
  public fullName?: string;

  // The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.
  public phoneNumber?: string;

  // The postal code of the primary contact address.
  public postalCode?: string;

  // The ID of the target account when managing member accounts. Will manage current user's account by default if omitted.
  public accountId?: string;

  // The second line of the primary contact address, if any.
  public addressLine2?: string;

  // The third line of the primary contact address, if any.
  public addressLine3?: string;

  // The name of the company associated with the primary contact information, if any.
  public companyName?: string;

  // The state or region of the primary contact address. This field is required in selected countries.
  public stateOrRegion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'districtOrCounty',
        'The district or county of the primary contact address, if any.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'websiteUrl',
        'The URL of the website associated with the primary contact information, if any.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'addressLine1',
        'The first line of the primary contact address.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'city',
        'The city of the primary contact address.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stateOrRegion',
        'The state or region of the primary contact address. This field is required in selected countries.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'addressLine3',
        'The third line of the primary contact address, if any.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'companyName',
        'The name of the company associated with the primary contact information, if any.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'countryCode',
        'The ISO-3166 two-letter country code for the primary contact address.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'phoneNumber',
        'The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'fullName',
        'The full name of the primary contact address.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'postalCode',
        'The postal code of the primary contact address.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accountId',
        "The ID of the target account when managing member accounts. Will manage current user's account by default if omitted.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'addressLine2',
        'The second line of the primary contact address, if any.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
