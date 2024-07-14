import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_DetectorDatasourcesS3Logs,
  guardduty_DetectorDatasourcesS3Logs_GetTypes,
} from "./guardduty_DetectorDatasourcesS3Logs";
import {
  guardduty_DetectorDatasourcesKubernetes,
  guardduty_DetectorDatasourcesKubernetes_GetTypes,
} from "./guardduty_DetectorDatasourcesKubernetes";
import {
  guardduty_DetectorDatasourcesMalwareProtection,
  guardduty_DetectorDatasourcesMalwareProtection_GetTypes,
} from "./guardduty_DetectorDatasourcesMalwareProtection";

export interface guardduty_DetectorDatasources {
  /*
Configures [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).
See S3 Logs below for more details.
*/
  s3Logs?: guardduty_DetectorDatasourcesS3Logs;

  /*
Configures [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).
See Kubernetes and Kubernetes Audit Logs below for more details.
*/
  kubernetes?: guardduty_DetectorDatasourcesKubernetes;

  /*
Configures [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html).
See Malware Protection, Scan EC2 instance with findings and EBS volumes below for more details.

The `datasources` block is deprecated since March 2023. Use the `features` block instead and [map each `datasources` block to the corresponding `features` block](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-feature-object-api-changes-march2023.html#guardduty-feature-enablement-datasource-relation).
*/
  malwareProtection?: guardduty_DetectorDatasourcesMalwareProtection;
}

export function guardduty_DetectorDatasources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Logs",
      "Configures [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html).\nSee S3 Logs below for more details.",
      guardduty_DetectorDatasourcesS3Logs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kubernetes",
      "Configures [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).\nSee Kubernetes and Kubernetes Audit Logs below for more details.",
      guardduty_DetectorDatasourcesKubernetes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "malwareProtection",
      "Configures [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html).\nSee Malware Protection, Scan EC2 instance with findings and EBS volumes below for more details.\n\nThe `datasources` block is deprecated since March 2023. Use the `features` block instead and [map each `datasources` block to the corresponding `features` block](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-feature-object-api-changes-march2023.html#guardduty-feature-enablement-datasource-relation).",
      guardduty_DetectorDatasourcesMalwareProtection_GetTypes(),
      false,
      false,
    ),
  ];
}
