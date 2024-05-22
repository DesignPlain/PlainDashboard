import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_ExperienceConfigurationUserIdentityConfiguration,
  kendra_ExperienceConfigurationUserIdentityConfiguration_GetTypes,
} from "./kendra_ExperienceConfigurationUserIdentityConfiguration";
import {
  kendra_ExperienceConfigurationContentSourceConfiguration,
  kendra_ExperienceConfigurationContentSourceConfiguration_GetTypes,
} from "./kendra_ExperienceConfigurationContentSourceConfiguration";

export interface kendra_ExperienceConfiguration {
  // The identifiers of your data sources and FAQs. Or, you can specify that you want to use documents indexed via the `BatchPutDocument API`. The provider will only perform drift detection of its value when present in a configuration. Detailed below.
  contentSourceConfiguration?: kendra_ExperienceConfigurationContentSourceConfiguration;

  // The AWS SSO field name that contains the identifiers of your users, such as their emails. Detailed below.
  userIdentityConfiguration?: kendra_ExperienceConfigurationUserIdentityConfiguration;
}

export function kendra_ExperienceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "contentSourceConfiguration",
      "The identifiers of your data sources and FAQs. Or, you can specify that you want to use documents indexed via the `BatchPutDocument API`. The provider will only perform drift detection of its value when present in a configuration. Detailed below.",
      kendra_ExperienceConfigurationContentSourceConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "userIdentityConfiguration",
      "The AWS SSO field name that contains the identifiers of your users, such as their emails. Detailed below.",
      kendra_ExperienceConfigurationUserIdentityConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
