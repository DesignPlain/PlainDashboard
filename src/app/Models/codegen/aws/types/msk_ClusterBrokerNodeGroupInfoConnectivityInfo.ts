import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess,
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess";
import {
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity,
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity";

export interface msk_ClusterBrokerNodeGroupInfoConnectivityInfo {
  // Access control settings for brokers. See below.
  publicAccess?: msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;

  // VPC connectivity access control for brokers. See below.
  vpcConnectivity?: msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
}

export function msk_ClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "publicAccess",
      "Access control settings for brokers. See below.",
      () =>
        msk_ClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConnectivity",
      "VPC connectivity access control for brokers. See below.",
      () =>
        msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes(),
      false,
      false,
    ),
  ];
}
