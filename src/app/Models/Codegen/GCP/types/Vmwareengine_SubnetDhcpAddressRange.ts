import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_SubnetDhcpAddressRange {
  /*
(Output)
The first IP address of the range.
*/
  FirstAddress?: string;

  /*
(Output)
The last IP address of the range.
*/
  LastAddress?: string;
}

export function Vmwareengine_SubnetDhcpAddressRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FirstAddress",
      "(Output)\nThe first IP address of the range.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastAddress",
      "(Output)\nThe last IP address of the range.",
      [],
      false,
      false,
    ),
  ];
}
