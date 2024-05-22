import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo,
  msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes,
} from "./msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo";

export interface msk_ClusterBrokerNodeGroupInfoStorageInfo {
  // A block that contains EBS volume information. See below.
  ebsStorageInfo?: msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}

export function msk_ClusterBrokerNodeGroupInfoStorageInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ebsStorageInfo",
      "A block that contains EBS volume information. See below.",
      msk_ClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
