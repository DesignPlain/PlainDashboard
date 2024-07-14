import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange,
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader {
  //
  destinationPortRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange>;

  //
  protocol?: string;

  //
  sourceAddresses?: Array<string>;

  //
  sourcePortRanges?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange>;

  //
  destinationAddresses?: Array<string>;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "sourcePortRanges",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderSourcePortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationAddresses",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationPortRanges",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeaderDestinationPortRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "protocol", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "sourceAddresses",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
