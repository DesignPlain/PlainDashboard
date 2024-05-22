import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec,
  vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec_GetTypes,
} from "./vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec";
import {
  vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec,
  vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec_GetTypes,
} from "./vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec";

export interface vertex_AiEndpointDeployedModelDedicatedResource {
  /*
(Output)
The metric specifications that overrides a resource utilization metric (CPU utilization, accelerator's duty cycle, and so on) target value (default to 60 if not set). At most one entry is allowed per metric. If machine_spec.accelerator_count is above 0, the autoscaling will be based on both CPU utilization and accelerator's duty cycle metrics and scale up when either metrics exceeds its target value while scale down if both metrics are under their target value. The default target value is 60 for both metrics. If machine_spec.accelerator_count is 0, the autoscaling will be based on CPU utilization metric only with default target value 60 if not explicitly set. For example, in the case of Online Prediction, if you want to override target CPU utilization to 80, you should set autoscaling_metric_specs.metric_name to `aiplatform.googleapis.com/prediction/online/cpu/utilization` and autoscaling_metric_specs.target to `80`.
Structure is documented below.
*/
  autoscalingMetricSpecs?: Array<vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec>;

  /*
(Output)
The specification of a single machine used by the prediction.
Structure is documented below.
*/
  machineSpecs?: Array<vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec>;

  /*
(Output)
The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.
*/
  maxReplicaCount?: number;

  /*
(Output)
The minimum number of replicas this DeployedModel will be always deployed on. If traffic against it increases, it may dynamically be deployed onto more replicas up to max_replica_count, and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.
*/
  minReplicaCount?: number;
}

export function vertex_AiEndpointDeployedModelDedicatedResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxReplicaCount",
      "(Output)\nThe maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minReplicaCount",
      "(Output)\nThe minimum number of replicas this DeployedModel will be always deployed on. If traffic against it increases, it may dynamically be deployed onto more replicas up to max_replica_count, and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autoscalingMetricSpecs",
      "(Output)\nThe metric specifications that overrides a resource utilization metric (CPU utilization, accelerator's duty cycle, and so on) target value (default to 60 if not set). At most one entry is allowed per metric. If machine_spec.accelerator_count is above 0, the autoscaling will be based on both CPU utilization and accelerator's duty cycle metrics and scale up when either metrics exceeds its target value while scale down if both metrics are under their target value. The default target value is 60 for both metrics. If machine_spec.accelerator_count is 0, the autoscaling will be based on CPU utilization metric only with default target value 60 if not explicitly set. For example, in the case of Online Prediction, if you want to override target CPU utilization to 80, you should set autoscaling_metric_specs.metric_name to `aiplatform.googleapis.com/prediction/online/cpu/utilization` and autoscaling_metric_specs.target to `80`.\nStructure is documented below.",
      vertex_AiEndpointDeployedModelDedicatedResourceAutoscalingMetricSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "machineSpecs",
      "(Output)\nThe specification of a single machine used by the prediction.\nStructure is documented below.",
      vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
