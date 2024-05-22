import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiFeatureOnlineStoreFeatureviewSyncConfig {
  /*
Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.
To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
*/
  cron?: string;
}

export function vertex_AiFeatureOnlineStoreFeatureviewSyncConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cron",
      'Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.\nTo explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".',
      [],
      false,
      false,
    ),
  ];
}
