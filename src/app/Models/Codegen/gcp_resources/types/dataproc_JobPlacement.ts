import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_JobPlacement {
  // The name of the cluster where the job will be submitted
  clusterName?: string;

  // Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted
  clusterUuid?: string;
}

export function dataproc_JobPlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterName",
      "The name of the cluster where the job will be submitted",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterUuid",
      "Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted",
      [],
      false,
      false,
    ),
  ];
}