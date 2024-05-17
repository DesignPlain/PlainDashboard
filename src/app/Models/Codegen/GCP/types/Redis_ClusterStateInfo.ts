import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Redis_ClusterStateInfoUpdateInfo,
  Redis_ClusterStateInfoUpdateInfo_GetTypes,
} from "./Redis_ClusterStateInfoUpdateInfo";

export interface Redis_ClusterStateInfo {
  /*
A nested object resource
Structure is documented below.
*/
  UpdateInfo?: Redis_ClusterStateInfoUpdateInfo;
}

export function Redis_ClusterStateInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "UpdateInfo",
      "A nested object resource\nStructure is documented below.",
      Redis_ClusterStateInfoUpdateInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
