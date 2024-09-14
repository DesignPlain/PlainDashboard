import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_ClusterStepHadoopJarStep,
  emr_ClusterStepHadoopJarStep_GetTypes,
} from "./emr_ClusterStepHadoopJarStep";

export interface emr_ClusterStep {
  // Action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`
  actionOnFailure?: string;

  // JAR file used for the step. See below.
  hadoopJarStep?: emr_ClusterStepHadoopJarStep;

  // Name of the step.
  name?: string;
}

export function emr_ClusterStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "actionOnFailure",
      "Action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hadoopJarStep",
      "JAR file used for the step. See below.",
      () => emr_ClusterStepHadoopJarStep_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the step.",
      () => [],
      true,
      true,
    ),
  ];
}
