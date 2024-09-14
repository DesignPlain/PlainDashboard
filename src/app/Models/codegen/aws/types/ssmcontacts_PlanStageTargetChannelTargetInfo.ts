import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssmcontacts_PlanStageTargetChannelTargetInfo {
  // The Amazon Resource Name (ARN) of the contact channel.
  contactChannelId?: string;

  // The number of minutes to wait before retrying to send engagement if the engagement initially failed.
  retryIntervalInMinutes?: number;
}

export function ssmcontacts_PlanStageTargetChannelTargetInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contactChannelId",
      "The Amazon Resource Name (ARN) of the contact channel.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryIntervalInMinutes",
      "The number of minutes to wait before retrying to send engagement if the engagement initially failed.",
      () => [],
      false,
      false,
    ),
  ];
}
