import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetReputationOptions {
  // If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.
  reputationMetricsEnabled?: boolean;

  // The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.
  lastFreshStart?: string;
}

export function sesv2_ConfigurationSetReputationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "reputationMetricsEnabled",
      "If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastFreshStart",
      "The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.",
      [],
      false,
      false,
    ),
  ];
}
