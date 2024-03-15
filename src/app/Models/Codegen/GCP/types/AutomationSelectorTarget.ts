export interface AutomationSelectorTarget {
  // ID of the `Target`. The value of this field could be one of the following: - The last segment of a target name. It only needs the ID to determine which target is being referred to - "-", all targets in a location.
  Id?: string;

  // Target labels.
  Labels?: Map<string, string>;
}
