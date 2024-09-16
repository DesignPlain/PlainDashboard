import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_MultiplexProgramMultiplexProgramSettings,
  medialive_MultiplexProgramMultiplexProgramSettings_GetTypes,
} from '../types/medialive_MultiplexProgramMultiplexProgramSettings';

export interface MultiplexProgramArgs {
  // Multiplex ID.
  multiplexId?: string;

  /*
MultiplexProgram settings. See Multiplex Program Settings for more details.

The following arguments are optional:
*/
  multiplexProgramSettings?: medialive_MultiplexProgramMultiplexProgramSettings;

  // Unique program name.
  programName?: string;
}
export class MultiplexProgram extends DS_Resource {
  /*
MultiplexProgram settings. See Multiplex Program Settings for more details.

The following arguments are optional:
*/
  public multiplexProgramSettings?: medialive_MultiplexProgramMultiplexProgramSettings;

  // Unique program name.
  public programName?: string;

  // Multiplex ID.
  public multiplexId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'multiplexId',
        'Multiplex ID.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'multiplexProgramSettings',
        'MultiplexProgram settings. See Multiplex Program Settings for more details.\n\nThe following arguments are optional:',
        () => medialive_MultiplexProgramMultiplexProgramSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'programName',
        'Unique program name.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
