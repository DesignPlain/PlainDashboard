import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_getConfigurationSetReputationOption {
  // The date and time (in Unix time) when the reputation metrics were last given a fresh start.
  lastFreshStart?: string;

  // Specifies whether tracking of reputation metrics is enabled.
  reputationMetricsEnabled?: boolean;
}

export function sesv2_getConfigurationSetReputationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastFreshStart",
      "The date and time (in Unix time) when the reputation metrics were last given a fresh start.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "reputationMetricsEnabled",
      "Specifies whether tracking of reputation metrics is enabled.",
      [],
      true,
      false,
    ),
  ];
}
