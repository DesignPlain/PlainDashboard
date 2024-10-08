import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange,
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange';

export interface ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader {
  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange>;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'destinationPortRanges',
      '',
      () =>
        ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange_GetTypes(),
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
        ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange_GetTypes(),
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
  ];
}
