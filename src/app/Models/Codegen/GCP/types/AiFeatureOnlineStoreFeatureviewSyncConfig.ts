export interface AiFeatureOnlineStoreFeatureviewSyncConfig {
  /*
Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.
To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
*/
  Cron?: string;
}
