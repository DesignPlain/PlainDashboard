export interface DatabaseInstanceSettingsLocationPreference {
  /*
A GAE application whose zone to remain
in. Must be in the same region as this instance.
*/
  FollowGaeApplication?: string;

  /*
The preferred Compute Engine zone for the secondary/failover.

The optional `settings.maintenance_window` subblock for instances declares a one-hour
[maintenance window](https://cloud.google.com/sql/docs/instance-settings?hl=en#maintenance-window-2ndgen)
when an Instance can automatically restart to apply updates. The maintenance window is specified in UTC time. It supports:
*/
  SecondaryZone?: string;

  /*
The preferred compute engine
[zone](https://cloud.google.com/compute/docs/zones?hl=en).
*/
  Zone?: string;
}
