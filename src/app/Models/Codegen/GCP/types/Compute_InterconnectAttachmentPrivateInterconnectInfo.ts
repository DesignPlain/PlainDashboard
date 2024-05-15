import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InterconnectAttachmentPrivateInterconnectInfo {
  /*
(Output)
802.1q encapsulation tag to be used for traffic between
Google and the customer, going to and from this network and region.
*/
  Tag8021q?: number;
}

export function Compute_InterconnectAttachmentPrivateInterconnectInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Tag8021q",
      "(Output)\n802.1q encapsulation tag to be used for traffic between\nGoogle and the customer, going to and from this network and region.",
      [],
      false,
      false,
    ),
  ];
}
