export interface ExtensionsInstanceRuntimeDataProcessingState {
  // The processing state of the extension instance.
  State?: string;

  /*
Details about the processing. e.g. This could include the type of
processing in progress or it could list errors or failures.
This information will be shown in the console on the detail page
for the extension instance.
*/
  DetailMessage?: string;
}
