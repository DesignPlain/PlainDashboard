import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration,
  apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration_GetTypes,
} from './apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration';
import {
  apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion,
  apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion_GetTypes,
} from './apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion';

export interface apprunner_ServiceSourceConfigurationCodeRepository {
  // Configuration for building and running the service from a source code repository. See Code Configuration below for more details.
  codeConfiguration?: apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration;

  // Location of the repository that contains the source code.
  repositoryUrl?: string;

  // Version that should be used within the source code repository. See Source Code Version below for more details.
  sourceCodeVersion?: apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion;

  // The path of the directory that stores source code and configuration files. The build and start commands also execute from here. The path is absolute from root and, if not specified, defaults to the repository root.
  sourceDirectory?: string;
}

export function apprunner_ServiceSourceConfigurationCodeRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceDirectory',
      'The path of the directory that stores source code and configuration files. The build and start commands also execute from here. The path is absolute from root and, if not specified, defaults to the repository root.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'codeConfiguration',
      'Configuration for building and running the service from a source code repository. See Code Configuration below for more details.',
      () =>
        apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repositoryUrl',
      'Location of the repository that contains the source code.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sourceCodeVersion',
      'Version that should be used within the source code repository. See Source Code Version below for more details.',
      () =>
        apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion_GetTypes(),
      true,
      false,
    ),
  ];
}
