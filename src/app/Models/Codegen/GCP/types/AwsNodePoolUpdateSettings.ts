import { AwsNodePoolUpdateSettingsSurgeSettings } from "./AwsNodePoolUpdateSettingsSurgeSettings";

export interface AwsNodePoolUpdateSettings {
  // Optional. Settings for surge update.
  SurgeSettings?: AwsNodePoolUpdateSettingsSurgeSettings;
}
