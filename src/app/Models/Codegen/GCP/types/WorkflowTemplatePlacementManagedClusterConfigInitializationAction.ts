export interface WorkflowTemplatePlacementManagedClusterConfigInitializationAction {
  // Required. Cloud Storage URI of executable file.
  ExecutableFile?: string;

  // Amount of time executable has to complete. Default is 10 minutes (see JSON representation of (https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
  ExecutionTimeout?: string;
}
