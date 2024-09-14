import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs,
  guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs_GetTypes,
} from "./guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs";

export interface guardduty_OrganizationConfigurationDatasourcesKubernetes {
  /*
Enable Kubernetes Audit Logs Monitoring automatically for new member accounts. [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).
See Kubernetes Audit Logs below for more details.
*/
  auditLogs?: guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs;
}

export function guardduty_OrganizationConfigurationDatasourcesKubernetes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "auditLogs",
      "Enable Kubernetes Audit Logs Monitoring automatically for new member accounts. [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).\nSee Kubernetes Audit Logs below for more details.",
      () =>
        guardduty_OrganizationConfigurationDatasourcesKubernetesAuditLogs_GetTypes(),
      true,
      false,
    ),
  ];
}
