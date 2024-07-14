import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec {
  /*
(Output)
The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is `n1-standard-2`. For BatchPredictionJob or as part of WorkerPoolSpec this field is required. TODO(rsurowka): Try to better unify the required vs optional.
*/
  machineType?: string;

  /*
(Output)
The number of accelerators to attach to the machine.
*/
  acceleratorCount?: number;

  /*
(Output)
The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).
*/
  acceleratorType?: string;
}

export function vertex_AiEndpointDeployedModelDedicatedResourceMachineSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "(Output)\nThe type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is `n1-standard-2`. For BatchPredictionJob or as part of WorkerPoolSpec this field is required. TODO(rsurowka): Try to better unify the required vs optional.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "acceleratorCount",
      "(Output)\nThe number of accelerators to attach to the machine.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "(Output)\nThe type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).",
      [],
      false,
      false,
    ),
  ];
}
