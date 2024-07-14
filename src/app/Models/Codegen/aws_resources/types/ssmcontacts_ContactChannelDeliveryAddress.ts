import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmcontacts_ContactChannelDeliveryAddress {
  // Details to engage this contact channel. The expected format depends on the contact channel type and is described in the [`ContactChannelAddress` section of the SSM Contacts API Reference](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ContactChannelAddress.html).
  simpleAddress?: string;
}

export function ssmcontacts_ContactChannelDeliveryAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "simpleAddress",
      "Details to engage this contact channel. The expected format depends on the contact channel type and is described in the [`ContactChannelAddress` section of the SSM Contacts API Reference](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ContactChannelAddress.html).",
      [],
      true,
      false,
    ),
  ];
}
