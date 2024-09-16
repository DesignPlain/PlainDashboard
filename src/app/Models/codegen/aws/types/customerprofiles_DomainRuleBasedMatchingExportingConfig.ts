import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting,
  customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting_GetTypes,
} from './customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting';

export interface customerprofiles_DomainRuleBasedMatchingExportingConfig {
  //
  s3Exporting?: customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting;
}

export function customerprofiles_DomainRuleBasedMatchingExportingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Exporting',
      '',
      () =>
        customerprofiles_DomainRuleBasedMatchingExportingConfigS3Exporting_GetTypes(),
      false,
      false,
    ),
  ];
}
