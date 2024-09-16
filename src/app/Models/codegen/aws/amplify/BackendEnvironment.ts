import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BackendEnvironmentArgs {
  // Unique ID for an Amplify app.
  appId?: string;

  // Name of deployment artifacts.
  deploymentArtifacts?: string;

  // Name for the backend environment.
  environmentName?: string;

  // AWS CloudFormation stack name of a backend environment.
  stackName?: string;
}
export class BackendEnvironment extends DS_Resource {
  // Unique ID for an Amplify app.
  public appId?: string;

  // ARN for a backend environment that is part of an Amplify app.
  public arn?: string;

  // Name of deployment artifacts.
  public deploymentArtifacts?: string;

  // Name for the backend environment.
  public environmentName?: string;

  // AWS CloudFormation stack name of a backend environment.
  public stackName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'appId',
        'Unique ID for an Amplify app.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deploymentArtifacts',
        'Name of deployment artifacts.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'environmentName',
        'Name for the backend environment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackName',
        'AWS CloudFormation stack name of a backend environment.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
