import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings';
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings_GetTypes,
} from './sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings';

export interface sagemaker_UserProfileUserSettingsCanvasAppSettings {
  // The model deployment settings for the SageMaker Canvas application. See Direct Deploy Settings below.
  directDeploySettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings;

  //
  generativeAiSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings;

  // The settings for connecting to an external data source with OAuth. See Identity Provider OAuth Settings below.
  identityProviderOauthSettings?: Array<sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting>;

  // The settings for document querying. See Kendra Settings below.
  kendraSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings;

  // The model registry settings for the SageMaker Canvas application. See Model Register Settings below.
  modelRegisterSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings;

  // Time series forecast settings for the Canvas app. See Time Series Forecasting Settings below.
  timeSeriesForecastingSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;

  // The workspace settings for the SageMaker Canvas application. See Workspace Settings below.
  workspaceSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings;
}

export function sagemaker_UserProfileUserSettingsCanvasAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'generativeAiSettings',
      '',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'identityProviderOauthSettings',
      'The settings for connecting to an external data source with OAuth. See Identity Provider OAuth Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'kendraSettings',
      'The settings for document querying. See Kendra Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsKendraSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'modelRegisterSettings',
      'The model registry settings for the SageMaker Canvas application. See Model Register Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsModelRegisterSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timeSeriesForecastingSettings',
      'Time series forecast settings for the Canvas app. See Time Series Forecasting Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'workspaceSettings',
      'The workspace settings for the SageMaker Canvas application. See Workspace Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsWorkspaceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'directDeploySettings',
      'The model deployment settings for the SageMaker Canvas application. See Direct Deploy Settings below.',
      () =>
        sagemaker_UserProfileUserSettingsCanvasAppSettingsDirectDeploySettings_GetTypes(),
      false,
      false,
    ),
  ];
}
