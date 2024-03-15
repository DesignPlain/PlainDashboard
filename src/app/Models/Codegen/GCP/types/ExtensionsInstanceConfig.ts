export interface ExtensionsInstanceConfig {
  // Environment variables that may be configured for the Extension
  Params?: Map<string, string>;

  /*
(Output)
Postinstall instructions to be shown for this Extension, with
template strings representing function and parameter values substituted
with actual values. These strings include: ${param:FOO},
${function:myFunc.url},
${function:myFunc.name}, and ${function:myFunc.location}

- - -
*/
  PopulatedPostinstallContent?: string;

  /*
Params whose values are only available at deployment time.
Unlike other params, these will not be set as environment variables on
functions. See a full list of system parameters at
https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters
*/
  SystemParams?: Map<string, string>;

  /*
(Output)
The time at which the Extension Instance Config was created.
*/
  CreateTime?: string;

  // The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.
  ExtensionVersion?: string;

  // The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension)
  ExtensionRef?: string;

  /*
(Output)
The unique identifier for this configuration.
*/
  Name?: string;

  /*
List of extension events selected by consumer that extension is allowed to
emit, identified by their types.
*/
  AllowedEventTypes?: Array<string>;

  // Fully qualified Eventarc resource name that consumers should use for event triggers.
  EventarcChannel?: string;
}
