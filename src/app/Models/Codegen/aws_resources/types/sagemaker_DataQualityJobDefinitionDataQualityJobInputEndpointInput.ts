import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput {
  // An endpoint in customer's account which has `data_capture_config` enabled.
  endpointName?: string;

  // Path to the filesystem where the endpoint data is available to the container. Defaults to `/opt/ml/processing/input`.
  localPath?: string;

  // Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`. Valid values are `FullyReplicated` or `ShardedByS3Key`
  s3DataDistributionType?: string;

  // Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.  Valid values are `Pipe` or `File`
  s3InputMode?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3DataDistributionType",
      "Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`. Valid values are `FullyReplicated` or `ShardedByS3Key`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3InputMode",
      "Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.  Valid values are `Pipe` or `File`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointName",
      "An endpoint in customer's account which has `data_capture_config` enabled.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "Path to the filesystem where the endpoint data is available to the container. Defaults to `/opt/ml/processing/input`.",
      [],
      false,
      true,
    ),
  ];
}
