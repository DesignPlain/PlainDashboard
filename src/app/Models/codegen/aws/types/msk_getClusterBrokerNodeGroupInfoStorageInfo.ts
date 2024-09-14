import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo,
  msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes,
} from "./msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo";

export interface msk_getClusterBrokerNodeGroupInfoStorageInfo {
  //
  ebsStorageInfos?: Array<msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo>;
}

export function msk_getClusterBrokerNodeGroupInfoStorageInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ebsStorageInfos",
      "",
      () =>
        msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes(),
      true,
      false,
    ),
  ];
}
