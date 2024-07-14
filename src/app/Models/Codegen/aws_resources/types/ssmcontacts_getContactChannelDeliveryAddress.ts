import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmcontacts_getContactChannelDeliveryAddress {
  //
  simpleAddress?: string;
}

export function ssmcontacts_getContactChannelDeliveryAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "simpleAddress", "", [], true, false),
  ];
}
