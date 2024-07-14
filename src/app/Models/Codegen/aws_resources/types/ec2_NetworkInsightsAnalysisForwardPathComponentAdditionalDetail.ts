import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent,
  ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent";

export interface ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail {
  //
  additionalDetailType?: string;

  //
  components?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent>;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "additionalDetailType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetailComponent_GetTypes(),
      false,
      false,
    ),
  ];
}
