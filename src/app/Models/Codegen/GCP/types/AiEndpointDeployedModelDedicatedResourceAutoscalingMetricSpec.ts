export interface AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec {
  /*
(Output)
The resource metric name. Supported metrics: - For Online Prediction: - `aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle` - `aiplatform.googleapis.com/prediction/online/cpu/utilization`
*/
  MetricName?: string;

  /*
(Output)
The target resource utilization in percentage (1%!)(MISSING) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%!!(MISSING))(MISSING) if not provided.
*/
  Target?: number;
}
