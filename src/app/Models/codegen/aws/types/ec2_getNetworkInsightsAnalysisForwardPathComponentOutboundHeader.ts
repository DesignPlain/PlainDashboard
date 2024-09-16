import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange';
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes,
} from './ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange';

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader {
  //
  destinationPortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange>;

  //
  destinationAddresses?: Array<string>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'destinationPortRanges',
      '',
      () =>
        ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
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
        ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes(),
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
  ];
}
