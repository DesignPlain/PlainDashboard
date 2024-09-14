import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication,
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication";

export interface msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
  // Configuration block for specifying a client authentication. See below.
  clientAuthentication?: msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
}

export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clientAuthentication",
      "Configuration block for specifying a client authentication. See below.",
      () =>
        msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes(),
      false,
      false,
    ),
  ];
}
