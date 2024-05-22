import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface assuredworkloads_WorkloadPartnerPermissions {
  // Optional. Allow partner to view violation alerts.
  assuredWorkloadsMonitoring?: boolean;

  // Allow the partner to view inspectability logs and monitoring violations.
  dataLogsViewer?: boolean;

  // Optional. Allow partner to view access approval logs.
  serviceAccessApprover?: boolean;
}

export function assuredworkloads_WorkloadPartnerPermissions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "assuredWorkloadsMonitoring",
      "Optional. Allow partner to view violation alerts.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dataLogsViewer",
      "Allow the partner to view inspectability logs and monitoring violations.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "serviceAccessApprover",
      "Optional. Allow partner to view access approval logs.",
      [],
      false,
      true,
    ),
  ];
}
