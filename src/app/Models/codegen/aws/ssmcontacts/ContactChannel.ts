import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmcontacts_ContactChannelDeliveryAddress,
  ssmcontacts_ContactChannelDeliveryAddress_GetTypes,
} from "../types/ssmcontacts_ContactChannelDeliveryAddress";

export interface ContactChannelArgs {
  // Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.
  type?: string;

  // Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.
  contactId?: string;

  // Block that contains contact engagement details. See details below.
  deliveryAddress?: ssmcontacts_ContactChannelDeliveryAddress;

  // Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  name?: string;
}
export class ContactChannel extends DS_Resource {
  // Whether the contact channel is activated. The contact channel must be activated to use it to engage the contact. One of `ACTIVATED` or `NOT_ACTIVATED`.
  public activationStatus?: string;

  // Amazon Resource Name (ARN) of the contact channel.
  public arn?: string;

  // Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.
  public contactId?: string;

  // Block that contains contact engagement details. See details below.
  public deliveryAddress?: ssmcontacts_ContactChannelDeliveryAddress;

  // Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  public name?: string;

  // Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the contact channel. One of `SMS`, `VOICE` or `EMAIL`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contactId",
        "Amazon Resource Name (ARN) of the AWS SSM Contact that the contact channel belongs to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deliveryAddress",
        "Block that contains contact engagement details. See details below.",
        () => ssmcontacts_ContactChannelDeliveryAddress_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the contact channel. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
