import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  amp_ScraperSourceEks,
  amp_ScraperSourceEks_GetTypes,
} from './amp_ScraperSourceEks';

export interface amp_ScraperSource {
  // Configuration block for an EKS cluster source. See `eks`.
  eks?: amp_ScraperSourceEks;
}

export function amp_ScraperSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'eks',
      'Configuration block for an EKS cluster source. See `eks`.',
      () => amp_ScraperSourceEks_GetTypes(),
      false,
      false,
    ),
  ];
}
