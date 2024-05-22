import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigateway_UsagePlanApiStageThrottle,
  apigateway_UsagePlanApiStageThrottle_GetTypes,
} from "./apigateway_UsagePlanApiStageThrottle";

export interface apigateway_UsagePlanApiStage {
  // API Id of the associated API stage in a usage plan.
  apiId?: string;

  // API stage name of the associated API stage in a usage plan.
  stage?: string;

  // The throttling limits of the usage plan.
  throttles?: Array<apigateway_UsagePlanApiStageThrottle>;
}

export function apigateway_UsagePlanApiStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiId",
      "API Id of the associated API stage in a usage plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stage",
      "API stage name of the associated API stage in a usage plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "throttles",
      "The throttling limits of the usage plan.",
      apigateway_UsagePlanApiStageThrottle_GetTypes(),
      false,
      false,
    ),
  ];
}
