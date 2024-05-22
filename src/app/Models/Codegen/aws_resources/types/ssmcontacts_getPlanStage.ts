import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssmcontacts_getPlanStageTarget,
  ssmcontacts_getPlanStageTarget_GetTypes,
} from "./ssmcontacts_getPlanStageTarget";

export interface ssmcontacts_getPlanStage {
  //
  durationInMinutes?: number;

  //
  targets?: Array<ssmcontacts_getPlanStageTarget>;
}

export function ssmcontacts_getPlanStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "durationInMinutes",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "",
      ssmcontacts_getPlanStageTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
