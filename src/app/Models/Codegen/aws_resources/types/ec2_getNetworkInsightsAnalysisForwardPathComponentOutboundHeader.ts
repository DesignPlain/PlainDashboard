import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange,
  ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader {
  //
  sourcePortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange>;

  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes(): DynamicUIProps[] {
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
      ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderDestinationPortRange_GetTypes(),
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
      ec2_getNetworkInsightsAnalysisForwardPathComponentOutboundHeaderSourcePortRange_GetTypes(),
      true,
      false,
    ),
  ];
}
