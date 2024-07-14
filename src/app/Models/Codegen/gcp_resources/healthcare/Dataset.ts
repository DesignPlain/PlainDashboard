import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DatasetArgs {
  /*
The location for the Dataset.


- - -
*/
  location?: string;

  // The resource name for the Dataset.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.
*/
  timeZone?: string;
}
export class Dataset extends Resource {
  /*
The location for the Dataset.


- - -
*/
  public location?: string;

  // The resource name for the Dataset.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The fully qualified name of this dataset
  public selfLink?: string;

  /*
The default timezone used by this dataset. Must be a either a valid IANA time zone name such as
"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources
(e.g., HL7 messages) where no explicit timezone is specified.
*/
  public timeZone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZone",
        'The default timezone used by this dataset. Must be a either a valid IANA time zone name such as\n"America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources\n(e.g., HL7 messages) where no explicit timezone is specified.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the Dataset.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name for the Dataset.",
        [],
        false,
        true,
      ),
    ];
  }
}
