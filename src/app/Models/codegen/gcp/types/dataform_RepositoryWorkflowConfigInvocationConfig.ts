import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget,
  dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes,
} from './dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget';

export interface dataform_RepositoryWorkflowConfigInvocationConfig {
  // Optional. When set to true, any incremental tables will be fully refreshed.
  fullyRefreshIncrementalTablesEnabled?: boolean;

  // Optional. The set of tags to include.
  includedTags?: Array<string>;

  /*
Optional. The set of action identifiers to include.
Structure is documented below.
*/
  includedTargets?: Array<dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget>;

  // Optional. The service account to run workflow invocations under.
  serviceAccount?: string;

  // Optional. When set to true, transitive dependencies of included actions will be executed.
  transitiveDependenciesIncluded?: boolean;

  // Optional. When set to true, transitive dependents of included actions will be executed.
  transitiveDependentsIncluded?: boolean;
}

export function dataform_RepositoryWorkflowConfigInvocationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'includedTags',
      'Optional. The set of tags to include.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'includedTargets',
      'Optional. The set of action identifiers to include.\nStructure is documented below.',
      () =>
        dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccount',
      'Optional. The service account to run workflow invocations under.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'transitiveDependenciesIncluded',
      'Optional. When set to true, transitive dependencies of included actions will be executed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'transitiveDependentsIncluded',
      'Optional. When set to true, transitive dependents of included actions will be executed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'fullyRefreshIncrementalTablesEnabled',
      'Optional. When set to true, any incremental tables will be fully refreshed.',
      () => [],
      false,
      false,
    ),
  ];
}
