import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings";
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting";

export interface sagemaker_DomainDefaultUserSettingsCanvasAppSettings {
  // The model registry settings for the SageMaker Canvas application. See `model_register_settings` Block below.
  modelRegisterSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings;

  // Time series forecast settings for the Canvas app. See `time_series_forecasting_settings` Block below.
  timeSeriesForecastingSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;

  // The workspace settings for the SageMaker Canvas application. See `workspace_settings` Block below.
  workspaceSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings;

  // The model deployment settings for the SageMaker Canvas application. See `direct_deploy_settings` Block below.
  directDeploySettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings;

  //
  generativeAiSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings;

  // The settings for connecting to an external data source with OAuth. See `identity_provider_oauth_settings` Block below.
  identityProviderOauthSettings?: Array<sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting>;

  // The settings for document querying. See `kendra_settings` Block below.
  kendraSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings;
}

export function sagemaker_DomainDefaultUserSettingsCanvasAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "modelRegisterSettings",
      "The model registry settings for the SageMaker Canvas application. See `model_register_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeSeriesForecastingSettings",
      "Time series forecast settings for the Canvas app. See `time_series_forecasting_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "workspaceSettings",
      "The workspace settings for the SageMaker Canvas application. See `workspace_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "directDeploySettings",
      "The model deployment settings for the SageMaker Canvas application. See `direct_deploy_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "generativeAiSettings",
      "",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "identityProviderOauthSettings",
      "The settings for connecting to an external data source with OAuth. See `identity_provider_oauth_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSetting_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kendraSettings",
      "The settings for document querying. See `kendra_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsCanvasAppSettingsKendraSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
