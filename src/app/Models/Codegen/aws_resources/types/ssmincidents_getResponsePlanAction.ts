import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssmincidents_getResponsePlanActionSsmAutomation,
  ssmincidents_getResponsePlanActionSsmAutomation_GetTypes,
} from "./ssmincidents_getResponsePlanActionSsmAutomation";

export interface ssmincidents_getResponsePlanAction {
  // The Systems Manager automation document to start as the runbook at the beginning of the incident. The following values are supported:
  ssmAutomations?: Array<ssmincidents_getResponsePlanActionSsmAutomation>;
}

export function ssmincidents_getResponsePlanAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ssmAutomations",
      "The Systems Manager automation document to start as the runbook at the beginning of the incident. The following values are supported:",
      ssmincidents_getResponsePlanActionSsmAutomation_GetTypes(),
      true,
      false,
    ),
  ];
}
