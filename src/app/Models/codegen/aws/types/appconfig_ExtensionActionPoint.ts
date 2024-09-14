import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appconfig_ExtensionActionPointAction,
  appconfig_ExtensionActionPointAction_GetTypes,
} from "./appconfig_ExtensionActionPointAction";

export interface appconfig_ExtensionActionPoint {
  // An action defines the tasks the extension performs during the AppConfig workflow. Detailed below.
  actions?: Array<appconfig_ExtensionActionPointAction>;

  // The point at which to perform the defined actions. Valid points are `PRE_CREATE_HOSTED_CONFIGURATION_VERSION`, `PRE_START_DEPLOYMENT`, `ON_DEPLOYMENT_START`, `ON_DEPLOYMENT_STEP`, `ON_DEPLOYMENT_BAKING`, `ON_DEPLOYMENT_COMPLETE`, `ON_DEPLOYMENT_ROLLED_BACK`.
  point?: string;
}

export function appconfig_ExtensionActionPoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "An action defines the tasks the extension performs during the AppConfig workflow. Detailed below.",
      () => appconfig_ExtensionActionPointAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "point",
      "The point at which to perform the defined actions. Valid points are `PRE_CREATE_HOSTED_CONFIGURATION_VERSION`, `PRE_START_DEPLOYMENT`, `ON_DEPLOYMENT_START`, `ON_DEPLOYMENT_STEP`, `ON_DEPLOYMENT_BAKING`, `ON_DEPLOYMENT_COMPLETE`, `ON_DEPLOYMENT_ROLLED_BACK`.",
      () => [],
      true,
      false,
    ),
  ];
}
