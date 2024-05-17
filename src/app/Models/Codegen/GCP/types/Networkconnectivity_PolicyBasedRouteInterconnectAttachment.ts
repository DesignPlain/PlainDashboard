import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_PolicyBasedRouteInterconnectAttachment {
  // Cloud region to install this policy-based route on for Interconnect attachments. Use `all` to install it on all Interconnect attachments.
  Region?: string;
}

export function Networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Region",
      "Cloud region to install this policy-based route on for Interconnect attachments. Use `all` to install it on all Interconnect attachments.",
      [],
      true,
      true,
    ),
  ];
}
