import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_WorkerPoolWorkerConfig {
  // Size of the disk attached to the worker, in GB. See (https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.
  diskSizeGb?: number;

  // Machine type of a worker, such as `n1-standard-1`. See (https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.
  machineType?: string;

  // If true, workers are created without any public address, which prevents network egress to public IPs.
  noExternalIp?: boolean;
}

export function cloudbuild_WorkerPoolWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "diskSizeGb",
      "Size of the disk attached to the worker, in GB. See (https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). Specify a value of up to 1000. If `0` is specified, Cloud Build will use a standard disk size.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "Machine type of a worker, such as `n1-standard-1`. See (https://cloud.google.com/cloud-build/docs/custom-workers/worker-pool-config-file). If left blank, Cloud Build will use `n1-standard-1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noExternalIp",
      "If true, workers are created without any public address, which prevents network egress to public IPs.",
      [],
      false,
      false,
    ),
  ];
}
