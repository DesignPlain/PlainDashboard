import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redis_ClusterStateInfoUpdateInfo,
  redis_ClusterStateInfoUpdateInfo_GetTypes,
} from "./redis_ClusterStateInfoUpdateInfo";

export interface redis_ClusterStateInfo {
  /*
A nested object resource
Structure is documented below.
*/
  updateInfo?: redis_ClusterStateInfoUpdateInfo;
}

export function redis_ClusterStateInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "updateInfo",
      "A nested object resource\nStructure is documented below.",
      redis_ClusterStateInfoUpdateInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
