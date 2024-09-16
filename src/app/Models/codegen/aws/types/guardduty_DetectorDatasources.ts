import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  guardduty_DetectorDatasourcesKubernetes,
  guardduty_DetectorDatasourcesKubernetes_GetTypes,
} from './guardduty_DetectorDatasourcesKubernetes';
import {
  guardduty_DetectorDatasourcesMalwareProtection,
  guardduty_DetectorDatasourcesMalwareProtection_GetTypes,
} from './guardduty_DetectorDatasourcesMalwareProtection';
import {
  guardduty_DetectorDatasourcesS3Logs,
  guardduty_DetectorDatasourcesS3Logs_GetTypes,
} from './guardduty_DetectorDatasourcesS3Logs';

export interface guardduty_DetectorDatasources {
  /*
Configures [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).
See Kubernetes and Kubernetes Audit Logs below for more details.
*/
  kubernetes?: guardduty_DetectorDatasourcesKubernetes;

  /*
Configures [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html).
See Malware Protection, Scan EC2 instance with findings and EBS volumes below for more details.
*/
  malwareProtection?: guardduty_DetectorDatasourcesMalwareProtection;

  /*
Configures [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).
See S3 Logs below for more details.
*/
  s3Logs?: guardduty_DetectorDatasourcesS3Logs;
}

export function guardduty_DetectorDatasources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'kubernetes',
      'Configures [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).\nSee Kubernetes and Kubernetes Audit Logs below for more details.',
      () => guardduty_DetectorDatasourcesKubernetes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'malwareProtection',
      'Configures [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html).\nSee Malware Protection, Scan EC2 instance with findings and EBS volumes below for more details.',
      () => guardduty_DetectorDatasourcesMalwareProtection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3Logs',
      'Configures [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).\nSee S3 Logs below for more details.',
      () => guardduty_DetectorDatasourcesS3Logs_GetTypes(),
      false,
      false,
    ),
  ];
}
