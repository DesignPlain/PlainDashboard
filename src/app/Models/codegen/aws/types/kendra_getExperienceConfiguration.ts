import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_getExperienceConfigurationContentSourceConfiguration,
  kendra_getExperienceConfigurationContentSourceConfiguration_GetTypes,
} from './kendra_getExperienceConfigurationContentSourceConfiguration';
import {
  kendra_getExperienceConfigurationUserIdentityConfiguration,
  kendra_getExperienceConfigurationUserIdentityConfiguration_GetTypes,
} from './kendra_getExperienceConfigurationUserIdentityConfiguration';

export interface kendra_getExperienceConfiguration {
  // The identifiers of your data sources and FAQs. This is the content you want to use for your Amazon Kendra Experience. Documented below.
  contentSourceConfigurations?: Array<kendra_getExperienceConfigurationContentSourceConfiguration>;

  // The AWS SSO field name that contains the identifiers of your users, such as their emails. Documented below.
  userIdentityConfigurations?: Array<kendra_getExperienceConfigurationUserIdentityConfiguration>;
}

export function kendra_getExperienceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'contentSourceConfigurations',
      'The identifiers of your data sources and FAQs. This is the content you want to use for your Amazon Kendra Experience. Documented below.',
      () =>
        kendra_getExperienceConfigurationContentSourceConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userIdentityConfigurations',
      'The AWS SSO field name that contains the identifiers of your users, such as their emails. Documented below.',
      () =>
        kendra_getExperienceConfigurationUserIdentityConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
