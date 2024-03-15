export interface getDatabaseInstanceSettingLocationPreference {
  // A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  FollowGaeApplication?: string;

  // The preferred Compute Engine zone for the secondary/failover
  SecondaryZone?: string;

  // The preferred compute engine zone.
  Zone?: string;
}
