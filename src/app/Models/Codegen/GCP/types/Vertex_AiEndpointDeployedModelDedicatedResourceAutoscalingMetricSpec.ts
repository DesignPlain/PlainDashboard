import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec {
  /*
(Output)
The target resource utilization in percentage (1%!)(MISSING) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%!!(MISSING))(MISSING) if not provided.
*/
  target?: number;

  /*
(Output)
The resource metric name. Supported metrics: - For Online Prediction: - `aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle` - `aiplatform.googleapis.com/prediction/online/cpu/utilization`
*/
  metricName?: string;
}

export function vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "target",
      "(Output)\nThe target resource utilization in percentage (1%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%!)(MISSING) if not provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricName",
      "(Output)\nThe resource metric name. Supported metrics: * For Online Prediction: * `aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle` * `aiplatform.googleapis.com/prediction/online/cpu/utilization`",
      [],
      false,
      false,
    ),
  ];
}
