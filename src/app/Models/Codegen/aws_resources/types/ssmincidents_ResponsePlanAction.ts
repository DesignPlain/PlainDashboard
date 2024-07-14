import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssmincidents_ResponsePlanActionSsmAutomation,
  ssmincidents_ResponsePlanActionSsmAutomation_GetTypes,
} from "./ssmincidents_ResponsePlanActionSsmAutomation";

export interface ssmincidents_ResponsePlanAction {
  // The Systems Manager automation document to start as the runbook at the beginning of the incident. The following values are supported:
  ssmAutomations?: Array<ssmincidents_ResponsePlanActionSsmAutomation>;
}

export function ssmincidents_ResponsePlanAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ssmAutomations",
      "The Systems Manager automation document to start as the runbook at the beginning of the incident. The following values are supported:",
      ssmincidents_ResponsePlanActionSsmAutomation_GetTypes(),
      false,
      false,
    ),
  ];
}
