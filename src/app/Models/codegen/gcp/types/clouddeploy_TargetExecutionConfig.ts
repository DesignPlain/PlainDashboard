import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface clouddeploy_TargetExecutionConfig {
  // Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  artifactStorage?: string;

  // Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.
  executionTimeout?: string;

  // Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.
  serviceAccount?: string;

  // Required. Usages when this configuration should be applied.
  usages?: Array<string>;

  // Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.
  workerPool?: string;
}

export function clouddeploy_TargetExecutionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'executionTimeout',
      'Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccount',
      'Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'usages',
      'Required. Usages when this configuration should be applied.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'workerPool',
      'Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'artifactStorage',
      'Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.',
      () => [],
      false,
      false,
    ),
  ];
}
