import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  m2_DeploymentTimeouts,
  m2_DeploymentTimeouts_GetTypes,
} from '../types/m2_DeploymentTimeouts';

export interface DeploymentArgs {
  // Start the application once deployed.
  start?: boolean;

  //
  timeouts?: m2_DeploymentTimeouts;

  // Application to deploy.
  applicationId?: string;

  // Version to application to deploy
  applicationVersion?: number;

  // Environment to deploy application to.
  environmentId?: string;

  //
  forceStop?: boolean;
}
export class Deployment extends DS_Resource {
  // Start the application once deployed.
  public start?: boolean;

  //
  public timeouts?: m2_DeploymentTimeouts;

  // Application to deploy.
  public applicationId?: string;

  // Version to application to deploy
  public applicationVersion?: number;

  //
  public deploymentId?: string;

  // Environment to deploy application to.
  public environmentId?: string;

  //
  public forceStop?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'applicationVersion',
        'Version to application to deploy',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'environmentId',
        'Environment to deploy application to.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceStop',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'start',
        'Start the application once deployed.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => m2_DeploymentTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'applicationId',
        'Application to deploy.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
