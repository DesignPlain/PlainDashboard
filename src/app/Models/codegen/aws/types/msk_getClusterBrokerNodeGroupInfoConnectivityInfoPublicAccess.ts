import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
  //
  type?: string;
}

export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", () => [], true, false),
  ];
}