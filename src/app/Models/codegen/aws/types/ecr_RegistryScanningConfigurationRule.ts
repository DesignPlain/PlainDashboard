import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecr_RegistryScanningConfigurationRuleRepositoryFilter,
  ecr_RegistryScanningConfigurationRuleRepositoryFilter_GetTypes,
} from './ecr_RegistryScanningConfigurationRuleRepositoryFilter';

export interface ecr_RegistryScanningConfigurationRule {
  // One or more repository filter blocks, containing a `filter` (required string filtering repositories, see pattern regex [here](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ScanningRepositoryFilter.html)) and a `filter_type` (required string, currently only `WILDCARD` is supported).
  repositoryFilters?: Array<ecr_RegistryScanningConfigurationRuleRepositoryFilter>;

  // The frequency that scans are performed at for a private registry. Can be `SCAN_ON_PUSH`, `CONTINUOUS_SCAN`, or `MANUAL`.
  scanFrequency?: string;
}

export function ecr_RegistryScanningConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'scanFrequency',
      'The frequency that scans are performed at for a private registry. Can be `SCAN_ON_PUSH`, `CONTINUOUS_SCAN`, or `MANUAL`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'repositoryFilters',
      'One or more repository filter blocks, containing a `filter` (required string filtering repositories, see pattern regex [here](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ScanningRepositoryFilter.html)) and a `filter_type` (required string, currently only `WILDCARD` is supported).',
      () => ecr_RegistryScanningConfigurationRuleRepositoryFilter_GetTypes(),
      true,
      false,
    ),
  ];
}
