import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_ConnectPeerBgpOptions {
  //
  peerAsn?: number;
}

export function networkmanager_ConnectPeerBgpOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "peerAsn", "", () => [], false, false),
  ];
}
