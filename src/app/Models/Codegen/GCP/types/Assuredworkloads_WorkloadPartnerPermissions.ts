import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Assuredworkloads_WorkloadPartnerPermissions {
  // Allow the partner to view inspectability logs and monitoring violations.
  DataLogsViewer?: boolean;

  // Optional. Allow partner to view access approval logs.
  ServiceAccessApprover?: boolean;

  // Optional. Allow partner to view violation alerts.
  AssuredWorkloadsMonitoring?: boolean;
}

export function Assuredworkloads_WorkloadPartnerPermissions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DataLogsViewer",
      "Allow the partner to view inspectability logs and monitoring violations.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ServiceAccessApprover",
      "Optional. Allow partner to view access approval logs.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AssuredWorkloadsMonitoring",
      "Optional. Allow partner to view violation alerts.",
      [],
      false,
      true,
    ),
  ];
}
