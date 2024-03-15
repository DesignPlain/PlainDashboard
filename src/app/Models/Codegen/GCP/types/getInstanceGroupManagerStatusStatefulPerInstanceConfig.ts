export interface getInstanceGroupManagerStatusStatefulPerInstanceConfig {
  // A bit indicating if all of the group's per-instance configs (listed in the output of a listPerInstanceConfigs API call) have status EFFECTIVE or there are no per-instance-configs.
  AllEffective?: boolean;
}
