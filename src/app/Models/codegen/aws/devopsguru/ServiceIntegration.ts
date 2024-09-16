import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  devopsguru_ServiceIntegrationKmsServerSideEncryption,
  devopsguru_ServiceIntegrationKmsServerSideEncryption_GetTypes,
} from '../types/devopsguru_ServiceIntegrationKmsServerSideEncryption';
import {
  devopsguru_ServiceIntegrationLogsAnomalyDetection,
  devopsguru_ServiceIntegrationLogsAnomalyDetection_GetTypes,
} from '../types/devopsguru_ServiceIntegrationLogsAnomalyDetection';
import {
  devopsguru_ServiceIntegrationOpsCenter,
  devopsguru_ServiceIntegrationOpsCenter_GetTypes,
} from '../types/devopsguru_ServiceIntegrationOpsCenter';

export interface ServiceIntegrationArgs {
  // Information about whether DevOps Guru is configured to encrypt server-side data using KMS. See `kms_server_side_encryption` below.
  kmsServerSideEncryption?: devopsguru_ServiceIntegrationKmsServerSideEncryption;

  // Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. See `logs_anomaly_detection` below.
  logsAnomalyDetection?: devopsguru_ServiceIntegrationLogsAnomalyDetection;

  // Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. See `ops_center` below.
  opsCenter?: devopsguru_ServiceIntegrationOpsCenter;
}
export class ServiceIntegration extends DS_Resource {
  // Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. See `logs_anomaly_detection` below.
  public logsAnomalyDetection?: devopsguru_ServiceIntegrationLogsAnomalyDetection;

  // Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. See `ops_center` below.
  public opsCenter?: devopsguru_ServiceIntegrationOpsCenter;

  // Information about whether DevOps Guru is configured to encrypt server-side data using KMS. See `kms_server_side_encryption` below.
  public kmsServerSideEncryption?: devopsguru_ServiceIntegrationKmsServerSideEncryption;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'kmsServerSideEncryption',
        'Information about whether DevOps Guru is configured to encrypt server-side data using KMS. See `kms_server_side_encryption` below.',
        () => devopsguru_ServiceIntegrationKmsServerSideEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logsAnomalyDetection',
        'Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups. See `logs_anomaly_detection` below.',
        () => devopsguru_ServiceIntegrationLogsAnomalyDetection_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'opsCenter',
        'Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight. See `ops_center` below.',
        () => devopsguru_ServiceIntegrationOpsCenter_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
