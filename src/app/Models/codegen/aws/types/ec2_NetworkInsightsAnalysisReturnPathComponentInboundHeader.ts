import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange';
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange_GetTypes,
} from './ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange';

export interface ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader {
  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange>;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes(): DynamicUIProps[] {
  return [
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
        ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange_GetTypes(),
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
        ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange_GetTypes(),
      false,
      false,
    ),
  ];
}
