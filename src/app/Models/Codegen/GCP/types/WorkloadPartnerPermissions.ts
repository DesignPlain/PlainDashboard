export interface WorkloadPartnerPermissions {
  // Allow the partner to view inspectability logs and monitoring violations.
  DataLogsViewer?: boolean;

  // Optional. Allow partner to view access approval logs.
  ServiceAccessApprover?: boolean;

  // Optional. Allow partner to view violation alerts.
  AssuredWorkloadsMonitoring?: boolean;
}
