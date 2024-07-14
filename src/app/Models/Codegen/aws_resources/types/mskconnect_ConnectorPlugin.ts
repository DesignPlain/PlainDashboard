import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mskconnect_ConnectorPluginCustomPlugin,
  mskconnect_ConnectorPluginCustomPlugin_GetTypes,
} from "./mskconnect_ConnectorPluginCustomPlugin";

export interface mskconnect_ConnectorPlugin {
  // Details about a custom plugin. See below.
  customPlugin?: mskconnect_ConnectorPluginCustomPlugin;
}

export function mskconnect_ConnectorPlugin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customPlugin",
      "Details about a custom plugin. See below.",
      mskconnect_ConnectorPluginCustomPlugin_GetTypes(),
      true,
      true,
    ),
  ];
}
