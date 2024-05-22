import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent,
  ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent";

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail {
  //
  additionalDetailType?: string;

  //
  components?: Array<ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent>;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "additionalDetailType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      ec2_getNetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes(),
      true,
      false,
    ),
  ];
}
