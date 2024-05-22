import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  guardduty_DetectorDatasourcesKubernetesAuditLogs,
  guardduty_DetectorDatasourcesKubernetesAuditLogs_GetTypes,
} from "./guardduty_DetectorDatasourcesKubernetesAuditLogs";

export interface guardduty_DetectorDatasourcesKubernetes {
  /*
Configures Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).
See Kubernetes Audit Logs below for more details.
*/
  auditLogs?: guardduty_DetectorDatasourcesKubernetesAuditLogs;
}

export function guardduty_DetectorDatasourcesKubernetes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "auditLogs",
      "Configures Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html).\nSee Kubernetes Audit Logs below for more details.",
      guardduty_DetectorDatasourcesKubernetesAuditLogs_GetTypes(),
      true,
      false,
    ),
  ];
}
