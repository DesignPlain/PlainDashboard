import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssmcontacts_ContactChannelDeliveryAddress,
  ssmcontacts_ContactChannelDeliveryAddress_GetTypes,
} from "../types/ssmcontacts_ContactChannelDeliveryAddress";

export interface ContactChannelArgs {
  // Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  name?: string;

  // Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.
  type?: string;

  // Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.
  contactId?: string;

  // Block that contains contact engagement details. See details below.
  deliveryAddress?: ssmcontacts_ContactChannelDeliveryAddress;
}
export class ContactChannel extends Resource {
  // Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  public name?: string;

  // Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.
  public type?: string;

  // Whether the contact channel is activated. The contact channel must be activated to use it to engage the contact. One of `ACTIVATED` or `NOT_ACTIVATED`.
  public activationStatus?: string;

  // Amazon Resource Name (ARN) of the contact channel.
  public arn?: string;

  // Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.
  public contactId?: string;

  // Block that contains contact engagement details. See details below.
  public deliveryAddress?: ssmcontacts_ContactChannelDeliveryAddress;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contactId",
        "Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deliveryAddress",
        "Block that contains contact engagement details. See details below.",
        ssmcontacts_ContactChannelDeliveryAddress_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.",
        [],
        false,
        false,
      ),
    ];
  }
}
