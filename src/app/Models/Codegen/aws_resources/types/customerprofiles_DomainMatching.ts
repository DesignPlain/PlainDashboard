import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  customerprofiles_DomainMatchingAutoMerging,
  customerprofiles_DomainMatchingAutoMerging_GetTypes,
} from "./customerprofiles_DomainMatchingAutoMerging";
import {
  customerprofiles_DomainMatchingExportingConfig,
  customerprofiles_DomainMatchingExportingConfig_GetTypes,
} from "./customerprofiles_DomainMatchingExportingConfig";
import {
  customerprofiles_DomainMatchingJobSchedule,
  customerprofiles_DomainMatchingJobSchedule_GetTypes,
} from "./customerprofiles_DomainMatchingJobSchedule";

export interface customerprofiles_DomainMatching {
  // A block that specifies the configuration about the auto-merging process. Documented below.
  autoMerging?: customerprofiles_DomainMatchingAutoMerging;

  // The flag that enables the matching process of duplicate profiles.
  enabled?: boolean;

  // A block that specifies the configuration for exporting Identity Resolution results. Documented below.
  exportingConfig?: customerprofiles_DomainMatchingExportingConfig;

  // A block that specifies the day and time when you want to start the Identity Resolution Job every week. Documented below.
  jobSchedule?: customerprofiles_DomainMatchingJobSchedule;
}

export function customerprofiles_DomainMatching_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jobSchedule",
      "A block that specifies the day and time when you want to start the Identity Resolution Job every week. Documented below.",
      customerprofiles_DomainMatchingJobSchedule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoMerging",
      "A block that specifies the configuration about the auto-merging process. Documented below.",
      customerprofiles_DomainMatchingAutoMerging_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "The flag that enables the matching process of duplicate profiles.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exportingConfig",
      "A block that specifies the configuration for exporting Identity Resolution results. Documented below.",
      customerprofiles_DomainMatchingExportingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
