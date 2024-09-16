import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange';

export interface ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader {
  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange>;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sourceAddresses',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sourcePortRanges',
      '',
      () =>
        ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destinationAddresses',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destinationPortRanges',
      '',
      () =>
        ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
