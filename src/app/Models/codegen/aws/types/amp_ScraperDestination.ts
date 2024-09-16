import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  amp_ScraperDestinationAmp,
  amp_ScraperDestinationAmp_GetTypes,
} from './amp_ScraperDestinationAmp';

export interface amp_ScraperDestination {
  // Configuration block for an Amazon Managed Prometheus workspace destination. See `amp`.
  amp?: amp_ScraperDestinationAmp;
}

export function amp_ScraperDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'amp',
      'Configuration block for an Amazon Managed Prometheus workspace destination. See `amp`.',
      () => amp_ScraperDestinationAmp_GetTypes(),
      false,
      false,
    ),
  ];
}
