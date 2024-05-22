import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vmwareengine_getSubnetDhcpAddressRange {
  // The first IP address of the range.
  firstAddress?: string;

  // The last IP address of the range.
  lastAddress?: string;
}

export function vmwareengine_getSubnetDhcpAddressRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "firstAddress",
      "The first IP address of the range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAddress",
      "The last IP address of the range.",
      [],
      true,
      false,
    ),
  ];
}
