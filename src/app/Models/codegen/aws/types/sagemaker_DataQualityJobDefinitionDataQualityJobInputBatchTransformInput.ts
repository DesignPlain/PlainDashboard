import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat,
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat";

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput {
  // Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.  Valid values are `Pipe` or `File`
  s3InputMode?: string;

  // The Amazon S3 location being used to capture the data.
  dataCapturedDestinationS3Uri?: string;

  // The dataset format for your batch transform job. Fields are documented below.
  datasetFormat?: sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;

  // Path to the filesystem where the batch transform data is available to the container. Defaults to `/opt/ml/processing/input`.
  localPath?: string;

  // Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`. Valid values are `FullyReplicated` or `ShardedByS3Key`
  s3DataDistributionType?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3InputMode",
      "Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.  Valid values are `Pipe` or `File`",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataCapturedDestinationS3Uri",
      "The Amazon S3 location being used to capture the data.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "datasetFormat",
      "The dataset format for your batch transform job. Fields are documented below.",
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localPath",
      "Path to the filesystem where the batch transform data is available to the container. Defaults to `/opt/ml/processing/input`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3DataDistributionType",
      "Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`. Valid values are `FullyReplicated` or `ShardedByS3Key`",
      () => [],
      false,
      true,
    ),
  ];
}
