export interface AiEndpointDeployedModelDedicatedResourceMachineSpec {
  /*
(Output)
The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is `n1-standard-2`. For BatchPredictionJob or as part of WorkerPoolSpec this field is required. TODO(rsurowka): Try to better unify the required vs optional.
*/
  MachineType?: string;

  /*
(Output)
The number of accelerators to attach to the machine.
*/
  AcceleratorCount?: number;

  /*
(Output)
The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).
*/
  AcceleratorType?: string;
}
