import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vmwareengine_SubnetDhcpAddressRange {
  /*
(Output)
The first IP address of the range.
*/
  firstAddress?: string;

  /*
(Output)
The last IP address of the range.
*/
  lastAddress?: string;
}

export function vmwareengine_SubnetDhcpAddressRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firstAddress",
      "(Output)\nThe first IP address of the range.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAddress",
      "(Output)\nThe last IP address of the range.",
      [],
      false,
      false,
    ),
  ];
}
