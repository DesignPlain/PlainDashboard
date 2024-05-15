import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipConfigmanagementConfigSyncGit,
  Gkehub_FeatureMembershipConfigmanagementConfigSyncGit_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementConfigSyncGit";
import {
  Gkehub_FeatureMembershipConfigmanagementConfigSyncOci,
  Gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes,
} from "./Gkehub_FeatureMembershipConfigmanagementConfigSyncOci";

export interface Gkehub_FeatureMembershipConfigmanagementConfigSync {
  // (Optional) Structure is documented below.
  Git?: Gkehub_FeatureMembershipConfigmanagementConfigSyncGit;

  // The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA.
  MetricsGcpServiceAccountEmail?: string;

  /*
(Optional) Supported from ACM versions 1.12.0 onwards. Structure is documented below.

Use either `git` or `oci` config option.
*/
  Oci?: Gkehub_FeatureMembershipConfigmanagementConfigSyncOci;

  // Supported from ACM versions 1.10.0 onwards. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to "false", disables the Config Sync admission webhook and does not prevent drifts.
  PreventDrift?: boolean;

  // Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
  SourceFormat?: string;
}

export function Gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Oci",
      "(Optional) Supported from ACM versions 1.12.0 onwards. Structure is documented below.\n\nUse either `git` or `oci` config option.",
      Gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PreventDrift",
      'Supported from ACM versions 1.10.0 onwards. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to "false", disables the Config Sync admission webhook and does not prevent drifts.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceFormat",
      'Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Git",
      "(Optional) Structure is documented below.",
      Gkehub_FeatureMembershipConfigmanagementConfigSyncGit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MetricsGcpServiceAccountEmail",
      "The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA.",
      [],
      false,
      false,
    ),
  ];
}
