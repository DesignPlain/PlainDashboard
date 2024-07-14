import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_OrganizationConfigurationDatasourcesKubernetes,
  guardduty_OrganizationConfigurationDatasourcesKubernetes_GetTypes,
} from "./guardduty_OrganizationConfigurationDatasourcesKubernetes";
import {
  guardduty_OrganizationConfigurationDatasourcesMalwareProtection,
  guardduty_OrganizationConfigurationDatasourcesMalwareProtection_GetTypes,
} from "./guardduty_OrganizationConfigurationDatasourcesMalwareProtection";
import {
  guardduty_OrganizationConfigurationDatasourcesS3Logs,
  guardduty_OrganizationConfigurationDatasourcesS3Logs_GetTypes,
} from "./guardduty_OrganizationConfigurationDatasourcesS3Logs";

export interface guardduty_OrganizationConfigurationDatasources {
  // Enable Kubernetes Audit Logs Monitoring automatically for new member accounts.
  kubernetes?: guardduty_OrganizationConfigurationDatasourcesKubernetes;

  // Enable Malware Protection automatically for new member accounts.
  malwareProtection?: guardduty_OrganizationConfigurationDatasourcesMalwareProtection;

  // Enable S3 Protection automatically for new member accounts.
  s3Logs?: guardduty_OrganizationConfigurationDatasourcesS3Logs;
}

export function guardduty_OrganizationConfigurationDatasources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kubernetes",
      "Enable Kubernetes Audit Logs Monitoring automatically for new member accounts.",
      guardduty_OrganizationConfigurationDatasourcesKubernetes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "malwareProtection",
      "Enable Malware Protection automatically for new member accounts.",
      guardduty_OrganizationConfigurationDatasourcesMalwareProtection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Logs",
      "Enable S3 Protection automatically for new member accounts.",
      guardduty_OrganizationConfigurationDatasourcesS3Logs_GetTypes(),
      false,
      false,
    ),
  ];
}
