import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_MultiplexProgramMultiplexProgramSettings,
  medialive_MultiplexProgramMultiplexProgramSettings_GetTypes,
} from "../types/medialive_MultiplexProgramMultiplexProgramSettings";

export interface MultiplexProgramArgs {
  /*
MultiplexProgram settings. See Multiplex Program Settings for more details.

The following arguments are optional:
*/
  multiplexProgramSettings?: medialive_MultiplexProgramMultiplexProgramSettings;

  // Unique program name.
  programName?: string;

  // Multiplex ID.
  multiplexId?: string;
}
export class MultiplexProgram extends Resource {
  // Multiplex ID.
  public multiplexId?: string;

  /*
MultiplexProgram settings. See Multiplex Program Settings for more details.

The following arguments are optional:
*/
  public multiplexProgramSettings?: medialive_MultiplexProgramMultiplexProgramSettings;

  // Unique program name.
  public programName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "multiplexProgramSettings",
        "MultiplexProgram settings. See Multiplex Program Settings for more details.\n\nThe following arguments are optional:",
        medialive_MultiplexProgramMultiplexProgramSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "programName",
        "Unique program name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "multiplexId",
        "Multiplex ID.",
        [],
        true,
        false,
      ),
    ];
  }
}
