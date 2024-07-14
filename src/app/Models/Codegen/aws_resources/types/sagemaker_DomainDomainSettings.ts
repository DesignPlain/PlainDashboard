import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DomainDomainSettingsRStudioServerProDomainSettings,
  sagemaker_DomainDomainSettingsRStudioServerProDomainSettings_GetTypes,
} from "./sagemaker_DomainDomainSettingsRStudioServerProDomainSettings";

export interface sagemaker_DomainDomainSettings {
  // The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key [AWS Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html). Valid values are `USER_PROFILE_NAME` and `DISABLED`.
  executionRoleIdentityConfig?: string;

  // A collection of settings that configure the RStudioServerPro Domain-level app. see `r_studio_server_pro_domain_settings` Block below.
  rStudioServerProDomainSettings?: sagemaker_DomainDomainSettingsRStudioServerProDomainSettings;

  // The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.
  securityGroupIds?: Array<string>;
}

export function sagemaker_DomainDomainSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "executionRoleIdentityConfig",
      "The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key [AWS Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html). Valid values are `USER_PROFILE_NAME` and `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rStudioServerProDomainSettings",
      "A collection of settings that configure the RStudioServerPro Domain-level app. see `r_studio_server_pro_domain_settings` Block below.",
      sagemaker_DomainDomainSettingsRStudioServerProDomainSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
