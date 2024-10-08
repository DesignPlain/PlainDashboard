import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  customerprofiles_DomainMatchingExportingConfigS3Exporting,
  customerprofiles_DomainMatchingExportingConfigS3Exporting_GetTypes,
} from './customerprofiles_DomainMatchingExportingConfigS3Exporting';

export interface customerprofiles_DomainMatchingExportingConfig {
  //
  s3Exporting?: customerprofiles_DomainMatchingExportingConfigS3Exporting;
}

export function customerprofiles_DomainMatchingExportingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Exporting',
      '',
      () =>
        customerprofiles_DomainMatchingExportingConfigS3Exporting_GetTypes(),
      false,
      false,
    ),
  ];
}
