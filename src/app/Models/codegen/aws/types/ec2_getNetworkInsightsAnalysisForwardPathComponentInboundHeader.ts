import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange';
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange';

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader {
  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sourceAddresses',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sourcePortRanges',
      '',
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderSourcePortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destinationAddresses',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destinationPortRanges',
      '',
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentInboundHeaderDestinationPortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
  ];
}
