import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssmcontacts_getPlanStageTargetChannelTargetInfo {
  //
  contactChannelId?: string;

  //
  retryIntervalInMinutes?: number;
}

export function ssmcontacts_getPlanStageTargetChannelTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "retryIntervalInMinutes",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contactChannelId",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
