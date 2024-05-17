import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig {
  /*
Timeout for YARN graceful decommissioning of Node Managers. Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.
Bounds: [0s, 1d].
*/
  GracefulDecommissionTimeout?: string;

  /*
Fraction of average pending memory in the last cooldown period for which to
remove workers. A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.
Bounds: [0.0, 1.0].
*/
  ScaleDownFactor?: number;

  /*
Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.
For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.
Bounds: [0.0, 1.0]. Default: 0.0.
*/
  ScaleDownMinWorkerFraction?: number;

  /*
Fraction of average pending memory in the last cooldown period for which to
add workers. A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).
Bounds: [0.0, 1.0].
*/
  ScaleUpFactor?: number;

  /*
Minimum scale-up threshold as a fraction of total cluster size before scaling
occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.
Bounds: [0.0, 1.0]. Default: 0.0.
*/
  ScaleUpMinWorkerFraction?: number;
}

export function Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "GracefulDecommissionTimeout",
      "Timeout for YARN graceful decommissioning of Node Managers. Specifies the\nduration to wait for jobs to complete before forcefully removing workers\n(and potentially interrupting jobs). Only applicable to downscaling operations.\nBounds: [0s, 1d].",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ScaleDownFactor",
      "Fraction of average pending memory in the last cooldown period for which to\nremove workers. A scale-down factor of 1 will result in scaling down so that there\nis no available memory remaining after the update (more aggressive scaling).\nA scale-down factor of 0 disables removing workers, which can be beneficial for\nautoscaling a single job.\nBounds: [0.0, 1.0].",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ScaleDownMinWorkerFraction",
      "Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.\nFor example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must\nrecommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0\nmeans the autoscaler will scale down on any recommended change.\nBounds: [0.0, 1.0]. Default: 0.0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ScaleUpFactor",
      "Fraction of average pending memory in the last cooldown period for which to\nadd workers. A scale-up factor of 1.0 will result in scaling up so that there\nis no pending memory remaining after the update (more aggressive scaling).\nA scale-up factor closer to 0 will result in a smaller magnitude of scaling up\n(less aggressive scaling).\nBounds: [0.0, 1.0].",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ScaleUpMinWorkerFraction",
      "Minimum scale-up threshold as a fraction of total cluster size before scaling\noccurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler\nmust recommend at least a 2-worker scale-up for the cluster to scale. A threshold of\n0 means the autoscaler will scale up on any recommended change.\nBounds: [0.0, 1.0]. Default: 0.0.",
      [],
      false,
      false,
    ),
  ];
}
