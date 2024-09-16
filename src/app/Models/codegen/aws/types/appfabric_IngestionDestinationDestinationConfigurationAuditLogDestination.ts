import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket,
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket_GetTypes,
} from './appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket';
import {
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream,
  appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream_GetTypes,
} from './appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream';

export interface appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination {
  // Contains information about an Amazon S3 bucket.
  s3Bucket?: appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;

  // Contains information about an Amazon Data Firehose delivery stream.
  firehoseStream?: appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;
}

export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Bucket',
      'Contains information about an Amazon S3 bucket.',
      () =>
        appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'firehoseStream',
      'Contains information about an Amazon Data Firehose delivery stream.',
      () =>
        appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream_GetTypes(),
      false,
      false,
    ),
  ];
}
