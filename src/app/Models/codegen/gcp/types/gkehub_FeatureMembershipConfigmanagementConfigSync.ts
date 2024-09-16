import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_FeatureMembershipConfigmanagementConfigSyncGit,
  gkehub_FeatureMembershipConfigmanagementConfigSyncGit_GetTypes,
} from './gkehub_FeatureMembershipConfigmanagementConfigSyncGit';
import {
  gkehub_FeatureMembershipConfigmanagementConfigSyncOci,
  gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes,
} from './gkehub_FeatureMembershipConfigmanagementConfigSyncOci';

export interface gkehub_FeatureMembershipConfigmanagementConfigSync {
  // Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
  sourceFormat?: string;

  // (Optional) Structure is documented below.
  git?: gkehub_FeatureMembershipConfigmanagementConfigSyncGit;

  // The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA.
  metricsGcpServiceAccountEmail?: string;

  /*
(Optional) Supported from ACM versions 1.12.0 onwards. Structure is documented below.

Use either `git` or `oci` config option.
*/
  oci?: gkehub_FeatureMembershipConfigmanagementConfigSyncOci;

  // Supported from ACM versions 1.10.0 onwards. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to "false", disables the Config Sync admission webhook and does not prevent drifts.
  preventDrift?: boolean;
}

export function gkehub_FeatureMembershipConfigmanagementConfigSync_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceFormat',
      'Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'git',
      '(Optional) Structure is documented below.',
      () => gkehub_FeatureMembershipConfigmanagementConfigSyncGit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'metricsGcpServiceAccountEmail',
      'The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oci',
      '(Optional) Supported from ACM versions 1.12.0 onwards. Structure is documented below.\n\nUse either `git` or `oci` config option.',
      () => gkehub_FeatureMembershipConfigmanagementConfigSyncOci_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'preventDrift',
      'Supported from ACM versions 1.10.0 onwards. Set to true to enable the Config Sync admission webhook to prevent drifts. If set to "false", disables the Config Sync admission webhook and does not prevent drifts.',
      () => [],
      false,
      false,
    ),
  ];
}
