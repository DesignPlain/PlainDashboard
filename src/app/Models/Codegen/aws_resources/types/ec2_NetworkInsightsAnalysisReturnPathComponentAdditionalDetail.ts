import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent,
  ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent";

export interface ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail {
  //
  additionalDetailType?: string;

  //
  components?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent>;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes(): DynamicUIProps[] {
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
      ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetailComponent_GetTypes(),
      false,
      false,
    ),
  ];
}
