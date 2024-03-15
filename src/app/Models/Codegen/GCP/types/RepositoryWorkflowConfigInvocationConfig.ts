import { RepositoryWorkflowConfigInvocationConfigIncludedTarget } from "./RepositoryWorkflowConfigInvocationConfigIncludedTarget";

export interface RepositoryWorkflowConfigInvocationConfig {
  // Optional. When set to true, any incremental tables will be fully refreshed.
  FullyRefreshIncrementalTablesEnabled?: boolean;

  // Optional. The set of tags to include.
  IncludedTags?: Array<string>;

  /*
Optional. The set of action identifiers to include.
Structure is documented below.
*/
  IncludedTargets?: Array<RepositoryWorkflowConfigInvocationConfigIncludedTarget>;

  // Optional. The service account to run workflow invocations under.
  ServiceAccount?: string;

  // Optional. When set to true, transitive dependencies of included actions will be executed.
  TransitiveDependenciesIncluded?: boolean;

  // Optional. When set to true, transitive dependents of included actions will be executed.
  TransitiveDependentsIncluded?: boolean;
}
