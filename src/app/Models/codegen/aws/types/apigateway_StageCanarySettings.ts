import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_StageCanarySettings {
  // Percent `0.0` - `100.0` of traffic to divert to the canary deployment.
  percentTraffic?: number;

  // Map of overridden stage `variables` (including new variables) for the canary deployment.
  stageVariableOverrides?: Map<string, string>;

  // Whether the canary deployment uses the stage cache. Defaults to false.
  useStageCache?: boolean;
}

export function apigateway_StageCanarySettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'percentTraffic',
      'Percent `0.0` - `100.0` of traffic to divert to the canary deployment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'stageVariableOverrides',
      'Map of overridden stage `variables` (including new variables) for the canary deployment.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useStageCache',
      'Whether the canary deployment uses the stage cache. Defaults to false.',
      () => [],
      false,
      false,
    ),
  ];
}
