import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmcontacts_getPlanStageTargetChannelTargetInfo,
  ssmcontacts_getPlanStageTargetChannelTargetInfo_GetTypes,
} from "./ssmcontacts_getPlanStageTargetChannelTargetInfo";
import {
  ssmcontacts_getPlanStageTargetContactTargetInfo,
  ssmcontacts_getPlanStageTargetContactTargetInfo_GetTypes,
} from "./ssmcontacts_getPlanStageTargetContactTargetInfo";

export interface ssmcontacts_getPlanStageTarget {
  //
  channelTargetInfos?: Array<ssmcontacts_getPlanStageTargetChannelTargetInfo>;

  //
  contactTargetInfos?: Array<ssmcontacts_getPlanStageTargetContactTargetInfo>;
}

export function ssmcontacts_getPlanStageTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "channelTargetInfos",
      "",
      ssmcontacts_getPlanStageTargetChannelTargetInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "contactTargetInfos",
      "",
      ssmcontacts_getPlanStageTargetContactTargetInfo_GetTypes(),
      true,
      false,
    ),
  ];
}
