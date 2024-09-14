import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface firebase_ExtensionsInstanceConfig {
  // Environment variables that may be configured for the Extension
  params?: Map<string, string>;

  /*
Params whose values are only available at deployment time.
Unlike other params, these will not be set as environment variables on
functions. See a full list of system parameters at
https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters
*/
  systemParams?: Map<string, string>;

  /*
(Output)
The time at which the Extension Instance Config was created.
*/
  createTime?: string;

  // The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension)
  extensionRef?: string;

  // The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.
  extensionVersion?: string;

  /*
(Output)
Postinstall instructions to be shown for this Extension, with
template strings representing function and parameter values substituted
with actual values. These strings include: ${param:FOO},
${function:myFunc.url},
${function:myFunc.name}, and ${function:myFunc.location}

- - -
*/
  populatedPostinstallContent?: string;

  /*
List of extension events selected by consumer that extension is allowed to
emit, identified by their types.
*/
  allowedEventTypes?: Array<string>;

  // Fully qualified Eventarc resource name that consumers should use for event triggers.
  eventarcChannel?: string;

  /*
(Output)
The unique identifier for this configuration.
*/
  name?: string;
}

export function firebase_ExtensionsInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "systemParams",
      "Params whose values are only available at deployment time.\nUnlike other params, these will not be set as environment variables on\nfunctions. See a full list of system parameters at\nhttps://firebase.google.com/docs/extensions/publishers/parameters#system_parameters",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "(Output)\nThe time at which the Extension Instance Config was created.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "extensionVersion",
      "The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "populatedPostinstallContent",
      "(Output)\nPostinstall instructions to be shown for this Extension, with\ntemplate strings representing function and parameter values substituted\nwith actual values. These strings include: ${param:FOO},\n${function:myFunc.url},\n${function:myFunc.name}, and ${function:myFunc.location}\n\n- - -",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedEventTypes",
      "List of extension events selected by consumer that extension is allowed to\nemit, identified by their types.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "params",
      "Environment variables that may be configured for the Extension",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "extensionRef",
      "The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension)",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventarcChannel",
      "Fully qualified Eventarc resource name that consumers should use for event triggers.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "(Output)\nThe unique identifier for this configuration.",
      () => [],
      false,
      false,
    ),
  ];
}
