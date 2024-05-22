import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmcontacts_PlanStageTargetChannelTargetInfo,
  ssmcontacts_PlanStageTargetChannelTargetInfo_GetTypes,
} from "./ssmcontacts_PlanStageTargetChannelTargetInfo";
import {
  ssmcontacts_PlanStageTargetContactTargetInfo,
  ssmcontacts_PlanStageTargetContactTargetInfo_GetTypes,
} from "./ssmcontacts_PlanStageTargetContactTargetInfo";

export interface ssmcontacts_PlanStageTarget {
  // A configuration block for specifying information about the contact channel that Incident Manager engages. See Channel Target Info for more details.
  channelTargetInfo?: ssmcontacts_PlanStageTargetChannelTargetInfo;

  // A configuration block for specifying information about the contact that Incident Manager engages. See Contact Target Info for more details.
  contactTargetInfo?: ssmcontacts_PlanStageTargetContactTargetInfo;
}

export function ssmcontacts_PlanStageTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "channelTargetInfo",
      "A configuration block for specifying information about the contact channel that Incident Manager engages. See Channel Target Info for more details.",
      ssmcontacts_PlanStageTargetChannelTargetInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "contactTargetInfo",
      "A configuration block for specifying information about the contact that Incident Manager engages. See Contact Target Info for more details.",
      ssmcontacts_PlanStageTargetContactTargetInfo_GetTypes(),
      false,
      false,
    ),
  ];
}
