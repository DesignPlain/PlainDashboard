import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  connect_PhoneNumberStatus,
  connect_PhoneNumberStatus_GetTypes,
} from "../types/connect_PhoneNumberStatus";

export interface PhoneNumberArgs {
  // The ISO country code. For a list of Valid values, refer to [PhoneNumberCountryCode](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html#connect-SearchAvailablePhoneNumbers-request-PhoneNumberCountryCode).
  countryCode?: string;

  // The description of the phone number.
  description?: string;

  // The prefix of the phone number that is used to filter available phone numbers. If provided, it must contain `+` as part of the country code. Do not specify this argument when importing the resource.
  prefix?: string;

  // Tags to apply to the Phone Number. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.
  targetArn?: string;

  // The type of phone number. Valid Values: `TOLL_FREE` | `DID`.
  type?: string;
}
export class PhoneNumber extends Resource {
  // The description of the phone number.
  public description?: string;

  // The prefix of the phone number that is used to filter available phone numbers. If provided, it must contain `+` as part of the country code. Do not specify this argument when importing the resource.
  public prefix?: string;

  // The status of the phone number. Valid Values: `CLAIMED` | `IN_PROGRESS` | `FAILED`.
  public statuses?: Array<connect_PhoneNumberStatus>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.
  public targetArn?: string;

  // The type of phone number. Valid Values: `TOLL_FREE` | `DID`.
  public type?: string;

  // The ARN of the phone number.
  public arn?: string;

  // The ISO country code. For a list of Valid values, refer to [PhoneNumberCountryCode](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html#connect-SearchAvailablePhoneNumbers-request-PhoneNumberCountryCode).
  public countryCode?: string;

  // The phone number. Phone numbers are formatted `[+] [country code] [subscriber number including area code]`.
  public phoneNumber?: string;

  // Tags to apply to the Phone Number. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "countryCode",
        "The ISO country code. For a list of Valid values, refer to [PhoneNumberCountryCode](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html#connect-SearchAvailablePhoneNumbers-request-PhoneNumberCountryCode).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the phone number.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "prefix",
        "The prefix of the phone number that is used to filter available phone numbers. If provided, it must contain `+` as part of the country code. Do not specify this argument when importing the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Phone Number. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetArn",
        "The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of phone number. Valid Values: `TOLL_FREE` | `DID`.",
        [],
        true,
        true,
      ),
    ];
  }
}
