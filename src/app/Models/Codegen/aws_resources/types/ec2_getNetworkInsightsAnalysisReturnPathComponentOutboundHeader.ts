import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader {
  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange>;

  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange>;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinationAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationPortRanges",
      "",
      ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "sourceAddresses",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourcePortRanges",
      "",
      ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange_GetTypes(),
      true,
      false,
    ),
  ];
}
