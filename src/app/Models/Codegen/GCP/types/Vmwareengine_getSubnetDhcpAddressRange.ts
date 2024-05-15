import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_getSubnetDhcpAddressRange {
  // The first IP address of the range.
  FirstAddress?: string;

  // The last IP address of the range.
  LastAddress?: string;
}

export function Vmwareengine_getSubnetDhcpAddressRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FirstAddress",
      "The first IP address of the range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastAddress",
      "The last IP address of the range.",
      [],
      true,
      false,
    ),
  ];
}
