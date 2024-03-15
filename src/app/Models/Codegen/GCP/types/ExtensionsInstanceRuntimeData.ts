import { ExtensionsInstanceRuntimeDataFatalError } from "./ExtensionsInstanceRuntimeDataFatalError";
import { ExtensionsInstanceRuntimeDataProcessingState } from "./ExtensionsInstanceRuntimeDataProcessingState";

export interface ExtensionsInstanceRuntimeData {
  /*
The fatal error state for the extension instance
Structure is documented below.
*/
  FatalError?: ExtensionsInstanceRuntimeDataFatalError;

  /*
The processing state for the extension instance
Structure is documented below.
*/
  ProcessingState?: ExtensionsInstanceRuntimeDataProcessingState;

  // The time of the last state update.
  StateUpdateTime?: string;
}
