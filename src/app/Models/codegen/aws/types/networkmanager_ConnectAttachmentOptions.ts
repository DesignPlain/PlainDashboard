import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_ConnectAttachmentOptions {
  // The protocol used for the attachment connection. Possible values are `GRE` and `NO_ENCAP`.
  protocol?: string;
}

export function networkmanager_ConnectAttachmentOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol used for the attachment connection. Possible values are `GRE` and `NO_ENCAP`.",
      () => [],
      false,
      false,
    ),
  ];
}
