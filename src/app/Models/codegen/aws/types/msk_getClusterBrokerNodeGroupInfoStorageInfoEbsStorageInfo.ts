import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput,
  msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes,
} from "./msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput";

export interface msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  //
  provisionedThroughputs?: Array<msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput>;

  //
  volumeSize?: number;
}

export function msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "provisionedThroughputs",
      "",
      () =>
        msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
