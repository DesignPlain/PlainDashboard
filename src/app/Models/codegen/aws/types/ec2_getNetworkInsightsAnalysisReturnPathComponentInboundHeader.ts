import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange,
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader {
  //
  destinationAddresses?: Array<string>;

  //
  destinationPortRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange>;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinationAddresses",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationPortRanges",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderDestinationPortRange_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "sourceAddresses",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourcePortRanges",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeaderSourcePortRange_GetTypes(),
      true,
      false,
    ),
  ];
}
