export interface DeliveryPipelineConditionTargetsPresentCondition {
  // True if there aren't any missing Targets.
  Status?: boolean;

  // Output only. Most recent time at which the pipeline was updated.
  UpdateTime?: string;

  // The list of Target names that are missing. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.
  MissingTargets?: Array<string>;
}
