export interface ConnectionInstallationState {
  /*
(Output)
Output only. Link to follow for next action. Empty string if the installation is already complete.
*/
  ActionUri?: string;

  /*
(Output)
Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.
*/
  Message?: string;

  /*
(Output)
Output only. Current step of the installation process.
*/
  Stage?: string;
}
