import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable {
  // Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.
  projectId?: string;

  // Name of the secret in secret manager (not the full resource name).
  secret?: string;

  // Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.
  version?: string;

  // Name of the environment variable.
  key?: string;
}

export function cloudfunctionsv2_FunctionServiceConfigSecretEnvironmentVariable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'projectId',
      "Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secret',
      'Name of the secret in secret manager (not the full resource name).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      "Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Name of the environment variable.',
      () => [],
      true,
      false,
    ),
  ];
}
