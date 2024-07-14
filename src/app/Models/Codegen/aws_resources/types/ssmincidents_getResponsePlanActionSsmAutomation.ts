import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ssmincidents_getResponsePlanActionSsmAutomationParameter,
  ssmincidents_getResponsePlanActionSsmAutomationParameter_GetTypes,
} from "./ssmincidents_getResponsePlanActionSsmAutomationParameter";

export interface ssmincidents_getResponsePlanActionSsmAutomation {
  // The automation document's name.
  documentName?: string;

  // The version of the automation document to use at runtime.
  documentVersion?: string;

  // The key-value pair used to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
  dynamicParameters?: Map<string, string>;

  // The key-value pair parameters used when the automation document runs. The following values are supported:
  parameters?: Array<ssmincidents_getResponsePlanActionSsmAutomationParameter>;

  // The Amazon Resource Name (ARN) of the role that the automation document assumes when it runs commands.
  roleArn?: string;

  // The account that runs the automation document. This can be in either the management account or an application account.
  targetAccount?: string;
}

export function ssmincidents_getResponsePlanActionSsmAutomation_GetTypes(): DynamicUIProps[] {
  return [
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
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "dynamicParameters",
      "The key-value pair used to resolve dynamic parameter values when processing a Systems Manager Automation runbook.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "The key-value pair parameters used when the automation document runs. The following values are supported:",
      ssmincidents_getResponsePlanActionSsmAutomationParameter_GetTypes(),
      true,
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
      "The account that runs the automation document. This can be in either the management account or an application account.",
      [],
      true,
      false,
    ),
  ];
}
