import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssmincidents_ResponsePlanActionSsmAutomationParameter,
  ssmincidents_ResponsePlanActionSsmAutomationParameter_GetTypes,
} from "./ssmincidents_ResponsePlanActionSsmAutomationParameter";

export interface ssmincidents_ResponsePlanActionSsmAutomation {
  // The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
  dynamicParameters?: Map<string, string>;

  // The key-value pair parameters to use when the automation document runs. The following values are supported:
  parameters?: Array<ssmincidents_ResponsePlanActionSsmAutomationParameter>;

  // The Amazon Resource Name (ARN) of the role that the automation document assumes when it runs commands.
  roleArn?: string;

  // The account that the automation document runs in. This can be in either the management account or an application account.
  targetAccount?: string;

  // The automation document's name.
  documentName?: string;

  // The version of the automation document to use at runtime.
  documentVersion?: string;
}

export function ssmincidents_ResponsePlanActionSsmAutomation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "dynamicParameters",
      "The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "The key-value pair parameters to use when the automation document runs. The following values are supported:",
      ssmincidents_ResponsePlanActionSsmAutomationParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The Amazon Resource Name (ARN) of the role that the automation document assumes when it runs commands.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetAccount",
      "The account that the automation document runs in. This can be in either the management account or an application account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentName",
      "The automation document's name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentVersion",
      "The version of the automation document to use at runtime.",
      [],
      false,
      false,
    ),
  ];
}
