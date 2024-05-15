import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget,
  Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes,
} from "./Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget";

export interface Dataform_RepositoryWorkflowConfigInvocationConfig {
  // Optional. When set to true, transitive dependents of included actions will be executed.
  TransitiveDependentsIncluded?: boolean;

  // Optional. When set to true, any incremental tables will be fully refreshed.
  FullyRefreshIncrementalTablesEnabled?: boolean;

  // Optional. The set of tags to include.
  IncludedTags?: Array<string>;

  /*
Optional. The set of action identifiers to include.
Structure is documented below.
*/
  IncludedTargets?: Array<Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget>;

  // Optional. The service account to run workflow invocations under.
  ServiceAccount?: string;

  // Optional. When set to true, transitive dependencies of included actions will be executed.
  TransitiveDependenciesIncluded?: boolean;
}

export function Dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "Optional. The service account to run workflow invocations under.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "TransitiveDependenciesIncluded",
      "Optional. When set to true, transitive dependencies of included actions will be executed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "TransitiveDependentsIncluded",
      "Optional. When set to true, transitive dependents of included actions will be executed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "FullyRefreshIncrementalTablesEnabled",
      "Optional. When set to true, any incremental tables will be fully refreshed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludedTags",
      "Optional. The set of tags to include.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "IncludedTargets",
      "Optional. The set of action identifiers to include.\nStructure is documented below.",
      Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
