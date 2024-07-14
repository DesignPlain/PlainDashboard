import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
  // Determines the format of the prefix, and whether it applies to the file name, file path, or both. Valid values are `FILENAME`, `PATH`, and `PATH_AND_FILENAME`.
  prefixType?: string;

  // Determines the level of granularity that's included in the prefix. Valid values are `YEAR`, `MONTH`, `DAY`, `HOUR`, and `MINUTE`.
  prefixFormat?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefixType",
      "Determines the format of the prefix, and whether it applies to the file name, file path, or both. Valid values are `FILENAME`, `PATH`, and `PATH_AND_FILENAME`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixFormat",
      "Determines the level of granularity that's included in the prefix. Valid values are `YEAR`, `MONTH`, `DAY`, `HOUR`, and `MINUTE`.",
      [],
      false,
      false,
    ),
  ];
}
