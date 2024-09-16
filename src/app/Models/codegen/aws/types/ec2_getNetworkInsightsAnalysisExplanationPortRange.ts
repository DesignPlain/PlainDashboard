import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getNetworkInsightsAnalysisExplanationPortRange {
  //
  from?: number;

  //
  to?: number;
}

export function ec2_getNetworkInsightsAnalysisExplanationPortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, 'to', '', () => [], true, false),
    new DynamicUIProps(InputType.Number, 'from', '', () => [], true, false),
  ];
}
